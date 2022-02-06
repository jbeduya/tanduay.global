<script>
  import Button from "./Button.svelte";
</script>

<section>
  <div class="container">
    <h1 class="h1">About Us</h1>

    <div class="content content1">
      <div class="picture">
        <img class="img" src="/images/about-us-1.png" alt="About Us" />
        <img class="sugar-big" src="/images/sugar-big.png" alt="Sugar" />
        <img class="sugar-small" src="/images/sugar-small.png" alt="Sugar" />
      </div>
      <div class="text">
        <h2 class="garamond">Our Story</h2>
        <h3 class="garamond">
          Only a handful of rum makers in the world are over 150 years old.
        </h3>
        <p>
          Since 1854, Tanduay Asian Rum has been creating a spirit as intriguing
          in its silky smoothness and elegant flavor as the essence of the
          mysterious East. It remains one of Asia’s best-kept secrets and among
          the world’s most decorated spirits for generations to come.
        </p>
        <Button>Play Video</Button>
      </div>
    </div>

    <div class="content content2">
      <div class="picture">
        <img class="img" src="/images/about-us-2.png" alt="About Us" />
        <img class="sugarcane" src="/images/sugarcane.png" alt="Sugarcane" />
      </div>
      <div class="text">
        <h2 class="garamond">Our Craft</h2>
        <h3 class="garamond">
          The distinct character of our rum is born from a five-year aging
          process in charred oak barrels.
        </h3>
        <p>
          Bearing the wisdom of our forefathers, Tanduay has thrived on quality,
          reliability, and consistency, making I the 7th largest international
          Spirit Brand in the World in 2011.
        </p>
        <Button>Play Video</Button>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    --surface-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    background-color: var(--surface-color);
  }

  .container {
    max-width: var(--max-width);
    width: 100vw;
  }

  .picture {
    grid-area: picture;
  }

  .text {
    grid-area: text;
  }

  .content {
    display: grid;
    grid-template-areas: "picture text";
    grid-template-columns: 1fr 1fr;
  }

  .content1 .picture {
    background: url(/images/sugarcane-illustration.png) no-repeat bottom right;
    background-position-x: 400px;
  }

  .content2 {
    grid-template-areas: "text picture";
  }
  .content {
    padding: 0 32px;
  }
  h1 {
    margin-bottom: 100px;
  }

  h2 {
    font-size: 35px;
    font-weight: 300;
    color: var(--text-color);
  }
  h3 {
    font-size: 45px;
    font-weight: 300;
    font-style: italic;
    color: var(--secondary-color);
    margin: 30px 0;
  }

  p {
    color: var(--text-color);
    margin-bottom: 30px;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .picture {
    position: relative;
    height: 622px;
    width: 668px;
  }
  .picture .img {
    width: 80%;
    min-height: 500px;
    min-width: 433px;
    position: relative;
  }

  .sugar-big,
  .sugar-small {
    position: absolute;
    left: -60px;
    height: 15%;
  }

  .sugar-big {
    top: 100px;
  }

  .sugar-small {
    top: 240px;
    left: -40px;
  }

  .content2 .picture {
    background: url(/images/barrel.png) no-repeat top right;
    background-size: 250px;
    display: flex;
    align-items: flex-end;
    position: relative;
  }

  .content2 .text {
    padding-top: 100px;
  }

  .content2 .sugarcane {
    position: absolute;
    bottom: -50px;
    left: -100px;
    width: 300px;
  }

  .content2 .img {
    height: 400px;
  }

  @media (max-width: 930px) {
    .content {
      grid-template-columns: 1fr;
      grid-template-areas: "picture" "text";
    }
    .picture {
      width: calc(100vw - 64px);
    }
    .content .img {
      width: 80% !important;
    }
  }
</style>
