<script>
  import { createEventDispatcher } from "svelte";
  import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte'
  const dispatch = createEventDispatcher();
  export let cocktail, suggestions;

  beforeUpdate(() => {
  });
</script>

<section>
  <div class="content">
    <div class="header">
      <span class="button close" on:click={() => dispatch("close")}>
        <i class="fas fa-times" />
      </span>

      {#if cocktail}
        <img class="default-glass" src="/images/cocktails/icons/{cocktail.glass_icon === "" ? "icon-happy-kid.png" : cocktail.glass_icon}" alt="" />
      {/if}
      <h2>{cocktail && cocktail.product}</h2>
      <h1 class="garamond">{cocktail && cocktail.name}</h1>
    </div>
    <div class="body">
      <div class="details">
        <div class="garnish">
          <div class="label">Garnish:</div>
          <div class="value">{cocktail && cocktail.garnish}</div>
        </div>
        <div class="glass">
          <div class="label">Glass:</div>
          <div class="value">{cocktail && cocktail.glass}</div>
        </div>
      </div>

      <div class="ingredients">
        <div class="label">Ingredients</div>
        <div class="value">
          {#if cocktail && cocktail.ingredients}
            {#each cocktail.ingredients as ingredient}
              <p>{ingredient}</p>
            {/each}
          {/if}
        </div>
      </div>

      <div class="description">
        {cocktail && cocktail.description}
      </div>
    </div>
  </div>
  <div class="suggestions">
    <p class="garamond">You might also like</p>
    <div class="suggested-items">
      {#if suggestions}
        {#each suggestions as cocktail}
          <div class="suggestion">
            <div
              class="garamond"
              on:click={() => dispatch("select", cocktail.id)}
            >
              {cocktail.name}
            </div>
            <div class="glass">
              <img src="/images/cocktails/icons/{cocktail.glass_icon === "" ? "icon-happy-kid.png" : cocktail.glass_icon}" alt="" />
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>

<style>
  section {
    --padding: 50px;
    --double-padding: 100px;
    --color: #818d45;
    --secondary-color: #50330d;
    --detail-color: #9a8d45;
    --border-color: #daa265;
    --suggestion-height: 190px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    height: 100vh;
    color: var(--color);
    position: relative;
  }

  .close {
    position: absolute;
    right: 60px;
    top: 10px;
    font-size: 2em;
    color: var(--secondary-color);
    cursor: pointer;
  }

  .default-glass {
    position: absolute;
    right: 6rem;
    height: 6rem;
    top: 50px;
  }

  .content {
    padding: var(--padding);
    padding-top: 0;
    padding-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    /* overflow-y: auto; */
  }
  .content .body {
    /* overflow-y: auto; */
    /* height: 100%;
    max-width: 100%; */
  }



  h1 {
    font-size: 2.5rem;
    font-weight: normal;
    color: var(--secondary-color);
    padding: 10px 0;
    margin-bottom: 2rem;
    margin-right: 4rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-top: 2rem;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    padding: 20px 10px;
    border-top: 1px dashed var(--border-color);
    border-bottom: 1px dashed var(--border-color);
  }

  .ingredients {
    border-bottom: 1px dashed var(--border-color);
    padding: 20px 10px;
  }

  p {
    line-height: 180%;
    color: var(--detail-color);
  }

  .label {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    padding-bottom: 15px;
  }

  .description {
    padding: 20px 10px;
    border-bottom: 1px dashed var(--border-color);
    color: var(--secondary-color);
    font-size: 0.9rem;
    line-height: 1.7rem;
  }

  .value {
    font-family: adobe-garamond-pro, sans-serif;
    color: var(--detail-color);
    font-size: 18px;
  }

  .suggestions {
    height: var(--suggestion-height);
  }

  .suggestions p {
    color: var(--secondary-color);
    padding: 0 var(--padding) var(--padding) var(--padding);
    font-size: 1.3rem;
  }

  .suggested-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
  }

  .suggested-items > div:first-child {
    background-color: #f1ece3;
    border-bottom-left-radius: 30px;
  }

  .suggested-items > div:last-child {
    background-color: #f9f7f4;
  }

  .suggested-items :is(div) {
    color: var(--secondary-color);
    text-decoration: underline;
    /* padding: var(--padding); */
    font-size: 1.3rem;
    cursor: pointer;
  }

  .suggestion {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    padding: calc(var(--padding) - 25px) calc(var(--padding) + 20px);
  }

  .suggestion > :last-child,
  .suggestion > :first-child {
    display: grid;
    place-items: center;
    justify-content: center;
    text-align: center;
  }
  .suggestion img {
    height: 60px;
  }

  @media (max-width: 930px) {
    section {
      --padding: 3rem;
      --double-padding: 6rem;
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.2rem;
      margin-top: 2rem;
    }
    .content .body {
      margin-top: 2rem;
    }
  }

  @media (max-width: 570px) {
    .suggested-items > div:first-child {
      border-bottom-left-radius: 0;
    }
    section {
      --padding: 2rem;
      --double-padding: 4rem;
      --suggestion-height: 145px;
    }
    .suggestion :is(div) {
      font-size: 1rem;
    }
    .suggestions p {
      padding-top: 0;
    }
    .default-glass {
      right: 2rem;
      height: 7rem;
      top: 4rem;
    }
    h1 {
      margin-right: 2rem;
    }
    h2 {
      font-size: 1rem;
    }
    .close {
      right: 30px;
    }
  }
</style>
