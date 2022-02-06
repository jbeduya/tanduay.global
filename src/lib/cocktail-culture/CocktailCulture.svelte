<script>
  import BigArrow from "$lib/products/icons/BigArrow.svelte";
  import { onMount } from "svelte";
  import CocktailInfo from "./CocktailInfo.svelte";

  export let cocktails = [];

  let el, paddingLeft;

  onMount(() => {
    const resize = (e) => {
      let box = el.getBoundingClientRect();
      // @ts-ignore
      paddingLeft = `${box.x + 20}px`;
    };
    window.addEventListener("resize", resize);

    // initial call
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  const onlyUnique = (value, index, self) => self.indexOf(value) === index;

  let currentCategory = "all";
  let open = false;
  let detail, selectedItem;

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

  const show = (id) => {
    selectedItem = cocktails.filter((c) => c.id === id)[0];
    open = true;
  };
</script>

<section class="main" style:--padding-left={paddingLeft}>
  <div bind:this={el} class="dummy-container">&nbsp;</div>
  <div class="container">
    <div class="content">
      <div class="left">
        <div>
          <h1 class="garamond">Cocktail <br /> Culture</h1>
          <ul>
            <li
              on:click={() => (currentCategory = "all")}
              class:active={currentCategory == "all"}
            >
              All
            </li>
            {#each categories as category}
              <li
                class:active={currentCategory === category}
                on:click={() => (currentCategory = category)}
              >
                {category}
              </li>
            {/each}
          </ul>
        </div>
      </div>
      <div class="cocktails">
        {#each currentItems as cocktail}
          <div class="cocktail-item" style:--image="url('/images/dummy.png')">
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

<section bind:this={detail} class="detail" class:open>
  <div class="cancel" on:click={() => (open = false)}>
    <div class="inside">&nbsp;</div>
  </div>
  <div class="info">
    <CocktailInfo
      on:select={(e) => show(e.detail)}
      on:close={() => (open = false)}
      cocktail={selectedItem}
      suggestions={suggestedItems}
    />
  </div>
</section>

<style>
  section.detail {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: calc(100vw - 10px);
    z-index: 1;

    background-color: transparent;

    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: start;
    align-items: flex-start;
    transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  section.detail.open {
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
  }

  h2 {
    color: white;
    font-size: 35px;
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
    grid-auto-columns: 40%;

    overflow-x: auto;
    overscroll-behavior-inline: contain;

    scroll-snap-type: inline mandatory;
    padding-right: 20px;
  }

  .cocktails > * {
    scroll-snap-align: start;
  }

  .cocktail-item {
    height: 570px;
    border-radius: 20px;
    background: var(--image) no-repeat;
    background-size: cover;
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
</style>
