<script>
  export let article;
</script>

<section>
  <div class="article">
    <div class="photo" style="background: url({article.photo}) no-repeat; " />
    <!-- <img src={article.photo} alt="Article" /> -->
    <div class="content">
      <div class="category">{article.category}</div>
      <p class="title">{article.title}</p>
      <div class="details">
        <div class="date">{article.date}</div>
        <span class="separator">|</span>
        <div class="author">by <span>{article.author}</span></div>
      </div>
      <p>{article.description}</p>
    </div>

    <div class="links">
      <a class="more" href={article.link}>Read more</a>
      <span class="external"
        ><a href="#"><i class="fas fa-external-link-alt" /></a>
      </span>
    </div>
  </div>
</section>

<style>
  section {
    --category-color: #d18b3f;
    --title-color: var(--text-color);
    --content-color: var(--text-color);
    padding: 20px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    transition-duration: 400ms;
  }
  .photo {
    background-size: cover;
    min-width: 250px;
    width: 100%;
    height: 300px;
    border-radius: 10px;
  }
  .content {
    padding: 16px;
  }
  .category {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    color: var(--category-color);
  }
  .details {
    display: flex;
    column-gap: 10px;
    color: #ddd;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  .date,
  .author {
    color: var(--title-color);
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  .author span {
    font-weight: bold;
  }
  .title {
    font-size: 1.4rem;
    font-weight: bold;
    font-family: adobe-garamond-pro, sans-serif;
    letter-spacing: 0.5px;
    line-height: 130%;
    height: 60px;
    text-overflow: ellipsis;
    margin: 10px 0;
    color: var(--title-color);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 70px;
    line-height: 150%;
    color: var(--content-color);
    font-size: 0.9rem;
  }
  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding-left: 16px;
  }

  .links a {
    text-decoration: none;
    color: #e9dfa8;
  }

  .links .more {
    text-transform: uppercase;
    padding: 10px 10px;
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--category-color);
    border-bottom: 2px solid var(--category-color);
  }
  .links i {
    font-size: 1.2rem;
    margin-right: 10px;
  }

  section:hover {
    background-color: #90a25e;
    --title-color: #fff;
    --category-color: #d7d299;
    --content-color: var(--category-color);
  }

  section:hover .links .more {
    color: white;
  }

  @media (max-width: 1131px) {
    .details {
      flex-direction: column;
    }
    .details .separator {
      display: none;
    }
  }
</style>
