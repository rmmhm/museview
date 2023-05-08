<script>
    import SignupModal from "./SignupModal.svelte";

    let showModal = false;
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

<header>
    <nav>
        <div class="logo">
            LOGO
        </div>
        <div class="header-buttons">
            <button>
                Login
            </button>
            <button on:click={() => (showModal = true)}>
                Signup
            </button>
        </div>
    </nav>
</header>

<SignupModal bind:showModal />
