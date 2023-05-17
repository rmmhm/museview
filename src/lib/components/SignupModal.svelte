<script lang="ts">
    import {Modal, TextInput, Button} from '@svelteuidev/core';
    export let signupOpened = false;
</script>

<style>
    .checkbox {
        margin-top: 7px;
    }

    .button {
        margin-top: 7px;
    }
</style>
<Modal centered opened={signupOpened} on:close={() => (signupOpened = false)} title="Join Museview">
    <form action='#' class="signup-form">
        <TextInput label="Email Address" />
        <TextInput label="Username" />
        <TextInput label="Password" />
        <div class="checkbox">
            <input type="checkbox" name="tosAndAge" value="true" />
            I am at least 13 years old and accept the
            <br />
            <a href="/" target="_blank" rel="noopener noreferer">
                Terms of Service.
            </a>
        </div>
        <div class="checkbox">
            <input type="checkbox" name="privacy" value="true" />
            I accept the
            <a href="/" target="_blank" rel="noopener noreferer">
                Privacy Policy
            </a>
            and consent to 
            <br />
            Museview's use of my personal information according to it.
        </div>
        <div class="button">
            <Button type="submit" ripple>Signup</Button>
        </div>
    </form>
</Modal>