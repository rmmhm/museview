<script lang="ts">
    import {Modal, TextInput, Button} from '@svelteuidev/core';
    export let signupOpened = false;

    let newUser = {
        email: "",
        username: "",
        password: "",
    }

    async function handleSignup() {
        const raw = await fetch('api/users', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        const res = await raw.json();
        console.log(res);
    }
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
    <form on:submit={handleSignup} class="signup-form">
        <TextInput bind:value={newUser.email} label="Email Address" required/>
        <TextInput bind:value={newUser.username} label="Username" required/>
        <TextInput bind:value={newUser.password} label="Password" required/>
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