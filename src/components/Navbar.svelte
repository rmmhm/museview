<script lang="ts">
	import { onMount } from "svelte";
    import SignupModal from './SignupModal.svelte';
    import LoginModal from './LoginModal.svelte';

    let signupOpened = false;
    let loginOpened = false;

    let loggedIn = false;

    function handleLogin() {
        loggedIn = true;
    }

    function handleLogout() {
        loggedIn = false;
    }


</script>

<style>

    header {
        display: flex;
    }

    nav {
        display: flex;
        justify-content: space-between;
        width: 100vw;
    }

    .header-buttons button {
        margin-left: 1vw;
    }

</style>

{#if !loggedIn}
<header>
    <nav>
        <div class="logo">
            LOGO
        </div>
        <div class="header-buttons">
            <button on:click={() => (loginOpened = true)}>
                Login
            </button>
            <button on:click={() => (signupOpened = true)}>
                Signup
            </button>
        </div>
    </nav>
</header>
{:else}
<h1>
    TEST
</h1>
{/if}
<SignupModal bind:signupOpened/>
<LoginModal bind:loginOpened/>
