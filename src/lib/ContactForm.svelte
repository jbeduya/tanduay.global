<script>
  import Button from "./Button.svelte";
  import { feedbackSchema } from "../routes/api/validation_schema";

  let firstname = "";
  let lastname = "";
  let email = "";
  let mobile = "";
  let message = "";

  let form = {
    firstname: null,
    lastname: null,
    email: null,
    mobile: null,
    message: null,
  };
  let errors = {};

  const feedback = async () => {
    const { value, error } = feedbackSchema.validate(
      {
        firstname,
        lastname,
        email,
        mobile,
        message,
      },
      { abortEarly: false }
    );

    errors = {};
    if (error) {
      error.details.forEach((detail) => {
        errors[detail.path[0]] = detail.message;
      });
      console.log(error.details);
      return;
    }
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // @ts-ignore
      body: JSON.stringify({ firstname, lastname, email, mobile, message }),
    });
    if (response.ok) {
      email = "";
      firstname = "";
      lastname = "";
      mobile = "";
      message = "";
      alert("We heard you.");
    } else alert("Sorry, this contact form is not available for now.");
  };
</script>

<section>
  <div class="container">
    <h1 class="garamond">We'd love to hear from you!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequatur
      sequi iusto soluta similique repellendus! Quisquam voluptatem, quia quasi
      exercitationem impedit voluptate aliquid ut iste vero est vel nesciunt! Id
      sunt soluta sequi quod adipisci accusantium voluptatum quidem consequuntur
    </p>

    <div class="fields">
      <div class="group">
        <div>
          <input
            type="text"
            bind:this={form.firstname}
            bind:value={firstname}
            placeholder="First Name"
            class:hasError={errors.firstname}
          />
          {#if errors.firstname}
            <span class="error">{errors.firstname}</span>
          {/if}
        </div>
        <div>
          <input
            type="text"
            bind:this={form.lastname}
            bind:value={lastname}
            placeholder="Last Name"
            class:hasError={errors.lastname}
          />
          {#if errors.lastname}
            <span class="error">{errors.lastname}</span>
          {/if}
        </div>
      </div>
      <div class="group">
        <div>
          <input
            type="text"
            bind:this={form.email}
            bind:value={email}
            placeholder="Email"
            class:hasError={errors.email}
          />
          {#if errors.email}
            <span class="error">{errors.email}</span>
          {/if}
        </div>
        <div>
          <input
            type="text"
            bind:this={form.mobile}
            bind:value={mobile}
            placeholder="Mobile"
            class:hasError={errors.mobile}
          />
          {#if errors.mobile}
            <span class="error">{errors.mobile}</span>
          {/if}
        </div>
      </div>

      <div class="full">
        <textarea
          bind:this={form.message}
          bind:value={message}
          rows="10"
          placeholder="Type something here..."
          class:hasError={errors.message}
        />
        {#if errors.message}
          <span class="error">{errors.message}</span>
        {/if}
      </div>
      <div class="button">
        <Button on:click={feedback} active>Submit</Button>
      </div>
    </div>

    <div class="visit garamond">
      <div>
        <a href="https://ph.tanduay.com">Visit Tanduay Philippines &#8594;</a>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    --color: #d18b3f;
    --spacing: 30px;
    --color: #5c5237;
    padding: 100px 0;

    background: url(/images/form-bg.png) no-repeat;
    background-size: cover;
    color: var(--color);
    margin-bottom: 100px;
  }

  h1 {
    text-align: center;
    color: #50330d;
    font-size: 2rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: var(--spacing);
  }

  .fields {
    padding: var(--spacing);
  }
  .group {
    margin: var(--spacing) 0;
  }

  .container {
    max-width: calc(var(--max-width) - 700px);
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  input,
  textarea {
    width: 100%;
    border: none;
    background: transparent;
    border-bottom: 1px solid var(--color);
    padding: 10px;
  }

  textarea {
    border: 1px solid var(--color);
    border-radius: 5px;
    font-family: acumin-pro, sans-serif;
  }

  .group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .button {
    margin-top: var(--spacing);
    text-align: right;
  }
  .visit {
    position: relative;
    bottom: 0;
    width: 800px;
    height: 150px;
    margin: 0 auto;
    bottom: -170px;
    font-size: 55px;
    background-color: #90a25e;
    display: grid;
    place-items: center;
  }

  .error {
    color: red;
    font-size: 0.8rem;
  }
  .hasError {
    border-bottom: 1px solid red;
  }
  textarea.hasError {
    border: 1px solid red;
  }
  .visit > div {
    width: 100%;
    padding-left: 50px;
  }
  .visit a {
    color: white;
    text-decoration: none;
    font-style: italic;
  }

  @media (max-width: 930px) {
    h1 {
      text-transform: uppercase;
      margin: 0;
      padding: 0;
      font-weight: normal;
    }
    section {
      padding: 24px 0;
    }
    .group {
      grid-template-columns: 1fr;
    }
    .fields {
      padding-top: 0;
    }
    .visit {
      width: calc(100vw - 48px);
      height: auto;
      bottom: -4rem;
      font-size: 1.5rem;
      padding: 10px 100px;
      padding-left: 0;
    }
    .visit > div {
      margin-left: 0;
    }
  }
</style>
