<nav>
  <section>
    <div class="link">
      <div>Visit <a href="https://ph.tanduay.com">Tanduay Philippines</a></div>
    </div>
    <div class="social">
      <div class="main">
        <a href="https://www.facebook.com/TanduayBrandsInternational" target="_blank"><i class="socials icon-fb" /></a>
        <a href="https://www.twitter.com/tanduayglobal" target="_blank"><i class="socials icon-ig" /></a>
        <a href="https://www.instagram.com/tanduayrum" target="_blank"><i class="socials icon-twitter" /></a>
        <a href="https://www.youtube.com/c/TanduayDistillersInc" target="_blank"><i class="socials icon-youtube" /></a>
      </div>
      <div class="lang">
        <!-- <a href="#" target="_blank"><i class="fa-regular fa-globe fa-lg" /></a> -->
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
  .icon-fb {
    content: url('/images/socials/fb.png');
  }

  .icon-ig {
    content: url('/images/socials/ig.png');
  }

  .icon-twitter {
    content: url('/images/socials/twitter.png');
  }

  .icon-youtube {
    content: url('/images/socials/youtube.png');
  }

  i.socials {
    max-width: 1.8em;
    max-height: 1.8em;
    vertical-align: -.125em
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
    .link {
      text-align: start;
    }
    .link > div,
    i {
      color: #e9dfa8;
    }
    .icon-fb {
      content: url('/images/socials/fb-white.png');
    }
    .icon-ig {
      content: url('/images/socials/ig-white.png');
    }

    .icon-twitter {
      content: url('/images/socials/twitter-white.png');
    }

    .icon-youtube {
      content: url('/images/socials/youtube-white.png');
    }
  }
</style>
