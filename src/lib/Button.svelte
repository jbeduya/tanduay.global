<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let active = false;
</script>

<button class:active on:click={() => dispatch("click")}><slot /></button>

<style>
  button {
    font-family: acumin-pro, sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: transparent;
    padding: 0.6rem 2rem;
    border-radius: 30px;
    border: 2px solid #d18b3f;
    color: #d18b3f;
    letter-spacing: 1px;
    cursor: pointer;
    transition-duration: 0.25s;
  }

  .active {
    background-color: #d18b3f;
    color: #fff;
  }

  button:hover {
    background-color: #f2a049;
    border-color: #f2a049;
    color: #fff;
  }
</style>
