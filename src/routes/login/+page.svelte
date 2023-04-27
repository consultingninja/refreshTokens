<script lang="ts">
    import { enhance } from '$app/forms';
    import {user} from '../../stores';
    export let form;
    export let data;
    
    let thisForm:HTMLFormElement;

    $: clearUser = data?.clearUser

    $:{
        if(clearUser) user.set(undefined);
    }

    let showPassword:boolean = false;
    
    </script>
    
    <div class="login-wrapper">
    <h2>*ADD WEBSITE LOGO HERE*</h2>
    
        <form bind:this={thisForm} use:enhance method="post" action="?/login">

            <div class="form-item">
                <label for="email" >Email<sup><small class="required">*</small></sup></label>
                <input value={form?.email?? ''} id="email" type="email" name="email" required />
            </div>

            <div class="form-item">
                <label for="password">Password<sup><small class="required">*</small></sup></label>
                <div class="visibility-wrapper">
                    {#if showPassword}
                    <button class="btn-visiblity" type="button" on:click={() => showPassword = false}>
                        <span class="material-symbols-outlined">
                            visibility_off
                        </span>
                    </button>
                    {:else}
                    <button class="btn-visiblity" type="button" on:click={() => showPassword = true}>
                        <span class="material-symbols-outlined">
                        visibility
                        </span>
                    </button>
                    {/if}
                    <input class:fieldError={form?.error} type={showPassword? 'text' : 'password'} id="password" name="password" required />
                </div>

            </div>
        
            <div class="form-item">
            {#if form?.error}
            <small class='error-message'>{form?.message}</small>
            {/if}
            </div>
        
            <div class="form-item">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
            <div class="form-item">
                <a class="reset-link" href="/forgotPassword"><small>Forgot Password?</small></a>
            </div>
        
        </form>
    </div>
    
    <style>
        div{
            color: #FFF;
            margin-bottom: .5em;
        }
        label{
            padding-right: .5em;
        }
        .error-message{
            padding-left: .5em;
            color: #ff0000;
        }
        button{
            width: 100%;
            background-color: #FFF;
            transition: all 0.3s ease-in;
        }
        button:hover{
            cursor: pointer;
            text-decoration: underline;
            color: #FFF;
            background-color: #4d4c4c;
            transition: all 0.3s ease-in;
        }
        .form-item{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .fieldError{
            outline: 2px solid #ff0000;
        }
        .login-wrapper{
            height: 100vh;
        }
        .reset-link{
            color: #FFFFFF;
            text-decoration: none;
        }
        .reset-link:hover{
            text-decoration: underline;
        }
        .required{
            padding-left: .5em;
            color: #ff0000;
        }
        .btn-visiblity{
        border-radius: 9999999px;
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        }
        .btn-visiblity:hover{
            background-color: rgba(0, 0, 0, 0);
        }
        span{
        color: #ffffff;
        border-radius: 115px;
        }
        span:hover{
            color: rgba(255, 255, 255, 0.7);
        }
        .visibility-wrapper{
        display: flex;
        flex-direction: row;
        }
    </style>