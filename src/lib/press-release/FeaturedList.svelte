<script>
  export let articles = [];
</script>

<section>
  {#each articles as article}
    <div class="article" style="--image: url({article.image});">
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
      </div>
    </div>
  {/each}
</section>

<style>
  a,
  a:visited {
    text-decoration: none;
  }
  .article {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .image {
    background-image: var(--image);
    background-size: cover;
    border-radius: 0.5rem;
    height: 70%;
  }

  p {
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 2rem;
  }
</style>
