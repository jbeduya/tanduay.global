<script>
	import Header from '$lib/Header.svelte';

	import Logo from '$lib/Logo.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="https://use.typekit.net/epx3fzz.css" />
	<link rel="stylesheet" href="/css/app.css" />
</svelte:head>

<Header />
<slot />
