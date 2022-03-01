<script context="module">
  export async function load({ fetch, session }) {
    if (session.accepted) {
      return {
        redirect: "/",
        status: 302,
      };
    }
    return {
      status: 200,
      body: {},
    };
  }
</script>

<script>
  import Button from "$lib/Button.svelte";
  import Logo from "$lib/Logo.svelte";

  const accept = async () => {
    fetch("/warning/accept", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async (res) => {
      window.location.href = "/";
    });
  };

  let isDenied = false;
</script>

<section>
  <div class="container">
    <div class="container-wrapper">
      <div class="content">
        <div class="logo">
          <span class="logo"><Logo /></span>
        </div>
        {#if !isDenied}
          <h2 class="garamond">Are you of Legal</h2>
          <h1 class="garamond">Drinking Age?</h1>
          <div class="actions">
            <Button on:click={accept}>Yes</Button>
            <Button on:click={() => (isDenied = true)}>NO</Button>
          </div>
        {:else}
          <div class="denied">
            <h1>Sorry.</h1>
            <h2>You must be of legal age to continue.</h2>
          </div>
        {/if}
      </div>
    </div>
    <footer class="acumin">
      You must be of legal drinking age to enter this website. This website uses
      cookies. By entering this site, I agree to the <a href="#"
        >Terms of Service</a
      >
      and <a href="#">Privacy Policy</a>.
    </footer>
  </div>
</section>

<style>
  :root {
    --content-size: 500px;
  }
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
  :global(.logo svg) {
    height: 40px;
  }

  section {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: grid;
    place-items: center;

    background-image: url("/images/warning/left-leaf.png"),
      url("/images/warning/right-leaf.png"), url("/images/warning/bg.png");
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: left -600px top -100px, top -400px right -600px,
      center center;
    background-size: 70%, 70%, cover;
  }

  .logo {
    display: inline-block;
  }

  h1,
  h2 {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    color: #50330d;
  }

  h2 {
    font-weight: normal;
    padding-top: 2rem;
  }
  h1 {
    font-size: 2.5rem;
    letter-spacing: 0.3rem;
    padding-bottom: 2rem;
  }

  .denied {
    padding-top: 2rem;
  }

  .denied h1,
  .denied h2 {
    margin: 1rem 0;
    padding: 0;
  }

  .container {
    max-width: var(--content-size);
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    padding: 0 2rem;
  }

  .container-wrapper {
    display: grid;
    place-items: center;
    width: 100%;
  }

  .container .content {
    background-color: #fffffa;
    border-radius: 1rem;
    padding: 3rem 2rem;
    width: 100%;
    text-align: center;
  }

  .actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    text-align: center;
    width: 300px;
    margin: 0 auto;
  }
  footer {
    color: white;
    font-size: 0.7rem;
    text-align: center;
    margin: 4rem 3rem;
  }

  footer a,
  footer a:visited {
    text-decoration: underline;
    color: white;
    line-height: 2rem;
  }
  .garamond {
    font-family: adobe-garamond-pro, sans-serif;
  }

  .acumin {
    font-family: acumin-pro, sans-serif;
  }

  @media (max-width: 1600px) {
    section {
      background-position: left -600px top -100px, top -400px right -600px,
        center center;
      background-size: 80%, 80%, cover;
    }
  }
  @media (max-width: 1300px) {
    section {
      background-position: left -700px top -100px, top -400px right -700px,
        center center;
      background-size: 90%, 90%, cover;
    }
  }

  @media (max-width: 1055px) {
    section {
      background-position: left -700px top -100px, top -400px right -700px,
        center center;
      background-size: 100%, 100%, cover;
    }
  }
  @media (max-width: 930px) {
    section {
      background-position: left -700px top -100px, top -400px right -700px,
        center center;
      background-size: 110%, 110%, cover;
    }
  }

  @media (max-width: 800px) {
    section {
      background-position: left -600px top 0px, top -300px right -600px,
        center center;
      background-size: auto, auto, cover;
    }
  }

  @media (max-width: 570px) {
    .actions {
      grid-template-columns: 1fr;
      width: 100%;
    }
    footer {
      margin: 0 0 2rem;
    }
  }
</style>
