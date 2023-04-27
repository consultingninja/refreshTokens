
<script lang="ts">
import Navbar from "$lib/Navbar.svelte";

</script>


<div class='main-app'>
    <Navbar/>
    <div class="main-content-wrapper">
        <slot>
        </slot>
    </div>

</div>



<svelte:head>
    <style>
        body{
            margin:0;
        }
    </style>
    		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</svelte:head>


	

<style>
    .main-app{
        margin: 0;
        margin-top: 3.5em;
        background-color: #242424;
        color: #ffffff;
        display: flex;
        flex-direction: column;

    }
    .main-content-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }
    .top{
        height: 100vh;
        width: 100vw;
        flex-direction: column;
        align-items: center;
    }
    .side{
        height: 100vh;
        flex-direction: row;
        align-items: flex-start;

    }
    .main-content{
        background-color: var(--theme-primaryColor);
        color: var(--theme-textColor);
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }


</style>