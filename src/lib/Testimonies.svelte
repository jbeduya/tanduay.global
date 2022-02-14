<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Pagination, Navigation, Scrollbar } from "swiper";

  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import ArrowLeft from "./products/icons/ArrowLeft.svelte";
  import ArrowRight from "./products/icons/ArrowRight.svelte";
  import { onMount } from "svelte";
  let testimonies = [
    {
      photo: "/images/testimonies/1.png",
      testimony: `I like Tanduay Rum because it is easy to drink, and it has a smoky
              flavor profile. It can easily be paired with different food and
              fruits, making it a very good base in cocktails. Tanduay is
              different from other rums that I used because the taste is
              balanced and not too sweet. The best thing about it is that for
              its quality, it is still very affordable. Tanduay is best mixed
              with my specialty, the Manila Mule.`,
      name: "Juan Dela Cruz",
      designation: `(Top 10 Bartender in the Philippines, Barman in Chotto Matte,
                Coconut Club, Don’t Tell Poblacion, Versus Barcade, Tipple and
                Slaw and El Jardin de Manila)`,
    },
    {
      photo: "/images/testimonies/2.png",
      testimony: `I like Tanduay Rum because it is easy to drink, and it has a smoky
              flavor profile. It can easily be paired with different food and
              fruits, making it a very good base in cocktails. Tanduay is
              different from other rums that I used because the taste is
              balanced and not too sweet. The best thing about it is that for
              its quality, it is still very affordable. Tanduay is best mixed
              with my specialty, the Manila Mule.`,
      name: "Juan Dela Cruz",
      designation: `(Top 10 Bartender in the Philippines, Barman in Chotto Matte,
                Coconut Club, Don’t Tell Poblacion, Versus Barcade, Tipple and
                Slaw and El Jardin de Manila)`,
    },
    {
      photo: "/images/testimonies/1.png",
      testimony: `I like Tanduay Rum because it is easy to drink, and it has a smoky
              flavor profile. It can easily be paired with different food and
              fruits, making it a very good base in cocktails. Tanduay is
              different from other rums that I used because the taste is
              balanced and not too sweet. The best thing about it is that for
              its quality, it is still very affordable. Tanduay is best mixed
              with my specialty, the Manila Mule.`,
      name: "Juan Dela Cruz",
      designation: `(Top 10 Bartender in the Philippines, Barman in Chotto Matte,
                Coconut Club, Don’t Tell Poblacion, Versus Barcade, Tipple and
                Slaw and El Jardin de Manila)`,
    },
    {
      photo: "/images/testimonies/2.png",
      testimony: `I like Tanduay Rum because it is easy to drink, and it has a smoky
              flavor profile. It can easily be paired with different food and
              fruits, making it a very good base in cocktails. Tanduay is
              different from other rums that I used because the taste is
              balanced and not too sweet. The best thing about it is that for
              its quality, it is still very affordable. Tanduay is best mixed
              with my specialty, the Manila Mule.`,
      name: "Juan Dela Cruz",
      designation: `(Top 10 Bartender in the Philippines, Barman in Chotto Matte,
                Coconut Club, Don’t Tell Poblacion, Versus Barcade, Tipple and
                Slaw and El Jardin de Manila)`,
    },
  ];

  let innerWidth = 1100,
    numSlides = 2;

  $: numSlides = innerWidth < 930 ? 1 : 2;
</script>

