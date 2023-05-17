<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
	import Navbar from '../lib/components/Navbar.svelte';

</script>

<style>
	:global(body) {
		font-family: Helvetica, sans-serif;
	}
	h1 {
		text-align: center;
	}
</style>


<SvelteUIProvider>
	<Navbar />
	<h1>
		Welcome to Museview
	</h1>
	
</SvelteUIProvider>
