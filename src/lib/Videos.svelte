<script>
  import ArrowRight from "./products/icons/ArrowRight.svelte";
  import ArrowLeft from "./products/icons/ArrowLeft.svelte";
</script>

<section>
  <div class="container">
    <div class="header">
      <div class="left">
        <h1 class="h1">Videos</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          maiores quasi quas necessitatibus natus eligendi reiciendis enim rem,
          libero fugiat.
        </p>
      </div>
      <div class="right">
        <div class="arrow">
          <ArrowLeft />
        </div>
        <div class="arrow">
          <ArrowRight />
        </div>
      </div>
    </div>
    <div class="video-scroller">
      <div class="videos">
        <div class="video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/tBCTG2LTIo4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/XbPPCC9RswE?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    --border-radius: 10px;
    --default-padding: 16px;
    padding: 0 var(--default-padding);
    margin-top: 100px;
  }

  h1 {
    text-align: left;
  }
  p {
    margin: 2rem 0 3rem 0;
  }
  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    background: url(/images/videos-background.png) no-repeat;
    background-size: contain;
    background-position-x: center;
    background-position-y: bottom;
    padding-bottom: 50px;
  }

  .video-scroller {
    margin: 0 50px;
    padding-bottom: 50px;
    overflow-x: auto;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .right {
    justify-self: end;
    display: flex;
    gap: 1rem;
    width: 233px;
  }

  .videos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    /* object-fit: contain; */
  }
  .video {
    padding: 10px;
    border: 2px solid var(--secondary-color);
    border-radius: var(--border-radius);
  }

  .video iframe {
    border-radius: var(--border-radius);
  }
</style>
