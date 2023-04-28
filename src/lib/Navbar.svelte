<script>

    

</script>

<nav class="nav-base">
    <a href="/">Home</a>
    <a href="/login">Login</a>
    <a href="/protRoute">Protected Route</a>
    <a data-sveltekit-preload-data="off" href='/logout'>Logout</a>

</nav>

<style>
    .nav-base{
        display: flex;
        height: 1.5em;
        top:0;
        position: fixed;
        width:100%;
        padding-top: 1em;
        background: linear-gradient(to right, #FFFFFF, #242424);
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(122, 117, 117,0.3);
        padding-bottom: 1em;
        transition: all 0.3s ease-out;
        transition: all 0.3s ease-in;
    }

    a{
        color:#000000;
        text-decoration: none;
        margin-left: 1em;
        font-size: larger;
        padding:2px;
    }
    a:hover{
        opacity: .8;
        text-decoration: underline;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        padding:2px;

    }

</style>