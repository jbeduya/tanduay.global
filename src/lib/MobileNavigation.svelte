<script>
  import { createEventDispatcher, onMount } from "svelte";

  import Navigation from "./Navigation.svelte";
  import SocialMedia from "./SocialMedia.svelte";

  const dispatch = createEventDispatcher();

  export let show = false;
</script>

<section class:show>
  <div class="cancel" on:click={() => dispatch("toggle")}>&nbsp;</div>
  <div class="content">
    <div>
      <div class="search">
        <input type="text" placeholder="Search" />
        <i class="fas fa-search" />
      </div>
      <Navigation />
    </div>
    <div>
      <i class="fas fa-times" on:click={() => dispatch("toggle")} />
      <SocialMedia />
    </div>
  </div>
</section>

<style>
  section {
    --color: #e9dfa8;
    /* display: none; */
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr auto;
    z-index: 999999;
    color: var(--color);
    transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    left: calc(100vw + 20px);
    visibility: hidden;
  }

  section.show {
    left: 0;
    visibility: visible;
  }

  .content {
    position: relative;
    background-color: #9a8d45;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 350px;
    padding-bottom: 50px;
    padding-top: 80px;
    padding-left: 50px;
    padding-right: 50px;
    min-width: 250px;
    box-shadow: -10px -10px 30px rgba(0, 0, 0, 0.3);
  }

  .search {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid var(--color);
    margin-bottom: 30px;
  }

  input {
    background-color: transparent;
    border: 0;
    color: var(--color);
    width: 100%;
    outline: none;
  }
  input::placeholder {
    color: var(--color);
  }
  i {
    color: var(--color);
  }
  .fa-times {
    position: absolute;
    top: 20px;
    right: 30px;
  }
</style>
