<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let active = false;
  export let href = "#";
</script>

<a {href} class:active on:click={() => dispatch("click")}><slot /></a>

<style>
  a {
    font-family: acumin-pro, sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: transparent;
    padding: 15px 30px;
    border-radius: 30px;
    border: 2px solid #d18b3f;
    color: #d18b3f;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    transition-duration: 0.25s;
  }

  .active {
    background-color: #d18b3f;
    color: #fff;
  }

  a:hover {
    background-color: #f2a049;
    border-color: #f2a049;
    color: #fff;
  }
</style>
