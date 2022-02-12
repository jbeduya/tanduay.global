<script>
  import { browser } from "$app/env";

  import BigArrow from "$lib/products/icons/BigArrow.svelte";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import CocktailInfo from "./CocktailInfo.svelte";

  export let cocktails = [];

  let counter = 0;

  let open = writable(false);
  let el, paddingLeft, scroll_container, cards;

  // const isVisibleInContainer = (ele, container) => {
  //   const eleLeft = ele.offsetLeft;
  //   const eleRight = eleLeft + ele.clientWidth;

  //   const containerLeft = container.scrollLeft;
  //   const containerRight = containerLeft + container.clientWidth;

  //   // The element is fully visible in the container
  //   return (
  //     (eleLeft >= containerLeft && eleRight <= containerRight) ||
  //     // Some part of the element is visible in the container
  //     (eleLeft < containerLeft && containerLeft < eleRight) ||
  //     (eleLeft < containerRight && containerRight < eleRight)
  //   );
  // };

  const isVisibleInContainer = (el, container) => {
    const { x, width } = el.getBoundingClientRect();
    const rect = container.getBoundingClientRect();

    const elWidth = x + width;
    const rectWidth = rect.x + rect.width;

    return x >= rect.x && elWidth <= rectWidth;
  };

  let timeout;
  let ticking = false;

  const isCardVisible = () => {
    // if (!ticking) {
    //   window.requestAnimationFrame(() => {
    //     // cards.forEach((card) => {
    //     //   let isVisible = isVisibleInContainer(card, scroll_container);
    //     //   card.classList.toggle("isVisible", isVisible);
    //     //   counter++;
    //     //   console.log("IDX", counter);
    //     // });

    //     let items = document.querySelectorAll(".cocktail-item.isVisible");
    //     if (items && items[0]) {
    //       items[0].classList.add("scaled");
    //     }
    //     ticking = false;
    //     console.log("DONE.", ticking);
    //   });
    //   ticking = true;
    //   console.log("TICKING", ticking);
    // }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cards.forEach((card) => {
        card.classList.toggle(
          "isVisible",
          isVisibleInContainer(card, scroll_container)
        );
        card.classList.toggle("scaled", false);
        counter++;
      });

      let items = document.querySelectorAll(".cocktail-item.isVisible");
      if (items && items[0]) {
        items[0].classList.add("scaled");
      }
      clearTimeout(timeout);
    }, 200);
  };

  onMount(() => {
    const resize = (e) => {
      let box = el.getBoundingClientRect();
      // @ts-ignore
      paddingLeft = `${box.x + 20}px`;
    };

    cards = document.querySelectorAll(".cocktail-item");

    window.addEventListener("resize", resize);
    window.addEventListener("resize", isCardVisible, { passive: true });
    scroll_container.addEventListener("scroll", isCardVisible, {
      passive: true,
    });

    open.subscribe((isOpen) => {
      document.body.classList.toggle("no-scroll", isOpen);
    });

    // initial call
    resize();
    isCardVisible();

    return () => {
      scroll_container.removeEventListener("scroll", isCardVisible);
      window.removeEventListener("resize", isCardVisible);
      window.removeEventListener("resize", resize);
    };
  });

  const onlyUnique = (value, index, self) => self.indexOf(value) === index;

  let currentCategory = "all";
  let selectedItem;

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

  let timeout2;

  const changeCategory = (category) => {
    currentCategory = category;
    timeout2 = setTimeout(() => {
      clearTimeout(timeout2);
      cards = document.querySelectorAll(".cocktails > .cocktail-item");
    }, 10);
  };

  const scrollIntoView = (el) => {};

  const show = (id) => {
    selectedItem = cocktails.filter((c) => c.id === id)[0];
    $open = true;
  };
</script>

<section class="main" style:--padding-left={paddingLeft}>
  <div bind:this={el} class="dummy-container">&nbsp;</div>
  <div class="container">
    <div class="content">
      <div class="left">
        <div>
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
      </div>
      <div class="cocktails" bind:this={scroll_container}>
        {#each currentItems as cocktail}
          <div
            class="cocktail-item"
            on:click={scrollIntoView}
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
    </div>
  </div>
</section>

<section class="detail" class:open={$open}>
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
  section.detail {
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
    grid-template-columns: 1fr auto;
    justify-content: start;
    align-items: flex-start;
    transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  section.detail.open {
    visibility: visible;
    left: 0;
  }

  section.detail :is(.info, .cancel) {
    height: 100vh;
  }

  section.detail :is(.info) {
    background-color: #fff;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
    width: 700px;
  }

  .inside {
    height: 100%;
    width: 100%;
  }

  .dummy-container {
    max-width: var(--max-width);
    width: 100vw;
  }

  section.main {
    display: grid;
    place-items: center;
    padding: 100px 0 200px 0;
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
    font-size: 24px;
    padding: 5px 0;
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

  h1 {
    font-size: 55px;
    font-weight: normal;
    text-transform: uppercase;
    font-style: italic;
    margin-bottom: 50px;
    width: 40px;
  }

  h2 {
    color: white;
    font-size: 30px;
    font-weight: normal;
    display: inline-block;
  }

  .left {
    padding-right: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label {
    display: block;
    color: #b5af87;
    font-size: 20px;
  }
  .content {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-left: var(--padding-left);
  }
  .cocktails {
    display: grid;
    gap: 4rem;
    padding: 50px 0;
    grid-auto-flow: column;

    overflow-x: auto;
    overscroll-behavior-inline: contain;

    scroll-snap-type: inline mandatory;
    scroll-padding-inline: 1.5rem;
    padding-right: 40px;
    padding-bottom: 6rem;
    padding-left: 3em;
  }

  .cocktails > * {
    scroll-snap-align: start;
  }

  :global(.cocktails > .isVisible.scaled) {
    transform: scale(1.2);
  }

  .cocktail-item {
    height: 500px;
    border-radius: 20px;
    background: var(--image) no-repeat;
    background-size: cover;
    min-width: 400px;
    transition-duration: 100ms;
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

    display: grid;
    grid-template-rows: 1fr auto;
    padding: 50px;
  }

  .clickable {
    cursor: pointer;
  }

  @media (max-width: 930px) {
    .content {
      grid-template-columns: 1fr;
    }

    section.detail :is(.info) {
      width: calc(100vw - 10px);
    }
    .cocktails {
      gap: 3rem;
    }

    .cocktails > * {
      scroll-snap-align: center;
    }

    .cocktail-item {
      min-width: calc(100vw / 1.6) !important;
      height: calc(100vw / 1.2) !important;
    }

    .left {
      padding: 20px;
      margin: 0;
    }
    h1 {
      text-align: center;
      font-size: 2rem;
      padding: 0;
      padding-bottom: 20px;
      margin: 0;
      width: 100%;
    }
    li {
      font-size: 1rem;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-bottom: 20px;
    }
  }
</style>
