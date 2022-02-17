<script>
  import { onMount } from "svelte";

  import { Swiper } from "swiper";
  import "swiper/css";

  onMount(() => {
    let swiper = new Swiper(".my-swiper", {
      speed: 400,
      slidesPerView: 4,
      slidesPerGroup: 1,
      direction: "horizontal",
      spaceBetween: 40,
    });
  });
</script>

<div class="my-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <h1>1Hello World</h1>
    </div>

    <div class="swiper-slide">
      <h1>2Hello World</h1>
    </div>

    <div class="swiper-slide">
      <h1>3Hello World</h1>
    </div>

    <div class="swiper-slide">
      <h1>4Hello World</h1>
    </div>
    <div class="swiper-slide">
      <h1>1Hello World</h1>
    </div>

    <div class="swiper-slide">
      <h1>2Hello World</h1>
    </div>

    <div class="swiper-slide">
      <h1>3Hello World</h1>
    </div>

    <div class="swiper-slide">
      <h1>4Hello World</h1>
    </div>
  </div>
</div>

<style>
  .my-swiper {
    border: 1px solid red;
    height: 400px;
    width: 100%;
  }

  .swiper-slide {
    background-color: green;
  }
</style>
