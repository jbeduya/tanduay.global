<script>
  import LinkButton from "$lib/LinkButton.svelte";
  import { onMount } from "svelte";
  import Swiper, { Navigation } from "swiper";
  import PressRelease from "./PressRelease.svelte";

  const articles = [
    {
      id: 22,
      category: "lifestyle",
      title: "168 Years Of Tanduay Rum",
      date: "July 2022",
      author: "thetastingalliance.com",
      link: "https://thetastingalliance.com/168-years-of-tanduay-rum/",
      tags: ["USA"],
      photo: "/images/press/press-22.jpg",
      description:
        "Rum is a spirit with rich history, but only a handful of rum producers are over 150 years old.",
    },
    {
      id: 23,
      category: "lifestyle",
      title: "Tanduay Releases \"Cocktail Culture\" Book of Recipes",
      date: "July 2022",
      author: "finance.yahoo.com",
      link: "https://finance.yahoo.com/news/tanduay-releases-cocktail-culture-book-023200698.html",
      tags: ["USA"],
      photo: "/images/press/press-23.jpg",
      description:
        "Iconic Philippine rum brand Tanduay recently released a collection of cocktail recipes featuring its different rums.",
    },
    {
      id: 24,
      category: "lifestyle",
      title: "Tanduay Sells More Than 23.7M 9-Case Liters in 2021, Is Declared World\'s Number 1 Rum for 5th Consecutive Year",
      date: "July 2022",
      author: "markets.businessinsider.com",
      link: "https://markets.businessinsider.com/news/stocks/tanduay-sells-more-than-23-7m-9-case-liters-in-2021-is-declared-world-s-number-1-rum-for-5th-consecutive-year-1031602693",
      tags: ["USA"],
      photo: "/images/press/press-24.jpg",
      description:
        "Tanduay continued to outsell other global rum brands last year, according to Drinks International Magazine which collected annual data on 154 million-case brands from public company reports and directly requested results.",
    },
  ];

  const generateQuery = (queryString) => {
    return queryString.replaceAll(' ', '+');
  }

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
          <div class="article swiper-slide"><PressRelease {article} query={generateQuery(article.title)}/></div>
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

  .articles.swiper {
    overflow: hidden;
  }
  @media (max-width: 1200px) {
    /* .article {
      width: 400px;
    } */
  }
</style>
