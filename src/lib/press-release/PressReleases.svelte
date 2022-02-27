<script>
  import LinkButton from "$lib/LinkButton.svelte";
  import { onMount } from "svelte";
  import Swiper, { Navigation } from "swiper";
  import PressRelease from "./PressRelease.svelte";

  const articles = [
    {
      id: 1,
      photo: "/images/press/press.png",
      category: "Corporate Partnerships",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, minus!",
      date: "Sept 2021",
      author: "tastings.com",
      link: "/#press-release",
      description:
        "Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor,  adipisicing elit. Facere inventore fuga ut, distinctio officiis recusandae libero labore necessitatibus magnam quo?",
    },
    {
      id: 2,
      photo: "/images/press/press.png",
      category: "Corporate Partnerships",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, minus!",
      date: "Sept 2021",
      author: "tastings.com",
      link: "/#press-release",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere inventore fuga ut, distinctio officiis recusandae libero labore necessitatibus magnam quo?",
    },
    {
      id: 3,
      photo: "/images/press/press.png",
      category: "Corporate Partnerships",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, minus!",
      date: "Sept 2021",
      author: "tastings.com",
      link: "/#press-release",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere inventore fuga ut, distinctio officiis recusandae libero labore necessitatibus magnam quo?",
    },
  ];

  onMount(() => {
    let swiper = new Swiper(".articles", {
      slidesPerView: "auto",
      spaceBetween: 30,
      centeredSlides: false,
      freeMode: true,
      breakpoints: {
        1150: {
          slidesPerView: 3,
        },
        930: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 2.2,
        },
        570: {
          slidesPerView: 1.5,
        },
        300: {
          slidesPerView: 1,
        },
      },
    });
  });
</script>

<section id="press-release">
  <div class="content">
    <h1 class="h1">Press Release</h1>

    <div class="articles swiper">
      <div class="swiper-wrapper">
        {#each articles as article}
          <div class="article swiper-slide"><PressRelease {article} /></div>
        {/each}
      </div>
    </div>

    <div class="more">
      <LinkButton href="/press-release">View All</LinkButton>
    </div>
  </div>
</section>

<style>
  h1 {
    margin: 3rem 0;
    font-size: 3rem;
  }
  section {
    background-color: white;
    display: flex;
    padding: 2rem;
    justify-content: center;
    align-items: center;
  }
  .content {
    max-width: calc(var(--max-width) + 100px);
    width: 100%;
  }

  .article {
    width: 400px;
  }
  .more {
    margin-top: 50px;
    text-align: center;
  }

  @media (max-width: 1200px) {
    /* .article {
      width: 400px;
    } */
  }
</style>
