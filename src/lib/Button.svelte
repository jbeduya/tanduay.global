<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let active = false;
</script>

<button class:active on:click={() => dispatch("click")}><slot /></button>

<style>
  button {
    font-family: acumin-pro, sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: transparent;
    padding: 15px 30px;
    border-radius: 30px;
    border: 2px solid #d18b3f;
    color: #d18b3f;
    letter-spacing: 1px;
    cursor: pointer;
  }
  button:hover,
  .active {
    background-color: #d18b3f;
    color: #fff;
  }
</style>
