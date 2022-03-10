<script>
  import { onMount } from "svelte";

  import { Autoplay, Swiper } from "swiper";
  import "swiper/css";

  export let articles = [];
  $: featuredArticle = articles[3];
  $: additionalFeatured = articles;

  onMount(() => {
    let swiper = new Swiper(".other-featured", {
      slidesPerView: "auto",
      modules: [Autoplay],
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      // loop: true,
      // freeMode: true,
      breakpoints: {
        320: {
          spaceBetween: 10,
        },
        768: {
          spaceBetween: 30,
        },
      },
    });
  });
</script>

<section>
  <div class="container" style="--image: url({featuredArticle.image});">
    <div class="content-wrapper">
      <div class="content">
        <div class="featured">
          <div class="category">{featuredArticle.category}</div>
          <h2>{featuredArticle.title}</h2>
          <div class="credit">
            <div class="date">{featuredArticle.date}</div>
            <div class="divider" />
            <div class="author">
              by <span class="name">{featuredArticle.author}</span>
            </div>
          </div>
          <p class="excerpt">{featuredArticle.excerpt}</p>
          <div class="more">
            <a href={featuredArticle.url}>Read More</a>
          </div>
        </div>
        <div class="other-featured swiper">
          <div class="swiper-wrapper">
            {#each additionalFeatured as article}
              <div
                class="article swiper-slide"
                style="--image: url({article.image});"
              >
                <div class="image" />
                <div class="details">
                  <div class="category">{article.category}</div>
                  <h4>
                    <a href={article.url}>{article.title}</a>
                  </h4>
                  <div class="credit">
                    <div class="date">{article.date}</div>
                    <div class="divider" />
                    <div class="author">
                      by <span class="name">{article.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    --category-color: #e9dfa8;
    --credit-color: #fff;
    --divider-color: #fff;
    --default-color: #fff;
    --accent-color: #d18b3f;
  }

  .container {
    max-width: var(--max-width);
    width: 100%;
    padding: 2rem 1rem;
    margin: 0 auto;
  }

  .content-wrapper {
    background-image: var(--image);
    background-size: cover;
    border-radius: 1rem;
    height: 35rem;
    width: 100%;
  }

  h2 {
    color: #fff;
  }

  h4 {
    color: #fff;
    padding: 0.5rem 0;
  }

  h4 a {
    text-decoration: none;
    color: #fff;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(8, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(8, 0, 0, 0.5032606792717087) 0%,
      rgba(171, 171, 171, 0.309983368347339) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 1rem;
  }

  .featured {
    width: 35ch;
    margin: 4rem 0 0 4rem;
  }

  .featured .category {
    margin-bottom: 1rem;
  }

  .featured p {
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 2rem;
  }

  .featured .credit {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  .credit .author span {
    color: #d18b3f;
  }

  .other-featured {
    width: 100%;
    margin-bottom: 2rem;
    height: 9rem;
  }

  .other-featured .article {
    width: 25rem;
    margin-bottom: 2rem;
    display: grid;
    padding: 0.8rem;
    border-radius: 0.5rem;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
    background-color: rgba(0 0 0 / 0.7);
  }
  .other-featured .article .image {
    background-color: gray;
    background-image: var(--image);
    background-size: cover;
    border-radius: 0.5rem;
  }
  .other-featured .article .credit,
  .other-featured .article .category {
    font-size: 0.7rem;
  }

  .more a,
  .more a:visited {
    text-transform: uppercase;
    border-bottom: 2px solid var(--accent-color);
    text-decoration: none;
    padding: 0.5rem;
    font-weight: bold;
    font-size: 0.8rem;
    letter-spacing: 1.2px;
    color: #fff;
  }

  @media (max-width: 768px) {
    .featured {
      width: 100%;
      margin: 0;
      padding: 2rem;
    }

    .other-featured .article {
      width: 20rem;
    }
  }
</style>
