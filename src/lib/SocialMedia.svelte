<nav>
  <section>
    <div class="link">
      <div>Visit <a href="https://ph.tanduay.com">Tanduay Philippines</a></div>
    </div>
    <div class="social">
      <div class="main">
        <a href="https://www.facebook.com/TanduayBrandsInternational" target="_blank"><i class="fab fa-facebook-square fa-xl" /></a>
        <a href="https://www.twitter.com/tanduayglobal" target="_blank"><i class="fab fa-twitter-square fa-xl" /></a>
        <a href="https://www.instagram.com/tanduayrum" target="_blank"><i class="fab fa-instagram-square fa-xl" /></a>
      </div>
      <div class="lang">
        <a href="https://www.youtube.com/c/TanduayDistillersInc" target="_blank"><i class="fab fa-youtube-square fa-xl" /></a>
      </div>
    </div>
  </section>
</nav>

<style>
  section,
  a,
  div {
    color: var(--text-color);
  }

  nav {
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 12px;
  }

  section {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    column-gap: 20px;
    padding: 16px 16px 0 0;
    max-width: var(--max-width);
    width: 100vw;
  }
  i {
    color: #9a8d45;
  }

  .link {
    text-align: right;
    width: 100%;
  }
  .social {
    width: 200px;
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  .main,
  .lang {
    display: flex;
    gap: 1rem;
  }
  .lang {
    padding-left: 1rem;
  }

  @media (max-width: 930px) {
    section {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2rem;
    }
    a {
      color: white;
    }
    .social {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .main {
      display: flex;
      gap: 1rem;
    }
    .link > div,
    i {
      color: #e9dfa8;
    }
  }
</style>
