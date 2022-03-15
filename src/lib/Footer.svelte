<script>
  import { subscribeSchema } from "../routes/api/validation_schema";

  let email = "";
  let withError = false;

  const subscribe = async () => {
    const { value, error } = subscribeSchema.validate({ email });
    if (error) return;

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // @ts-ignore
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      email = "";
      alert("Thank you for subscribing.");
    }
  };

  $: if (email.trim() === "") {
    withError = false;
  } else if (subscribeSchema.validate({ email }).error) {
    withError = true;
  } else {
    withError = false;
  }
</script>

<section>
  <div class="container">
    <div class="content">
      <div class="left">
        <div><img src="/images/footer-logo.png" alt="Logo" /></div>
        <div class="subscribe">
          <h3 class="garamond">Subscribe to our Newsletter</h3>
          <p>Sign up with your email address to receive news and updates.</p>
          <div class="form">
            <input
              class:has-error={withError}
              type="text"
              placeholder="Enter email address"
              on:keypress={(e) => {
                if (e.key === "Enter") {
                  subscribe();
                }
              }}
              bind:value={email}
            />
            <input
              type="submit"
              disabled={withError}
              on:click={subscribe}
              value="Submit"
            />
          </div>
          {#if withError}
            <span class="error">Please enter a valid email address.</span>
          {/if}
        </div>
      </div>
      <div class="right">
        <div class="navigation">
          <a href="/#">Home</a>
          <a href="/#cocktail-culture">Recipes</a>
          <a href="/#where-to-find-us">Location</a>
          <a href="/#press-release">Press</a>
          <a href="/#videos">Videos</a>
          <a href="#">Terms</a>
        </div>
        <div class="top">
          <a href="#top">
            <img src="/images/back-to-top.png" alt="Back to Top" />
          </a>
        </div>
      </div>
    </div>

    <div class="footer">
      <div>Copyright © 2021 Tanduay USA. All Rights Reserved.</div>
      <div>
        <a href="#">Terms & Policies</a> | <a href="#">Privacy Policy</a>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  p {
    color: #5c5237;
  }
  h3 {
    font-size: 26px;
  }
  .container {
    width: 100vw;
    max-width: var(--max-width);
    margin: 50px 20px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0 40px;
    font-family: Roboto, --apple-system, sans-serif;
    color: #909090;
    font-size: 0.9rem;
  }
  .footer a {
    color: #909090;
  }

  .left {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .right {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }

  input {
    border: none;
    outline: none;
    background: transparent;
  }
  .form {
    display: grid;
    grid-template-columns: 10fr 1fr;
    padding: 15px 20px;
    border: 2px solid #c7b49f;
    border-radius: 20px;
    margin: 20px 0;
    width: 400px;
  }
  ::placeholder {
    color: #d18b3f;
  }
  input {
    color: #d18b3f;
  }
  [type="submit"] {
    color: #d18b3f;
    font-weight: bold;
    text-transform: uppercase;
  }
  a {
    text-decoration: none;
    color: var(--text-color);
    font-family: adobe-garamond-pro, sans-serif;
  }
  .right .navigation {
    display: flex;
    justify-content: flex-end;
    flex-flow: row wrap;
    align-items: center;
    width: 200px;
    /* margin: 20px 0; */
  }
  .top {
    width: 100px;
  }
  .right .navigation a {
    width: 100px;
    padding: 5px 0;
    display: inline-block;
  }
  .footer a {
    font-family: acumin-pro, sans-serif;
  }

  .error {
    color: red;
    font-size: 0.9rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
    display: block;
  }

  @media (max-width: 930px) {
    .content {
      flex-direction: column;
    }

    .container {
      margin: 0;
      width: 100%;
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }

    h3 {
      font-weight: normal;
    }

    .form {
      width: 100%;
    }
    .right {
      margin: 0 48px;
    }
    .navigation {
      width: 100%;
    }
    .right .navigation a {
      min-width: 90px;
      width: 90px;
    }

    p {
      font-size: 0.8rem;
    }

    .subscribe {
      padding: 0 24px;
    }

    .footer {
      display: flex;
      flex-direction: column;
      font-size: 0.8rem;
      padding: 0 24px;
      text-align: center;
    }
  }
</style>
