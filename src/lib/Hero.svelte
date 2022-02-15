<script>
  import Button from "./Button.svelte";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Navigation } from "swiper";

  import "swiper/css";
  import "swiper/css/navigation";
  import LinkButton from "./LinkButton.svelte";
</script>

<section>
  <div class="scroller">
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: "#hero-swiper-button-next",
        prevEl: "#hero-swiper-button-prev",
      }}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div class="slide">
          <div class="text">
            <h1 class="garamond">Distinctly Filipino</h1>
            <h2 class="acumin">Undeniably world-class!</h2>
            <LinkButton href="/#products">View Products</LinkButton>
          </div>
          <div class="picture">
            <img src="/images/hero/rum.png" alt="Rum" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide">
          <div class="text">
            <h1 class="garamond">Distinctly Filipino</h1>
            <h2 class="acumin">Undeniably world-class!</h2>
            <LinkButton href="/#products">View Products</LinkButton>
          </div>
          <div class="picture">
            <img src="/images/hero/rum.png" alt="Rum" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide">
          <div class="text">
            <h1 class="garamond">Distinctly Filipino</h1>
            <h2 class="acumin">Undeniably world-class!</h2>
            <LinkButton href="/#products">View Products</LinkButton>
          </div>
          <div class="picture">
            <img src="/images/hero/rum.png" alt="Rum" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="navigation">
      <i id="hero-swiper-button-prev" class="fa-solid fa-arrow-left-long" />
      <i id="hero-swiper-button-next" class="fa-solid fa-arrow-right-long" />
    </div>
  </div>
</section>

<style>
  section {
    --arrow-color: #887968;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0 50px 0;
  }
  .scroller {
    max-width: calc(var(--max-width) - 260px);
    width: 100vw;
    margin: 0 32px;
    position: relative;
  }
  .navigation {
    position: absolute;
    bottom: 50px;
    left: 64px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 300px;
    font-size: 4rem;
    color: var(--arrow-color);
    z-index: 99;
  }

  .navigation i {
    cursor: pointer;
  }

  .slide {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .text {
    padding-left: 48px;
  }

  h1 {
    font-style: italic;
    font-size: 5rem;
    font-weight: 200;
  }
  h2 {
    color: var(--secondary-color);
    font-size: 1.5rem;
    font-weight: normal;
    margin: 20px 0 40px 0;
  }

  .picture {
    position: relative;
    display: grid;
    padding-left: 200px;
    background: url(/images/hero/powdered-sugar.png) no-repeat bottom left,
      url(/images/hero/cane.png) no-repeat bottom left;
    background-size: 300px;
    background-position-x: 50%;
    min-height: 600px;
  }

  .picture img {
    height: 600px;
    position: absolute;
    right: 10%;
  }

  .text {
    padding-top: 50px;
  }

  @media (max-width: 930px) {
    section {
      margin: 0;
    }
    h1 {
      font-size: 3rem;
      text-align: center;
    }
    h2 {
      font-size: 1.5rem;
      margin: 0;
      margin-bottom: 2rem;
      text-align: center;
    }

    .slide {
      grid-template-columns: 1fr;
    }

    .text {
      place-items: center;
      margin: 0;
      padding: 48px;
      display: grid;
      place-items: center;
    }

    .picture {
      min-height: 400px;
      background-size: 200px;
      padding: 0;
      display: grid;
      place-items: center;
      background-position-x: 25%;
    }

    .picture img {
      height: 400px;
      position: unset;
    }

    .navigation {
      left: 0;
      bottom: 45%;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 16px;
      font-size: 3rem;
    }
  }
</style>
