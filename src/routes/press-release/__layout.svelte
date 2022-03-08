<svelte:head>
  <title>Tanduay Global - Press Release</title>
</svelte:head>
<div class="section-press-release">
  <header>
    <h1>Press Release</h1>
  </header>

  <slot />
</div>

<style>
  :root {
    --h1-font-size: 2.5rem;
    --h2-font-size: 2rem;
    --h3-font-size: 1.5rem;
    --h4-font-size: 1.5rem;
    --header-color: #50330d;
    --default-color: #393322;
    --category-color: #d18b3f;
    --accent-color: #d18b3f;
    --line-height: 1.6rem;
    --credit-color: #50330d;
    --divider-color: #50330d;
    --garamond: adobe-garamond-pro, sans-serif;
    --acumin: acumin-pro, sans-serif;
  }

  header {
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
  }
  h1 {
    margin-top: 2rem;
    padding-left: 2rem;
  }

  :global(body) {
    background-image: none;
  }

  .section-press-release {
    background: url(/images/press/bg.png) no-repeat bottom right;
  }

  :global(.section-press-release h1) {
    font-size: var(--h1-font-size);
    font-family: var(--garamond);
    font-weight: 200;
    font-style: italic;
    text-transform: uppercase;
  }

  :global(.section-press-release h2) {
    font-size: var(--h2-font-size);
    font-family: var(--garamond);
    font-weight: bold;
  }

  :global(.section-press-release h3) {
    font-size: var(--h3-font-size);
    font-family: var(--garamond);
    font-weight: normal;
    text-transform: uppercase;
  }
  :global(.section-press-release h4) {
    font-size: var(--h4-font-size);
    font-family: var(--garamond);
    font-weight: normal;
  }
  :global(.section-press-release h1, .section-press-release
      h2, .section-press-release h3, .section-press-release h4) {
    color: var(--header-color);
  }

  :global(.section-press-release p) {
    line-height: var(--line-height);
    font-family: var(--acumin);
    font-weight: normal;
    font-size: 0.9rem;
    color: var(--default-color);
    margin: 1rem 0;
  }

  :global(.section-press-release .category) {
    text-transform: uppercase;
    color: var(--category-color);
    font-weight: bold;
    font-size: 0.8rem;
    letter-spacing: 1.2px;
  }

  @media (max-width: 730px) {
    h1 {
      font-size: 2rem;
    }
  }
</style>
