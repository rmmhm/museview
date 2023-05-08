<script lang="ts">
    export let showModal: boolean;
    let dialog: HTMLDialogElement;
    $: if (showModal && dialog) 
        dialog.showModal();
</script>

<style>
    button {
        top: 10px;
        right: 10px;
        font-size: 24px;
        position: absolute;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
    bind:this={dialog}
    on:close={() => {showModal = false}}
    on:click|self={() => dialog.close()}
>
    <div on:click|stopPropagation>
        <h2>
            Join Museview
        </h2>
        <!-- svelte-ignore a11y-autofocus -->
        <button autofocus on:click={() => dialog.close()}>X</button>
        <form action='#'>
            <section>
                <div class="signup-row">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label>
                        Email Address
                    </label>
                    <input type="email" name="emailAddress" inputmode="email" value>
                </div>
                <div class="signup-row">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label>
                        Username
                    </label>
                    <input type="text" name="username" value>
                </div>
                <div class="signup-row">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label>
                        Password
                    </label>
                    <input type="text" name="password" value>
                </div>
            </section>
        </form>
    </div>
</dialog>

