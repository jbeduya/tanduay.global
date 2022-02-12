<script>
  import Header from "$lib/Header.svelte";
  import MobileNavigation from "$lib/MobileNavigation.svelte";
</script>

<svelte:head>
  <script
    src="https://unpkg.com/container-query-polyfill/cqfill.iife.min.js"></script>
  <link rel="stylesheet" href="https://use.typekit.net/epx3fzz.css" />
  <link rel="stylesheet" href="/css/app.css" />
</svelte:head>

<Header />

<slot />
