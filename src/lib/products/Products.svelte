<script>
  import ArrowRight from "./icons/ArrowRight.svelte";
  import ProductInfo from "./ProductInfo.svelte";

  export let products = [];

  let currentProduct = products[0];
  let productContainer;

  const productClicked = (idx) => {
    currentProduct = products[idx];
  };

  const nextItems = () => {
    let el = productContainer;
    let left =
      el.scrollWidth - el.scrollLeft === el.clientWidth
        ? 0
        : el.scrollLeft + el.clientWidth;
    console.log("LEFT", left);
    productContainer.scroll({
      top: 0,
      left,
      behavior: "smooth",
    });
  };
</script>

<section class="main" style:--background-image={currentProduct.image}>
  <div class="container">
    <h1 class="garamond">Our Products</h1>

    <div class="content">
      <div class="details">
        <ProductInfo product={currentProduct} />
      </div>
      <div class="right-section" />
    </div>

    <img class="current-image" src={currentProduct.image} alt="" />
  </div>
</section>

<section class="product-section">
  <div class="product-container">
    <div bind:this={productContainer} class="product-list">
      {#each products as product, idx}
        <div
          class="product inline-snap"
          class:active={product.id === currentProduct.id}
          on:click={() => productClicked(idx)}
        >
          <div class="thumbnail">
            <img loading="lazy" src={product.thumbnail} alt={product.name} />
          </div>
          <div class="details">
            <h2 class="garamond">{product.name}</h2>
          </div>
        </div>
      {/each}
    </div>
    <div>
      <span class="arrow" on:click={nextItems}>
        <ArrowRight />
      </span>
    </div>
  </div>
</section>

<style>
  section {
    --surface-color: #fff;
    display: grid;
    place-items: center;
    background-color: #fbfbf2;
    padding-bottom: 50px;
  }

  section.main {
    background: url("/images/products/bg.png") no-repeat;
    background-position-x: right;
    margin-top: 200px;
    background-size: cover;
  }
  h1 {
    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;
    margin: 50px 0;
    font-size: var(--title-size, 55px);
  }

  .container,
  .product-container {
    max-width: calc(var(--max-width) - 200px);
    width: 100%;
    position: relative;
  }

  .product-container {
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    cursor: pointer;
  }

  .current-image {
    position: absolute;
    right: 200px;
    top: 200px;
    height: 120%;
  }

  .container {
    padding-left: var(--padding-left);
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .product-section {
    --surface-color: #fff;
    --opacity: 0.5;
    --product-color: transparent;
    --border-width: 3px;
    --border-color: #d18b3f;
    background-color: var(--surface-color);
    padding-bottom: 200px;
  }

  .product-list {
    width: 700px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 25%;
    overflow-x: hidden;
  }

  .product {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    padding: 20px;
    justify-content: center;
    align-items: center;
    opacity: var(--opacity);
    border-top: var(--border-width) solid transparent;
    background-color: var(--product-color);
    cursor: pointer;
  }

  .product:hover {
    border-top: var(--border-width) solid var(--border-color);
  }

  .product.active {
    --opacity: 1;
    --product-color: #fcfcf9;
    border-top: var(--border-width) solid var(--border-color);
  }

  .product h2 {
    font-size: 18px;
    font-weight: normal;
  }

  .product .thumbnail img {
    height: 135px;
  }

  .inline-snap {
    scroll-snap-type: inline mandatory;
  }

  .inline-snap > * {
    scroll-snap-align: start;
  }
</style>
