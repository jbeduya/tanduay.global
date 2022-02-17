<script>
  import ArrowLeft from "./icons/ArrowLeft.svelte";
  import ArrowRight from "./icons/ArrowRight.svelte";
  import ProductInfo from "./ProductInfo.svelte";

  export let products = [];

  let currentProduct = products[0];
  let productContainer, scroller;

  const productClicked = (idx) => {
    currentProduct = products[idx];
  };

  const nextItems = () => {
    let el = productContainer;
    let left =
      el.scrollWidth - el.scrollLeft === el.clientWidth
        ? 0
        : el.scrollLeft + el.clientWidth;
    productContainer.scroll({
      top: 0,
      left,
      behavior: "smooth",
    });
  };

  const scrollTo = (idx) => {
    let elWidth = window.innerWidth / 2;
    let left = elWidth * idx;
    scroller.scrollTo({
      // top: 0,
      left: left,
      behavior: "smooth",
    });
  };

  const prevProduct = () => {
    let idx = products.findIndex((p) => p.id === currentProduct.id);
    idx = idx === 0 ? products.length - 1 : idx - 1;
    currentProduct = products[idx];
    scrollTo(idx);
  };
  const nextProduct = () => {
    let idx = products.findIndex((p) => p.id === currentProduct.id);
    idx = idx === products.length - 1 ? 0 : idx + 1;
    currentProduct = products[idx];
    scrollTo(idx);
  };
</script>

<section
  class="main"
  id="products"
  style:--background-image={currentProduct.image}
>
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

<div class="mobile-current-image">
  <div class="arrow-left" on:click={prevProduct}><ArrowLeft /></div>
  <div class="image">
    <img src={currentProduct.image} alt="" />
  </div>
  <div class="arrow-right" on:click={nextProduct}><ArrowRight /></div>
</div>

<div class="mobile-product-scroller">
  <div bind:this={scroller} class="product-list">
    {#each products as product, idx}
      <div
        class="product"
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
</div>

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
  .mobile-current-image {
    display: none;
  }

  .arrow-left,
  .arrow-right {
    cursor: pointer;
  }
  .arrow-left {
    display: grid;
    place-items: flex-end;
  }
  .arrow-right {
    display: grid;
    place-items: flex-start;
  }

  .mobile-current-image img {
    height: calc(100vh / 2);
  }
  section {
    --surface-color: #fff;
    display: grid;
    place-items: center;
    background-color: #fbfbf2;
    padding-bottom: 50px;
  }

  .main .container {
    padding: 24px;
  }

  .mobile-product-scroller {
    display: none;
  }

  section.main {
    background: url("/images/products/bg.png") no-repeat;
    background-position-x: right;
    margin-top: 200px;
    background-size: cover;
  }
  .mobile-current-image {
    background: url("/images/products/bg.png") no-repeat;
    background-position-x: right;
    background-size: 80%;
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

  .product-section,
  .mobile-product-scroller {
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

  @media (max-width: 930px) {
    .content {
      grid-template-columns: 1fr;
    }

    section.main {
      background-image: none;
      margin-top: 0;
      padding-bottom: 0;
    }

    h1 {
      font-weight: 300;
      font-size: 3rem;
      margin-bottom: 24px;
    }

    .product-section {
      display: none;
    }

    .right-section {
      width: 0;
      display: none;
    }
    .mobile-current-image {
      padding: 50px 24px;
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      justify-content: center;
      align-items: center;
    }
    .mobile-current-image .image {
      display: grid;
      place-items: center;
    }
    .current-image {
      display: none;
    }

    .mobile-product-scroller {
      display: block;
      padding-bottom: 0px;
    }

    .mobile-product-scroller > .product-list {
      width: 100vw;
      overflow-x: auto;

      /* width: 100vw; */
      grid-auto-columns: 50%;
    }
    .product.active {
      --opacity: 1;
      --product-color: #fcfcf9;
      border-top: var(--border-width) solid var(--border-color);
    }
  }
</style>
