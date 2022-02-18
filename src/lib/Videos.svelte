<script>
  import ArrowRight from "./products/icons/ArrowRight.svelte";
  import ArrowLeft from "./products/icons/ArrowLeft.svelte";

  import { Swiper, Navigation } from "swiper";

  import "swiper/css";
  import "swiper/css/navigation";
  import { onMount } from "svelte";

  let videos = [
    "https://www.youtube.com/embed/tBCTG2LTIo4?controls=0",
    "https://www.youtube.com/embed/XbPPCC9RswE?controls=0",
    "https://www.youtube.com/embed/tBCTG2LTIo4?controls=0",
    "https://www.youtube.com/embed/XbPPCC9RswE?controls=0",
    "https://www.youtube.com/embed/tBCTG2LTIo4?controls=0",
    "https://www.youtube.com/embed/XbPPCC9RswE?controls=0",
  ];

  onMount(() => {
    let swiper = new Swiper(".video-scroller", {
      slidesPerView: "auto",
      modules: [Navigation],
      spaceBetween: 30,
      centeredSlides: true,
      freeMode: true,
      navigation: {
        nextEl: "#videos-swiper-button-next",
        prevEl: "#videos-swiper-button-prev",
      },
    });
    swiper.slideNext();
  });
</script>

<section>
  <div class="container">
    <div class="header">
      <div class="left">
        <h1 class="h1">Videos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          maiores quasi quas necessitatibus natus eligendi reiciendis enim rem,
          libero fugiat.
        </p>
      </div>
      <div class="right">
        <span class="arrow" id="videos-swiper-button-prev">
          <ArrowLeft />
        </span>
        <span class="arrow" id="videos-swiper-button-next">
          <ArrowRight />
        </span>
      </div>
    </div>
  </div>
  <div class="video-scroller swiper">
    <div class="swiper-wrapper">
      {#each videos as video}
        <div class="video swiper-slide">
          <iframe
            height="100%"
            width="100%"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    --border-radius: 10px;
    --default-padding: 16px;
    margin-top: 100px;
    background: url(/images/videos-bg.png) no-repeat;
    background-position-x: -10%;
    background-position-y: 20%;
    background-size: 18%;
  }

  h1 {
    text-align: left;
  }
  p {
    margin: 2rem 0 3rem 0;
  }
  .arrow {
    cursor: pointer;
  }
  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    background-size: contain;
    background-position-x: center;
    background-position-y: bottom;
    padding-bottom: 50px;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 0 3rem;
  }

  .right {
    display: flex;
    justify-content: end;
    align-items: flex-start;
    gap: 1rem;
    /* width: 233px; */
    /* border: 10px solid red; */
  }

  .video {
    margin: 0;
    padding: 10px;
    border: 2px solid var(--secondary-color);
    border-radius: var(--border-radius);
    height: 400px;
    width: 600px;
  }

  .video-scroller {
    background: url(/images/videos-background.png) no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    padding-bottom: 50px;
    background-size: contain;
  }

  .video:first-child {
    margin-left: 48px;
  }

  .video iframe {
    border-radius: var(--border-radius);
    aspect-ratio: 16/9;
  }

  @media (max-width: 930px) {
    section {
      margin-top: 0;
      padding-top: 200px;
      background-size: 25%;
      background-position-y: 0%;
      background-position-x: -22%;
      background-size: 40%;
    }
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 0.9rem;
      margin: 1rem 0 1rem 0;
    }

    .video {
      height: 250px;
      width: 300px;
    }
    .header {
      grid-template-columns: 1fr;
    }

    .right {
      justify-content: flex-start;
    }
  }
</style>
