<script>
  import { Config } from "$lib/support/Config";

  import { createEventDispatcher } from "svelte";

  let access_token = Config.MAPGL_TOKEN;
  let endpoint = Config.GEOCODE_ENDPOINT;
  const build_url = (query) => {
    return `${endpoint}${query}.json?access_token=${access_token}`;
  };

  const dispatch = createEventDispatcher();

  let timeout;
  let searchElement,
    searchText = "";

  const updateLocation = () => {
    if (searchText.trim().length < 3) return;
    clearTimeout(timeout);

    timeout = setTimeout(search, 150);
  };

  const search = async () => {
    fetch(build_url(searchText))
      .then((res) => res.json())
      .then((res) => {
        let results = res.features;
        if (results.length > 0) {
          console.log("center", results[0].center);
          dispatch("found", [...results[0].center]);
        }
      });
  };

  const currentLocation = () => dispatch("currentLocation");

  $: if (searchText.trim().length >= 5) {
    clearTimeout(timeout);

    timeout = setTimeout(search, 250);
  }
</script>

<div class="map-location">
  <h3>Enter Location Here</h3>
  <div class="form-area">
    <div class="map-current-location">
      <input
        bind:value={searchText}
        type="text"
        placeholder="Enter location..."
      />
      <button on:click={currentLocation}
        ><i class="fa-solid fa-location-crosshairs" /></button
      >
    </div>
  </div>
</div>

<style>
  .map-location {
    background-color: unset;
    height: var(--form-height);
    /* border: 1px solid red; */
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 1rem;
  }

  .form-area {
    background-color: var(--surface-color);
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 0.5rem;
    display: grid;
    place-items: center;
  }

  .map-current-location {
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: var(--form-surface);
    padding: 0.5rem;
    border-radius: 0.2rem;
    width: 100%;
  }

  h3 {
    text-transform: uppercase;
    font-size: var(--header-font-size);
    color: var(--header-color);
    font-weight: normal;
  }

  input,
  button {
    border: none;
    outline: none;
    background-color: transparent;
  }

  button {
    color: #999;
    cursor: pointer;
  }
  button:hover i {
    color: blue;
  }
  @media (max-width: 570px) {
    .map-location {
      height: auto;
    }
  }
</style>
