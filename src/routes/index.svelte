<script context="module">
  export async function load({ fetch }) {
    const response = await fetch("/api/products");
    const cocktails = await fetch("/api/products/cocktails");

    return {
      status: response.status,
      props: {
        products: response.ok && (await response.json()),
        cocktails: cocktails.ok && (await cocktails.json()),
      },
    };
  }
</script>

<script>
  import AboutUs from "$lib/AboutUs.svelte";
  import ContactUs from "$lib/ContactUs.svelte";
  import Footer from "$lib/Footer.svelte";
  import Hero from "$lib/Hero.svelte";

  import OurLand from "$lib/OurLand.svelte";
  import Products from "$lib/products/Products.svelte";
  import PressReleases from "$lib/press-release/PressReleases.svelte";

  import Stores from "$lib/Stores.svelte";
  import Testimonies from "$lib/Testimonies.svelte";
  import CocktailCulture from "$lib/cocktail-culture/CocktailCulture.svelte";
  import Videos from "$lib/Videos.svelte";
  import ContactForm from "$lib/ContactForm.svelte";

  export let products = [];
  export let cocktails = [];
</script>

<Hero />

<Products {products} />

<AboutUs />

<OurLand />

<Testimonies />

<CocktailCulture {cocktails} />

<Stores />

<Videos />

<PressReleases />

<ContactUs />

<ContactForm />
