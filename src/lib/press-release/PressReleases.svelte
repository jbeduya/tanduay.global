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
        "Tanduay Seen to Drive Rum Growth in Arizona as it Partners with Hensley Beverage Company",
      date: "Mar 2021",
      author: "markets.businessinsider.com",
      link: "https://markets.businessinsider.com/news/stocks/tanduay-seen-to-drive-rum-growth-in-arizona-as-it-partners-with-hensley-beverage-company-1030242050",
      description:
        "Tanduay furthers its expansion in the U.S. by signing a partnership with Hensley Beverage Company, a top Arizona beverage wholesaler known for distributing a diverse range of alcoholic and non-alcoholic beverages.",
    },
    {
      id: 2,
      photo: "/images/press/press2.jpg",
      category: "Corporate Partnerships",
      title:
        "Tanduay inks deal with Phoenix Suns, first PH company to sponsor five NBA teams",
      date: "Apr 2021",
      author: "espn.com",
      link: "https://www.espn.com/basketball/story/_/id/31293568/tanduay-now-sponsor-five-nba-teams-deal-phoenix-suns",
      description:
        "Just weeks after it sealed agreements with two other teams from the National Basketball Association (NBA), Tanduay has entered into a partnership with the Phoenix Suns. This makes it the first Philippine company to simultaneously sponsor five NBA teams, making an even more aggressive international marketing push.",
    },
    {
      id: 3,
      photo: "/images/press/press3.jpg",
      category: "Awards from Spirits Competition",
      title:
        "The Top Rums According To New York International Spirits Competition",
      date: "May 2021",
      author: "forbes.com",
      link: "https://www.forbes.com/sites/joemicallef/2021/05/16/the-top-rums-according-to-new-york-international-spirits-competition/?sh=3e9446957f47",
      description:
        "The New York International Spirits Competition (NYISC) is an annual judging of spirits that takes place in New York City each spring. It’s unusual in that it is one of the few that rely entirely on judges drawn exclusively from the beverage trade.",
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

  .articles.swiper {
    overflow: hidden;
  }
  @media (max-width: 1200px) {
    /* .article {
      width: 400px;
    } */
  }
</style>
