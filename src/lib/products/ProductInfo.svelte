<script>
  import Accordion from "$lib/Accordion.svelte";
  import Button from "$lib/Button.svelte";
  import LinkButton from "$lib/LinkButton.svelte";
  import AgeingIcon from "./icons/AgeingIcon.svelte";
  import AlcoholVolumeIcon from "./icons/AlcoholVolumeIcon.svelte";
  import BodyIcon from "./icons/BodyIcon.svelte";
  import ColorIcon from "./icons/ColorIcon.svelte";
  import FinishIcon from "./icons/FinishIcon.svelte";
  import NoseIcon from "./icons/NoseIcon.svelte";
  import SkuIcon from "./icons/SkuIcon.svelte";
  import TasteIcon from "./icons/TasteIcon.svelte";

  export let product;

  let open = false;

  const toggleDetail = (isOpen) => {
    open = isOpen;
    document.body.classList.toggle("no-scroll", open);
  };
</script>

<section class="main">
  <h1 class="garamond">Our Products</h1>
  <h2 class="garamond">{product.name}</h2>
  <p>{product.description}</p>

  <div class="product-details-link" on:click={() => toggleDetail(true)}>
    <a class="acumin" href="/"> Product Details</a>
    <i class="fa-solid fa-angle-right" />
  </div>
  <div class="details">
    <div>
      <Accordion>
        <span slot="label">
          <div class="label">
            <span>
              <AlcoholVolumeIcon />
            </span> <span>Alcohol Volume</span>
          </div>
        </span>
        {product.details.alcohol}
      </Accordion>
      <Accordion>
        <span slot="label">
          <div class="label">
            <span>
              <ColorIcon />
            </span> <span>Color</span>
          </div>
        </span>
        {product.details.color}
      </Accordion>

      <Accordion>
        <span slot="label">
          <div class="label">
            <span>
              <NoseIcon />
            </span> <span>Nose</span>
          </div>
        </span>
        {product.details.nose}
      </Accordion>

      <Accordion>
        <span slot="label">
          <div class="label">
            <span>
              <BodyIcon />
            </span> <span>Body</span>
          </div>
        </span>
        {product.details.body}
      </Accordion>
    </div>
    <div>
      <Accordion>
        <span slot="label">
          <div class="label">
            <span>
              <TasteIcon />
            </span> <span>Taste</span>
          </div>
        </span>
        {product.details.taste}
      </Accordion>
      <Accordion>
        <span slot="label">
          <div class="label">
            <span>
              <FinishIcon />
            </span> <span>Finish</span>
          </div>
        </span>
        {product.details.finish}
      </Accordion>
      <Accordion>
        <span slot="label">
          <div class="label">
            <span>
              <AgeingIcon />
            </span> <span>Ageing</span>
          </div>
        </span>
        {product.details.ageing}
      </Accordion>
      <Accordion>
        <span slot="label">
          <div class="label">
            <span><SkuIcon /></span> <span>SKUs</span>
          </div>
        </span>
        {product.details.sku}
      </Accordion>
    </div>
  </div>
</section>

<div class="buttons">
  <LinkButton href="/#cocktails">Check Recipes</LinkButton>
  <LinkButton href="/#stores">Buy Now</LinkButton>
</div>

<section class="detail" class:open>
  <div class="cancel" on:click={() => toggleDetail(false)}>
    <div class="inside">&nbsp;</div>
  </div>
  <div class="info">
    <div>
      <i
        class="fas fa-times close"
        role="button"
        on:click={() => toggleDetail(false)}
      />
      <h4>Product Details</h4>
    </div>
    <div class="details">
      <div>
        <Accordion>
          <span slot="label">
            <div class="label">
              <span>
                <AlcoholVolumeIcon />
              </span> <span>Alcohol Volume</span>
            </div>
          </span>
          {product.details.alcohol}
        </Accordion>
        <Accordion>
          <span slot="label">
            <div class="label">
              <span>
                <ColorIcon />
              </span> <span>Color</span>
            </div>
          </span>
          {product.details.color}
        </Accordion>

        <Accordion>
          <span slot="label">
            <div class="label">
              <span>
                <NoseIcon />
              </span> <span>Nose</span>
            </div>
          </span>
          {product.details.nose}
        </Accordion>

        <Accordion>
          <span slot="label">
            <div class="label">
              <span>
                <BodyIcon />
              </span> <span>Body</span>
            </div>
          </span>
          {product.details.body}
        </Accordion>
      </div>
      <div>
        <Accordion>
          <span slot="label">
            <div class="label">
              <span>
                <TasteIcon />
              </span> <span>Taste</span>
            </div>
          </span>
          {product.details.taste}
        </Accordion>
        <Accordion>
          <span slot="label">
            <div class="label">
              <span>
                <FinishIcon />
              </span> <span>Finish</span>
            </div>
          </span>
          {product.details.finish}
        </Accordion>
        <Accordion>
          <span slot="label">
            <div class="label">
              <span>
                <AgeingIcon />
              </span> <span>Ageing</span>
            </div>
          </span>
          {product.details.ageing}
        </Accordion>
        <Accordion>
          <span slot="label">
            <div class="label">
              <span><SkuIcon /></span> <span>SKUs</span>
            </div>
          </span>
          {product.details.sku}
        </Accordion>
      </div>
    </div>
  </div>
</section>

<style>
  section.detail {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    left: calc(100vw - 10px);
    visibility: hidden;
    z-index: 1;

    background-color: transparent;
    backdrop-filter: blur(4px);

    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: start;
    align-items: flex-start;
    transition: all 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 9999999;
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

  section.detail .info .details {
    overflow: auto;
    display: flex;
    flex-direction: column;
  }

  section.detail .info {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  .info i {
    font-size: 2rem;
    text-align: right;
    display: block;
  }

  h4 {
    font-size: 1.5rem;
    color: var(--secondary-color);
    margin: 24px 0;
  }

  .product-details-link {
    display: none;
  }
  .product-details-link i {
    padding-top: 3px;
  }

  a,
  a:visited {
    color: var(--text-color);
    font-weight: bold;
    text-decoration: underline;
  }
  a:hover {
    text-decoration: none;
  }
  .label {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .label > :first-child {
    display: grid;
    width: 40px;
  }

  .buttons {
    display: flex;
    margin-top: 3rem;
    column-gap: 1rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: normal;
    text-transform: uppercase;
    font-style: italic;
    margin: 2rem auto;
  }
  h2 {
    color: var(--secondary-color);

    margin-bottom: 20px;
    font-size: 2rem;
  }

  p {
    margin-bottom: 20px;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 5rem;
  }

  @media (max-width: 1200px) {
    .details {
      column-gap: 2rem;
    }
  }

  @media (min-width: 930px) {
    section.detail {
      visibility: hidden !important;
    }
  }

  @media (max-width: 930px) {
    h1 {
      font-size: 2rem !important;
    }
    h2 {
      font-size: 1.5rem;
    }
    .main .details {
      display: none;
    }

    .product-details-link {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }

    section.detail {
      visibility: hidden;
    }
    section.detail .info {
      width: 400px;
      padding: 48px;
    }

    section.detail .details {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    section.detail .info {
      width: 350px;
    }
  }
</style>
