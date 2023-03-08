<script>
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import "/src/style.css";
</script>

<div class="container">
	<Header />
	<main>
		<slot />
	</main>

	<Footer />
</div>
