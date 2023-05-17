<script lang="ts">
	import { onMount } from "svelte";
    import {UnstyledButton} from '@svelteuidev/core';
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
    
    let users: any[] = [];

    onMount(async () => {
        const res = await fetch('api/users');
        users = await res.json();
    });
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
        color: #fff;
        background-color: skyblue;
        font-size: 14px;
        line-height: 1;
        border-radius: 500px;
        padding: 18px 48px 16px;
        transition-property: background-color;
        transition-duration: .3s;
        border-width: 0;
        letter-spacing: 2px;
        min-width: 160px;
        text-transform: uppercase;
        white-space: normal;
        cursor: pointer;
        margin-left: 1vw;
    }

    .header-buttons button:hover {
        background-color: lightblue;
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
    test
</h1>
{/if}
<SignupModal bind:signupOpened/>
<LoginModal bind:loginOpened/>
