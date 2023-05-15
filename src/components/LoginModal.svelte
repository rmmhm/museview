<script lang="ts">
    import {Modal, TextInput, Button} from '@svelteuidev/core';
    export let loginOpened = false;
</script>

<style>
    .button {
        margin-top: 10px;
    }
</style>
<Modal centered opened={loginOpened} on:close={() => (loginOpened = false)} title="Login">
    <form action='#' class="login-form">
        <TextInput label="Username" />
        <TextInput label="Password" />
        <div class="button">
            <Button type="submit" ripple>Signup</Button>
        </div>
    </form>
</Modal>