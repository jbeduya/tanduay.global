<script>
  import Button from "$lib/Button.svelte";
  import SubscribeToNewsletter from "./SubscribeToNewsletter.svelte";
  import { fade } from "svelte/transition";

  export let articles = [];

  const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const loadMore = () => {
    const len = articles.length;
    articles = [
      ...articles,
      articles[randomIntFromInterval(0, len - 1)],
      articles[randomIntFromInterval(0, len - 1)],
      articles[randomIntFromInterval(0, len - 1)],
      articles[randomIntFromInterval(0, len - 1)],
    ];
  };
</script>

<section transition:fade>
  <div class="container">
    <div class="article-section">
      <h3>Latest Articles</h3>

      <div class="articles">
        {#each articles as article}
          <div class="article hover" style="--image: url({article.image});">
            <div class="image" />
            <div class="details">
              <div class="category">{article.category}</div>
              <a href="/press-release/{article.id}"><h4>{article.title}</h4></a>
              <div class="credit">
                <div class="date">{article.date}</div>
                <div class="divider" />
                <div class="author">
                  by <span class="name">{article.author}</span>
                </div>
              </div>
              <p>{article.excerpt}</p>
              <div class="actions">
                <a href="/press-release/{article.id}">Read More</a>
                <span class="external" />
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="more">
        <Button on:click={loadMore}>Load More</Button>
      </div>
    </div>
    <div class="explore-section">
      <h3>Explore Worldwide</h3>
      <div class="worldwide-articles">
        {#each articles as article}
          <div class="explore-article">
            <div class="category">{article.category}</div>
            <a href="/press-release/{article.id}"><h4>{article.title}</h4></a>
            <div class="credit">
              <div class="date">{article.date}</div>
              <div class="divider" />
              <div class="author">
                by <span class="name">{article.author}</span>
              </div>
            </div>

            {#if article.tags && article.tags.length}
              <div class="tags">
                {#each article.tags as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
      <SubscribeToNewsletter />
    </div>
  </div>
</section>

<style>
  section {
    --hello: "world";
  }

  h3 {
    margin-bottom: 3rem;
  }

  h4 {
    margin: 0.5rem 0;
  }

  a,
  a:visited {
    text-decoration: none;
    color: var(--accent-color);
  }

  .article-section h3 {
    padding-left: 1rem;
  }

  .container {
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    padding: 4rem 1rem;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 3rem;
  }

  .articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    margin-bottom: 3rem;
  }
  .article {
    padding: 0.7rem;
    border-radius: 1rem;
  }

  .article.hover:hover {
    box-shadow: 5px 5px 20px rgba(200, 200, 200, 0.5);
  }

  .article .image {
    background-image: var(--image);
    background-size: cover;
    border-radius: 0.5rem;
    height: 250px;
    width: 100%;
  }

  .article .details {
    padding: 1rem;
  }

  .article .credit {
    margin-bottom: 0.5rem;
  }

  .article .details p {
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 2rem;
  }

  .explore-article {
    padding-bottom: 2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #e7e7e7;
  }

  .article .actions a {
    text-transform: uppercase;
    border-bottom: 2px solid var(--accent-color);
    padding: 0.5rem;
    font-weight: bold;
    font-size: 0.8rem;
    letter-spacing: 1.2px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }
  .tags .tag {
    text-transform: uppercase;
    font-size: 0.7rem;
    font-weight: bold;
    border: 1px solid #deac75;
    padding: 0.2rem 1rem;
    border-radius: 3rem;
  }

  .more {
    display: grid;
    place-items: center;
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
</style>
