<section>
  <div class="content">
    <div class="video">
      <div class="video-container">
        <iframe
          height="400"
          src="https://www.youtube.com/embed/dGICIqxCwhI?controls=0"
          title="YouTube video player"
          frameborder="0"
          style="border-radius: 10px;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
    <div class="text">
      <h2>Distinctly Filipino</h2>
      <h3>
        Tanduay is unique since it is the only Rum from the Topical Islands of the Philippines.
      </h3>
      <p>
        <!-- The Philippines is an archipelago rich with stories and experiences. We
        would like to share some of these stories here with you. -->
      </p>
    </div>
  </div>
</section>

<style>
  section {
    background: url(/images/our-land-bg.png) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fffffa;
    /* border: 1px solid #ccc; */
    --border-color: #fffffa;
    padding: 100px 0;
  }

  iframe {
    width: 100%;
    aspect-ratio: 16/9;
  }

  h2 {
    font-size: 35px;
    font-weight: 200;
    font-family: adobe-garamond-pro, serif;
  }

  h3 {
    font-size: 2.5rem;
    font-style: italic;
    font-weight: 400;
    padding: 20px 0;
    font-family: adobe-garamond-pro, serif;
  }

  .video-container {
    border: 2px solid var(--border-color);
    padding: 10px;
    border-radius: 10px;
  }

  /* .video-container > div {
		background-color: green;
		margin: 10px;
		height: 400px;
		border-radius: 10px;
	} */

  p {
    font-family: acumin-pro, sans-serif;
  }

  .content {
    max-width: var(--max-width);
    width: 100vw;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 100px;
    padding: 0 32px;
  }
  @media (max-width: 1240px) {
    .content {
      grid-template-columns: 1fr 1fr;
    }
    h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 930px) {
    section {
      padding: 80px 0;
    }
    .content {
      grid-template-columns: 1fr;
      grid-gap: 0;
    }

    h2 {
      font-size: 18pt;
    }

    h3 {
      font-size: 24pt;
    }

    iframe {
      height: unset;
    }

    .text {
      padding-top: 2rem;
    }

    .video-container {
      padding: 5px;
    }
    .video-container iframe {
      width: 100%;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 570px) {
    section {
      padding: 48px 0;
    }
  }
</style>