<script>
  import LinkButton from "$lib/LinkButton.svelte";
  import { onMount } from "svelte";
  import Swiper, { Navigation } from "swiper";
  import PressRelease from "./PressRelease.svelte";

  const articles = [
    // {
    //   id: 18,
    //   category: "Corporate Partnerships",
    //   title: "Tanduay's Specialty Cocktails at the Milwaukee Bucks' Fiserv Forum",
    //   date: "May 2022",
    //   author: "finance.yahoo.com",
    //   link: "https://finance.yahoo.com/news/tanduays-specialty-cocktails-fans-milwaukee-023600256.html",
    //   tags: ["USA"],
    //   photo: "/images/press/press-15.jpg",
    //   description:
    //     "Tanduay, the World’s Number 1 Rum, recently opened a bar in the home arena of the National Basketball Association (NBA) champions, Milwaukee Bucks. The Tanduay bar at the Fiserv Forum provides an exciting, refreshing cocktail experience with a tropical twist.",
    // },
    // {
    //   id: 19,
    //   category: "Corporate Partnerships",
    //   title: "The Beer Garden in Deer District",
    //   date: "May 2022",
    //   author: "jsonline.com",
    //   link: "https://www.jsonline.com/story/sports/nba/bucks/2022/05/02/milwaukee-bucks-deer-district-tap-room-changes-into-tanduay-tiki-hut/9569673002/",
    //   tags: ["USA"],
    //   photo: "/images/press/press-17.jpg",
    //   description:
    //     "The Tap Room has been transformed into The Tanduay Tiki Hut, according to a news release from the Bucks.",
    // },
    // {
    //   id: 20,
    //   category: "awards",
    //   title: "Tanduay Wins Platinum, Innovation Honors in Consumer-Judged SIP Awards",
    //   date: "May 2022",
    //   author: "finance.yahoo.com",
    //   link: "https://finance.yahoo.com/news/tanduay-wins-platinum-innovation-honors-054300585.html",
    //   tags: ["USA"],
    //   photo: "/images/press/press-20.jpg",
    //   description:
    //     "Four Tanduay Rum products received top honors at the 2022 SIP Awards, the only wines and spirits competition where the judging panel is comprised of consumers.",
    // },
    {
      id: 20,
      category: "awards",
      title: "Tanduay Wins Platinum, Innovation Honors in Consumer-Judged SIP Awards",
      date: "May 2022",
      author: "finance.yahoo.com",
      link: "https://finance.yahoo.com/news/tanduay-wins-platinum-innovation-honors-054300585.html",
      tags: ["USA"],
      photo: "/images/press/press-20.jpg",
      description:
        "Four Tanduay Rum products received top honors at the 2022 SIP Awards, the only wines and spirits competition where the judging panel is comprised of consumers.",
    },
    {
      id: 21,
      category: "lifestyle",
      title: "The 25 Best Rum Brands You Need on Your Bar Cart Like, Yesterday",
      date: "May 2022",
      author: "cosmopolitan.com",
      link: "https://www.cosmopolitan.com/food-cocktails/g28509902/rum-brands/",
      tags: ["USA"],
      photo: "/images/press/press-default.png",
      description:
        "Mixing piña coladas, don't text.",
    },
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
