<script>
  import Button from "./Button.svelte";

  let stores = [
    {
      url: "https://drizly.com/liquor-brands/tanduay/b11956",
      description: "On-demand delivery",
      logo: "/images/stores/drizly.png",
    },
    {
      url: "https://www.instacart.com/store",
      description: "On-demand delivery",
      logo: "/images/stores/instacart.png",
    },
    // {
    //   url: "https://app.libdib.com/brand/tanduay",
    //   description: "On-demand delivery",
    //   logo: "/images/stores/libdib.png",
    // },
    {
      url: "https://www.reservebar.com/collections/tanduay",
      description: "On-demand delivery",
      logo: "/images/stores/reservebar.png",
    },
  ];

  const visitShop = (store) => {
    window.open(store.url, "_blank");
  };
</script>

<section id="stores">
  <div class="content">
    <h2>Select Stores to Shop</h2>
    <div class="stores">
      {#each stores as store}
        <div class="store">
          <div class="image">
            <img src={store.logo} alt="Store" />
          </div>
          <div>
            <!-- <p>{store.description}</p> -->
            <Button on:click={() => visitShop(store)}>Visit Shop</Button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    background: url(/images/our-land-bg.png) no-repeat;
    background-size: cover;
    min-height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #ddd; */
    --border-color: #fffffa;
  }

  p {
    font-family: acumin-pro, sans-serif;
  }

  .content {
    max-width: var(--max-width);
    width: 100%;
  }
  h2 {
    text-align: center;
    font-family: adobe-garamond-pro, sans-serif;
    font-style: italic;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 200;
    margin-bottom: 80px;
  }
  .stores {
    display: flex;
    justify-content: space-around;
    column-gap: 20px;
  }

  .store {
    background-color: white;
    min-width: 300px;
    /* height: 400px; */
    width: 400px;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 230px;
    max-width: 90%;
    max-height: 90%;
    /* border: 1px solid red; */
  }
  .image img {
    max-width: 90%;
  }
  .store div p {
    padding-bottom: 20px;
  }
  .store div {
    margin-bottom: 40px;
  }

  @media (max-width: 930px) {
    h2 {
      margin-top: 80px;
      margin-bottom: 40px;
      font-size: 2rem;
    }
    .stores {
      /* border: 1px solid red; */
      margin-left: 16px;
      margin-right: 16px;
      justify-content: center;
      align-items: center;
      row-gap: 20px;
      flex-direction: column;
      margin-bottom: 100px;
    }

    .store {
      max-width: 400px;
      min-width: 200px;
      width: calc(100vw - 64px);
    }

    .store:nth-child(2) img {
      height: 60px;
    }
  }
</style>