<svelte:window bind:innerWidth />
<section>
  <div class="container">
    <div class="header">
      <h1 class="h1">What people say about us</h1>
      <div class="controls">
        <span id="swiper-button-prev"><ArrowLeft /></span>
        <span id="swiper-button-next"><ArrowRight /></span>
      </div>
    </div>
    {#if numSlides === 1}
      <div
        class="testimonials-slider"
        style="
        --swiper-pagination-color: #808D45;
        --swiper-pagination-bullet-width: 10px;
        --swiper-pagination-bullet-height: 10px;
      "
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
          }}
          pagination={{
            el: "#testimonials-swiper-pages",
            type: "bullets",
            clickable: true,
          }}
          spaceBetween={50}
          slidesPerView={numSlides}
          slidesPerGroup={numSlides}
          loop
        >
          {#each testimonies as testimonial}
            <SwiperSlide>
              <div class="bubble">
                <span class="quote garamond">’’</span>
                <img src={testimonial.photo} alt="Testimony" />
                <p class="garamond">{testimonial.testimony}</p>
                <div class="footnote">
                  <div class="name">{testimonial.name}</div>
                  <div class="acumin">{testimonial.designation}</div>
                </div>
              </div>
            </SwiperSlide>
          {/each}
        </Swiper>
        <div class="pages-wrapper">
          <div id="testimonials-swiper-pages" />
        </div>
      </div>
    {/if}
    {#if numSlides === 2}
      <div
        class="testimonials-slider"
        style="
        --swiper-pagination-color: #808D45;
        --swiper-pagination-bullet-width: 10px;
        --swiper-pagination-bullet-height: 10px;
      "
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
          }}
          pagination={{
            el: "#testimonials-swiper-pages",
            type: "bullets",
            clickable: true,
          }}
          spaceBetween={50}
          slidesPerView={2}
          slidesPerGroup={2}
          loop
        >
          {#each testimonies as testimonial}
            <SwiperSlide>
              <div class="bubble">
                <span class="quote garamond">’’</span>
                <img src={testimonial.photo} alt="Testimony" />
                <p class="garamond">{testimonial.testimony}</p>
                <div class="footnote">
                  <div class="name">{testimonial.name}</div>
                  <div class="acumin">{testimonial.designation}</div>
                </div>
              </div>
            </SwiperSlide>
          {/each}
        </Swiper>
        <div class="pages-wrapper">
          <div id="testimonials-swiper-pages" />
        </div>
      </div>
    {/if}
  </div>
</section>

<style>
  :global(.testimonials-slider .swiper-slide) {
    /* border: 10px solid red; */
    margin: 100px 0;
  }

  :global(.testimonials-slider .swiper-pagination-bullet-active) {
    position: relative;
  }
  :global(.testimonials-slider .swiper-pagination-bullet) {
    margin: 0 10px;
  }
  :global(.testimonials-slider .swiper-pagination-bullet-active:after) {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border: 1px solid var(--swiper-pagination-color);
    border-radius: 100%;
    top: -4px;
    left: -4px;
  }
  .testimonials-slider {
    padding: 0 48px;
  }

  .controls {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
  }

  .controls span {
    cursor: pointer;
  }

  .pages-wrapper {
    display: grid;
    place-items: center;
  }

  #testimonials-swiper-pages {
    width: auto;
  }

  section {
    --bubble-width: 600px;
    --bubble-height: 420px;
    --bubble-color: #d2c58a;
    --bubble-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(/images/testimonies/leaves.png) no-repeat top right;
    background-position-x: 120%;
    background-position-y: 10%;
    background-size: 30%;
    padding-top: 200px;
    padding-bottom: 80px;
  }

  .header {
    margin: 0 48px;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    align-items: top;
  }

  h1 {
    text-align: left;
    margin-bottom: 80px;
    font-size: 2.3rem;
  }
  p {
    letter-spacing: 0.5px;
    line-height: 150%;
  }

  .container {
    max-width: calc(var(--max-width) - 100px);
    width: 100vw;
    margin: 0 50px;
    /* border: 1px solid red; */
  }

  .bubble {
    position: relative;
    height: var(--bubble-height);
    padding: 60px;
    padding-top: 100px;
    background: var(--bubble-color);
    -webkit-border-radius: var(--bubble-radius);
    -moz-border-radius: var(--bubble-radius);
    border-radius: var(--bubble-radius);
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .bubble img {
    position: absolute;
    top: -60px;
    left: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
  .bubble .quote {
    position: absolute;
    font-size: 200px;
    color: var(--secondary-color);
    right: 10%;
    top: -60px;
  }
  .name {
    text-transform: uppercase;
    font-weight: bold;
    color: #c17c31;
    padding-bottom: 10px;
  }
  .acumin {
    font-size: 14px;
  }

  .bubble:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 60px 30px 0;
    border-color: var(--bubble-color) transparent;
    transform: rotate(150deg);
    display: block;
    width: 0;
    z-index: 1;
    bottom: -3%;
    right: 15%;
  }

  @media (max-width: 1180px) {
    section {
      --bubble-height: 450px;
    }
  }

  @media (max-width: 930px) {
    section {
      padding-bottom: 0;
      padding-top: 48px;
    }
    .header {
      grid-template-columns: 1fr;
    }
    .controls {
      padding-bottom: 30px;
    }
    h1 {
      margin-bottom: 40px;
      width: 70%;
    }
    .bubble {
      padding-left: 16px;
      padding-right: 16px;
      font-size: 0.8rem;
    }
  }
</style>
