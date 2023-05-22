<script lang="ts">
	import { onMount } from "svelte";
    import {UnstyledButton} from '@svelteuidev/core';
    import {user} from '../../stores/user';
    import SignupModal from './SignupModal.svelte';
    import LoginModal from './LoginModal.svelte';
    
    let loggedIn = false;
    let username = "";

    let signupOpened = false;
    let loginOpened = false;
    
    user.subscribe(value => {
        loggedIn = value.loggedIn;
        username = value.username;
    });

    function handleLogout() {
        user.set({
            loggedIn: false,
            username: "",
        })
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
<header>
    <nav>
        <div class="logo">
            LOGO
        </div>
        <div class="header-buttons">
            <button>
                Welcome {username}
            </button>
            <button on:click={handleLogout}>
                Logout
            </button>
        </div>
    </nav>
</header>
{/if}
<SignupModal bind:signupOpened/>
<LoginModal bind:loginOpened/>
