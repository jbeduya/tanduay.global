<script>
  import ProductInfo from "./ProductInfo.svelte";
  import { Swiper, Navigation } from "swiper";

  import "swiper/css";
  import "swiper/css/navigation";
  import ArrowLeft from "./icons/ArrowLeft.svelte";
  import ArrowRight from "./icons/ArrowRight.svelte";
  import { onMount } from "svelte";

  let idx = 0,
    swiper;
  export let products = [];
  $: currentProduct = products[idx];

  const productClicked = (index) => {
    idx = index;
  };

  onMount(() => {
    swiper = new Swiper(".products-swiper", {
      slidesPerView: "auto",
      spaceBetween: 0,
      centeredSlides: false,
      freeMode: true,
      rewind: true,
      lazy: true,
    });
  });

  const swipeLeft = () => {
    if (idx == 0) {
      idx = products.length - 1;
    } else {
      idx--;
    }
    swiper.slideTo(idx, 200);
  };

  const swipeRight = () => {
    if (idx == products.length - 1) {
      idx = 0;
    } else {
      idx++;
    }
    swiper.slideTo(idx, 200);
  };
</script>

<section id="products">
  <div class="container">
    <div class="detail">
      <ProductInfo product={currentProduct} />
    </div>
    <div class="preview">
      <div class="scroll-navigations">
        <span id="products-swiper-button-prev" on:click={swipeLeft}>
          <ArrowLeft />
        </span>
        <span id="products-swiper-button-next" on:click={swipeRight}
          ><ArrowRight /></span
        >
      </div>
      <img
        loading="lazy"
        src={currentProduct.thumbnail}
        alt={currentProduct.name}
      />
    </div>
  </div>
  <div class="items-wrapper">
    <div class="products">
      <div class="products-swiper swiper">
        <div class="swiper-wrapper">
          {#each products as product, idx}
            <div
              class="product swiper-slide"
              class:active={product.id === currentProduct.id}
              data-id={product.id}
              on:click={() => productClicked(idx)}
            >
              <div class="thumbnail">
                <img
                  loading="lazy"
                  src={product.thumbnail}
                  alt={product.name}
                />
              </div>
              <div class="details">
                <h3 class="garamond">{product.name}</h3>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    --surface-color: #fbfbf2;
    --padding: 24px;
    --max-width: calc(var(var(--max-width) - 200px));
    --border-width: 3px;
    --border-color: #d18b3f;
    --opacity: 0.6;
    /* background: url(/images/products/bg.png) no-repeat; */
    background-size: 1000px;
    background-position: top right;
    background-color: var(--surface-color);
    padding-top: 48px;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: normal;
  }

  .container {
    display: grid;
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    grid-template-columns: 2fr 1fr;
  }

  .detail {
    padding-left: 150px;
    padding-right: 150px;
    padding-bottom: 50px;
  }

  .preview {
    display: grid;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    padding-right: 150px;
  }

  .preview img {
    height: 600px;
    position: relative;
    bottom: -150px;
  }

  .scroll-navigations {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    position: absolute;
    bottom: -140px;
    padding: 0 30px;
  }

  .scroll-navigations span {
    cursor: pointer;
  }

  .scroll-navigations > :first-child {
    /* display: none; */
    padding-right: 00.5rem;
    padding-left: .5rem;
  }

  .items-wrapper {
    background-color: #fff;
  }

  .items-wrapper .products {
    max-width: var(--max-width);
    margin: 0 auto;
    padding-left: 150px;
    padding-right: 500px;
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
    width: 12rem;
  }

  .product .thumbnail img {
    height: 135px;
  }

  .product:hover {
    border-top: var(--border-width) solid var(--border-color);
  }

  .product.active {
    --opacity: 1;
    --product-color: #fcfcf9;
    border-top: var(--border-width) solid var(--border-color);
  }

  .product:hover,
  .product.active {
    opacity: 1;
  }

  @media (max-width: 1300px) {
    .items-wrapper .products {
      padding-right: 400px;
    }
  }
  @media (max-width: 1200px) {
    .detail {
      padding-right: 50px;
    }

    .items-wrapper .products {
      padding-right: 330px;
    }
  }

  @media (max-width: 930px) {
    .items-wrapper {
      display: none;
    }
    section {
      /* background-position-y: 400px;
      background-position-x: right; */
      background-position: top 400px right -50px;
      background-size: 600px;
    }
    .container {
      grid-template-columns: 1fr;
    }

    .detail {
      padding: 0 var(--padding);
    }
    .preview {
      padding: 48px 24px;
    }
    .preview img {
      position: unset;
      padding: 0;
      margin: 0;
      height: 400px;
    }

    .items-wrapper .products {
      padding: 0;
    }

    .scroll-navigations {
      bottom: 200px;
      padding: 0 24px;
      margin: 0;
      display: flex;
      justify-content: space-between;
    }

    .scroll-navigations > :first-child {
      display: block;
    }
  }
</style>
