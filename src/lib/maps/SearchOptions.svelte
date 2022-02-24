<script>
  import InputRadio from "$lib/InputRadio.svelte";
  import { createEventDispatcher } from "svelte";
  export let checked = "location";

  const dispatch = createEventDispatcher();
</script>

<div class="map-search-options">
  <h3>Find Tanduay Near You</h3>

  <div class="form-area">
    <div class="options">
      <InputRadio
        checked={checked == "location"}
        on:click={() => dispatch("check", "location")}
        name="type"
        value="location"
        label="Location"
      />
      <InputRadio
        checked={checked == "stores"}
        on:click={() => dispatch("check", "stores")}
        name="type"
        value="stores"
        label="Stores"
      />
      <InputRadio
        checked={checked == "bars"}
        on:click={() => dispatch("check", "bars")}
        name="type"
        value="bars"
        label="Bars"
      />
      <InputRadio
        checked={checked == "restaurants"}
        on:click={() => dispatch("check", "restaurants")}
        name="type"
        value="restaurants"
        label="Restaurants"
      />
    </div>
  </div>
</div>

<style>
  .map-search-options {
    display: grid;
    gap: 1rem;
    grid-template-rows: auto 1fr;
  }

  h3 {
    text-transform: uppercase;
    font-size: var(--header-font-size);
    color: var(--header-color);
    font-weight: normal;
  }

  .form-area {
    background-color: var(--surface-color);
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: grid;
    place-items: center;
    min-width: 245px;
    height: 94.5px;
  }

  .options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem;
    font-size: 0.9rem;
    gap: 1rem;
  }

  @media (max-width: 570px) {
    .form-area {
      place-items: flex-start;
    }
    .options {
      width: 100%;
    }
  }
</style>
