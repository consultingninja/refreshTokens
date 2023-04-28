


export const authCheck = async (fetch)=>{
    const checkAuthResonse =  await fetch('/api/checkAuth',{method: 'POST',credentials: 'include'});
    const status = checkAuthResonse.status;
    const checkAuthData = await checkAuthResonse.json();
    const checkAuthResult = checkAuthData.success;
    const userMinusPassword = checkAuthData.data;
    return {
        status,
        checkAuthResult,
        userMinusPassword
    }

}