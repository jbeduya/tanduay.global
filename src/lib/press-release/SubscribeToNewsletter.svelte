<section>
  <h4>Subscribe to our Newsletter</h4>
  <p>Sign up with your email address to receive news and updates.</p>
  <div class="form">
    <input type="text" placeholder="Enter your email address" />
    <button>Submit</button>
  </div>
</section>

<style>
  section {
    background-color: #f1ece3;
    padding: 2rem;
    border-radius: 0.5rem;
  }
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
    border: 1px solid var(--accent-color);
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    background-color: #fff;
  }

  p {
    margin: 0.5rem 0 1rem;
  }

  input,
  button {
    border: none;
    outline: none;
    background-color: #fff;
  }
  button {
    color: var(--accent-color);
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1.2px;
    font-size: 0.7rem;
  }
</style>
