<script context="module">
  export async function load({ fetch, session }) {
    if (session && !session.accepted) {
      console.log(session.accepted);
      return {
        redirect: "/warning",
        status: 302,
      };
    }

    const cocktails = await fetch("/api/products/cocktails");
    return {
      props: {
        cocktails: cocktails.ok && (await cocktails.json()),
      },
      status: 200,
    };
  }
</script>

<script>
  import { browser } from "$app/env";
  import Button from "$lib/Button.svelte";
  import CocktailInfo from "$lib/cocktail-culture/CocktailInfo.svelte";
  import BigArrow from "$lib/products/icons/BigArrow.svelte";
  import { writable } from "svelte/store";
  export let cocktails = [];
  import { navigation } from "$lib/stores/navigation";

  // navigation manipulation
  $navigation.forEach((item) => {
    item.active = false;
  });

  $navigation[3].active = true;
  $navigation[3].url = "/cocktail-culture";
  $navigation[5].url = "/press-release";

  let open = writable(false),
    showLoadMore = true,
    selectedItem;
  let itemCount = 9; // show the first 12 items

  open.subscribe((isOpen) => {
    if (browser) {
      document.body.classList.toggle("no-scroll", isOpen);
    }
  });

  $: items = cocktails.slice(0, itemCount);

  $: suggestedItems = cocktails.filter(
    (c) =>
      selectedItem &&
      selectedItem.suggestions &&
      selectedItem.suggestions.includes(c.id)
  );

  const show = (id) => {
    selectedItem = cocktails.filter((c) => c.id === id)[0];
    $open = true;
  };

  const loadMore = () => {
    itemCount += 6;
    if (itemCount >= cocktails.length) {
      showLoadMore = false;
    }
  };
</script>

<section>
  <div class="container">
    <h1>Cocktail Culture</h1>

    <div class="cocktails">
      {#each items as cocktail}
        <div
          class="cocktail-item"
          style:background-image="url('/images/cocktails/{cocktail.photo === ""
            ? "dummy.png"
            : cocktail.photo}"
        >
          <div class="cocktail-content">
            <span />
            <div class="clickable" on:click={() => show(cocktail.id)}>
              <div class="label">{cocktail.product}</div>
              <h2 class="garamond">{cocktail.name} &nbsp; <BigArrow /></h2>
            </div>
          </div>
        </div>
      {/each}
    </div>

    {#if showLoadMore}
      <div class="more">
        <Button on:click={loadMore}>Load More</Button>
      </div>
    {/if}
  </div>
</section>

<section class="cocktail-detail" class:open={$open}>
  <div class="cancel" on:click={() => ($open = false)}>
    <div class="inside">&nbsp;</div>
  </div>
  <div class="info">
    <CocktailInfo
      on:select={(e) => show(e.detail)}
      on:close={() => ($open = false)}
      cocktail={selectedItem}
      suggestions={suggestedItems}
    />
  </div>
</section>

<style>
  section {
    --h1-font-size: 2.5rem;
    --garamond: adobe-garamond-pro, sans-serif;
  }
  h1 {
    font-size: var(--h1-font-size);
    font-family: var(--garamond);
    font-weight: 200;
    font-style: italic;
    text-transform: uppercase;
    padding: 2rem;
  }

  h2 {
    color: white;
    font-size: 1.5rem;
    font-weight: normal;
    display: inline-block;
  }

  .container {
    max-width: calc(var(--max-width) - 100px);
    width: 100%;
    margin: 0 auto;
  }

  .cocktails {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem;
  }

  .cocktail-item {
    height: 500px;
    transition-duration: 0.2s;
    background-size: cover;
    border-radius: 20px;
    background-repeat: no-repeat;
  }

  .cocktail-item .label {
    display: block;
    color: #b5af87;
    font-size: 1rem;
  }

  .cocktail-item:hover {
    transform: scale(1.1);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
  }

  .cocktail-content {
    inline-size: 100%;
    height: 100%;
    border-radius: 20px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 35%,
      rgba(255, 255, 255, 0) 100%
    );

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem 1rem;
  }

  .clickable {
    cursor: pointer;
  }

  section.cocktail-detail {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: calc(100vw - 10px);
    visibility: hidden;
    z-index: 1;

    background-color: transparent;
    backdrop-filter: blur(4px);

    display: grid;
    grid-template-columns: 1fr minmax(250px, 600px);
    justify-content: start;
    align-items: flex-start;
    transition: all 250ms cubic-bezier(0.68, 0, 0.265, 0.55);
    padding: 0;
    z-index: 999999;
  }

  section.cocktail-detail.open {
    visibility: visible;
    left: 0;
  }

  section.cocktail-detail :is(.info, .cancel) {
    height: 100%;
  }

  section.cocktail-detail :is(.info) {
    background-color: #fff;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
  }

  .more {
    display: grid;
    place-items: center;
    padding-top: 2rem;
  }

  @media (max-width: 930px) {
    .cocktails {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 650px) {
    .cocktails {
      grid-template-columns: 1fr;
    }
    .cocktail-item:hover {
      transform: unset;
    }
  }
</style>
