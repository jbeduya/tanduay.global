<script>
  import Accordion from "$lib/Accordion.svelte";
  import Button from "$lib/Button.svelte";
  import AgeingIcon from "./icons/AgeingIcon.svelte";
  import AlcoholVolumeIcon from "./icons/AlcoholVolumeIcon.svelte";
  import BodyIcon from "./icons/BodyIcon.svelte";
  import ColorIcon from "./icons/ColorIcon.svelte";
  import FinishIcon from "./icons/FinishIcon.svelte";
  import NoseIcon from "./icons/NoseIcon.svelte";
  import SkuIcon from "./icons/SkuIcon.svelte";
  import TasteIcon from "./icons/TasteIcon.svelte";

  export let product;
</script>

<section>
  <h1 class="garamond">{product.name}</h1>
  <p>{product.description}</p>
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
  <Button>Check Recipes</Button>
  <Button active>Buy Now</Button>
</div>

<style>
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
    color: var(--secondary-color);
    font-size: 35px;
    margin-bottom: 20px;
  }
  p,
  h1 {
    margin-bottom: 20px;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 5rem;
  }
</style>
