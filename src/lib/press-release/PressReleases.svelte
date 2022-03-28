<script>
  import LinkButton from "$lib/LinkButton.svelte";
  import { onMount } from "svelte";
  import Swiper, { Navigation } from "swiper";
  import PressRelease from "./PressRelease.svelte";

  const articles = [
    {
      id: 13,
      photo: "/images/press/press-13.jpg",
      category: "Corporate Partnerships",
      title: "Tanduay City View Lounge Opens at the Timberwolves' Target Center",
      date: "Feb 2022",
      author: "finance.yahoo.com",
      link: "https://finance.yahoo.com/news/tanduay-city-view-lounge-opens-022200845.html",
      description:
        "Leading Philippine rum maker Tanduay recently opened a bar at the Minnesota Timberwolves' Target Center. Called the Tanduay City View Lounge, the bar is a result of the partnership that the World's Number 1 Rum brand inked with the team in 2021.",
    },
    {
      id: 14,
      photo: "/images/press/press-14.jpg",
      category: "Corporate Partnerships",
      title: "Tanduay Reveals Global Expansion Plans",
      date: "Mar 2022",
      author: "thespiritsbusiness.com",
      link: "https://www.thespiritsbusiness.com/2022/03/tanduay-reveals-global-expansion-plans/",
      description:
        "Philippine rum brand Tanduay doubled its export business last year and has revealed plans for further international expansion.",
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
