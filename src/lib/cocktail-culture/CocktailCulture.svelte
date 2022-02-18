<script>
  import { browser } from "$app/env";

  import BigArrow from "$lib/products/icons/BigArrow.svelte";

  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { Swiper, Scrollbar } from "swiper";
  import "swiper/css";
  import "swiper/css/scrollbar";
  import CocktailInfo from "./CocktailInfo.svelte";

  export let cocktails = [];

  let selectedItem,
    currentCategory = "all";

  const onlyUnique = (value, index, self) => self.indexOf(value) === index;
  $: categories = cocktails.map((c) => c.category).filter(onlyUnique);
  $: if (categories.length > 1) {
    currentCategory = categories[0];
  }
  $: currentItems =
    currentCategory === "all"
      ? cocktails
      : cocktails.filter((c) => c.category === currentCategory);

  $: suggestedItems = cocktails.filter(
    (c) =>
      selectedItem &&
      selectedItem.suggestions &&
      selectedItem.suggestions.includes(c.id)
  );

  let innerWidth,
    containerPadding = 0;

  $: if (innerWidth) {
    containerPadding = document.querySelector(
      "#products .container .detail"
    ).offsetLeft;
  }

  const changeCategory = (category) => {
    currentCategory = category;
  };

  let open = writable(false);
  open.subscribe((isOpen) => {
    if (browser) {
      document.body.classList.toggle("no-scroll", isOpen);
    }
  });

  const show = (id) => {
    selectedItem = cocktails.filter((c) => c.id === id)[0];
    $open = true;
  };

  let swiper;

  $: if (currentItems.length && swiper) {
    setTimeout(() => {
      swiper.update();
    }, 200);
  }

  onMount(() => {
    innerWidth = window.innerWidth;
    containerPadding = document.querySelector(
      "#products .container .detail"
    ).offsetLeft;

    swiper = new Swiper("#cocktail-items", {
      slidesPerView: "auto",
      spaceBetween: 60,
      freeMode: true,
      centeredSlides: true,
      modules: [Scrollbar],
      scrollbar: {
        el: ".cocktails-scrollbar",
        draggable: true,
        snapOnRelease: true,
      },
      breakpoints: {
        320: {
          spaceBetween: 40,
        },
        930: {
          spaceBetween: 60,
        },
      },
    });
    swiper.slideNext();
  });
</script>

<svelte:window bind:innerWidth />

<section id="cocktail-culture" style:padding-left={containerPadding + "px"}>
  <div class="container">
    <div class="navigation">
      <h1 class="garamond">Cocktail Culture</h1>

      <ul>
        <li
          on:click={() => changeCategory("all")}
          class:active={currentCategory == "all"}
        >
          All
        </li>
        {#each categories as category}
          <li
            class:active={currentCategory === category}
            on:click={() => changeCategory(category)}
          >
            {category}
          </li>
        {/each}
      </ul>
    </div>
    <div id="cocktail-items" class="items swiper">
      <div class="swiper-wrapper">
        {#each currentItems as cocktail}
          <div
            class="cocktail-item swiper-slide"
            style:--image="url('/images/dummy.png')"
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
      <div class="cocktails-scrollbar swiper-scrollbar" />
    </div>
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
    padding-top: 48px;
    padding-bottom: 48px;
  }
  h1 {
    font-size: 3rem;
    font-weight: normal;
    text-transform: uppercase;
    font-style: italic;
    width: 350px;
    margin-bottom: 1rem;
  }
  h2 {
    color: white;
    font-size: 1.5rem;
    font-weight: normal;
    display: inline-block;
  }

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
  }
  ul {
    margin-left: 30px;
  }

  li {
    cursor: pointer;
    text-transform: uppercase;
    color: #93936c;
    font-size: 1.5rem;
    padding: 5px 0;
    margin: 1rem 0;
  }

  li:hover {
    color: #d18b3f;
  }

  li.active,
  li.active::before {
    color: #d18b3f;
    font-weight: bold;
  }

  li::before {
    content: "\2014";
    color: transparent;
    margin-right: 10px;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 24px;
  }

  .items {
    height: 600px;
    width: 100%;
    padding: 100px 0;
    padding-left: 50px;
  }

  .container {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .cocktail-item {
    border-radius: 20px;
    background: var(--image) no-repeat;
    background-size: cover;
    height: 350px;
    width: 300px;
    transition-duration: 250ms;
  }

  :global(.cocktail-item.swiper-slide-active) {
    transform: scale(1.2);
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
  }

  .cocktail-item .label {
    display: block;
    color: #b5af87;
    font-size: 1rem;
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
    grid-template-columns: 100px auto;
    justify-content: start;
    align-items: flex-start;
    transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    padding: 0;
  }

  section.cocktail-detail.open {
    visibility: visible;
    left: 0;
  }

  section.cocktail-detail :is(.info, .cancel) {
    height: 100vh;
  }

  section.cocktail-detail :is(.info) {
    background-color: #fff;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
  }

  :global(.cocktails-scrollbar .swiper-scrollbar-drag) {
    background-color: #d18b40;
    height: 6px;
  }

  @media (max-width: 930px) {
    .items {
      padding-left: 20px;
      height: 500px;
    }
    .cocktail-item {
      height: 300px;
      width: 250px;
    }
    .container {
      grid-template-columns: 1fr;
      padding: 0;
    }
    h1 {
      width: 100%;
      text-align: center;
      font-size: 2rem;
      margin-bottom: 3rem;
    }

    ul {
      margin: 0;
      padding: 0 16px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 0.7rem;
    }
    li {
      padding: 0;
      margin: 0;
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    .items {
      padding-left: 0;
    }
  }
</style>
