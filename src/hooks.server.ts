import { sequence } from '@sveltejs/kit/hooks';
import { dbConn } from './dbConn';
import { findUserByUrl } from './backendUtils';
import { SECRET_KEY } from '$env/static/private';
import jwt from 'jsonwebtoken';

async function firstHandle({ event, resolve }) {
    //console.log('first handle');
    //event.locals = "I went through the first load!"
    const authToken = event.cookies.get('authToken');
    try{
        if(!authToken) event.locals.authedUser = undefined;

        const claims = jwt.verify(authToken,SECRET_KEY);
        if(!claims) event.locals.authedUser = undefined;

        if(authToken && claims){
            const collection = await dbConn();
            const fullUser = await findUserByUrl(collection,claims.authedUser.URL);
            const {password,...userMinusPassword} = fullUser;
            event.locals.authedUser = userMinusPassword;

        }
    }
    finally{
        const response = await resolve(event);
        return response;
    }
}

async function secondHandle({ event, resolve }) {
    //console.log('second handle');
    //console.log(event);
    if(!event.locals.authedUser){
        const refreshToken = event.cookies.get('refreshToken');
        try{
            if(!refreshToken) event.locals.authedUser = undefined;
    
            const claims = jwt.verify(refreshToken,SECRET_KEY);
            if(!claims) event.locals.authedUser = undefined;
    
            if(refreshToken && claims){
                const collection = await dbConn();
                const fullUser = await findUserByUrl(collection,claims.authedUser.URL);
                const {password,...userMinusPassword} = fullUser;
                event.locals.authedUser = userMinusPassword;
                const authToken = jwt.sign({authedUser:userMinusPassword},SECRET_KEY,{expiresIn:10});
                event.cookies.set('authToken',authToken,{httpOnly: true,maxAge:60 * 60 * 24,sameSite: 'strict'});
    
            }
        }
        finally{
            const response = await resolve(event);
            return response;
        }

    }
    if(event.locals){
        const response = await resolve(event);
        return response;
    }

}

export const handle = sequence(firstHandle, secondHandle);