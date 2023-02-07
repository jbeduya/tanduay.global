<script>
  import LinkButton from "$lib/LinkButton.svelte";
  import { onMount } from "svelte";
  import Swiper, { Navigation } from "swiper";
  import PressRelease from "./PressRelease.svelte";

  const articles = [
    {
      id: 27,
      category: "Corporate Partnerships",
      title: "World’s Number 1 Rum Enters Australian Market",
      date: "Nov 2022",
      author: "theshout.com.au",
      link: "https://theshout.com.au/worlds-number-1-rum-enters-australian-market",
      tags: ["Australia"],
      photo: "/images/press/press-27.webp",
      description:
        "Award-winning Philippine rum brand, Tanduay, will soon be available in Australia as it recently signed a partnership with leading spirits distributor Jonathan Paige International Group (JPI).",
    },
    {
      id: 28,
      category: "Corporate Partnerships",
      title: "Tanduay's Award-Winning Rum Impressing Connoisseurs in Austria",
      date: "Jan 2023",
      author: "eprfoodbeveragenews.com",
      link: "https://eprfoodbeveragenews.com/2023/01/10/tanduays-award-winning-rum-impressing-connoisseurs-in-austria",
      tags: ["Austria"],
      photo: "/images/press/press-28.jpg",
      description:
        "Philippine brand Tanduay has partnered with Weisshaus, a leading distributor of international spirits, to bring the brand to Austria, making it the first Asian rum brand to enter the country.",
    },
    {
      id: 29,
      category: "lifestyle",
      title: "Forget Cuba, Filipino rum is set to explode in 2023",
      date: "Jan 2023",
      author: "amp-scmp-com",
      link: "https://amp-scmp-com.cdn.ampproject.org/c/s/amp.scmp.com/magazines/style/news-trends/article/3207556/forget-cuba-filipino-rum-set-explode-2023-don-papa-and-tanduay-craft-brands-palawan-blanco-and-kasam",
      tags: ["Hong Kong"],
      photo: "/images/press/press-default.png",
      description:
        "Forget Cuba, Filipino rum is set to explode in 2023, from Don Papa and Tanduay, to craft brands Palawan Blanco and Kasama, the Southeast Asian country is fermenting a spirit-ual revolution",
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
