<script lang="ts">
    import {Modal, TextInput, Button} from '@svelteuidev/core';
    import {user} from '../../stores/user'
    export let loginOpened = false;

    let creds = {
        username: '',
        password: '',
    }

    async function handleLogin() {
        const success = await fetch(`api/users/auth?username=$(creds.username}&password=$(creds.password}))`);
        if (success) {
            const userData = {
                loggedIn: true,
                username: creds.username,
            }
            user.set(userData);
            loginOpened = false;
        }
    }
</script>

<style>
    .button {
        margin-top: 10px;
    }
</style>
<Modal centered opened={loginOpened} on:close={() => (loginOpened = false)} title="Login">
    <form on:submit={handleLogin} class="login-form">
        <TextInput bind:value={creds.username} label="Username" required/>
        <TextInput bind:value={creds.password} label="Password" required/>
        <div class="button">
            <Button type="submit" ripple>Login</Button>
        </div>
    </form>
</Modal>