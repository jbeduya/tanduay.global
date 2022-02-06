<script context="module">
  export async function load({ fetch }) {
    const response = await fetch("/api/products");

    return {
      status: response.status,
      props: {
        products: response.ok && (await response.json()),
      },
    };
  }
</script>

<script>
  import AboutUs from "$lib/AboutUs.svelte";
  import Accordion from "$lib/Accordion.svelte";
  import ContactUs from "$lib/ContactUs.svelte";
  import Footer from "$lib/Footer.svelte";
  import Hero from "$lib/Hero.svelte";

  import OurLand from "$lib/OurLand.svelte";
  import Products from "$lib/products/Products.svelte";
  import PressReleases from "$lib/press-release/PressReleases.svelte";

  import Stores from "$lib/Stores.svelte";
  import Testimonies from "$lib/Testimonies.svelte";

  export let products = [];

  $: console.log(products);
</script>

<Hero />

<Products {products} />

<AboutUs />

<OurLand />

<Testimonies />

<Stores />

<PressReleases />

<ContactUs />

<Footer />
