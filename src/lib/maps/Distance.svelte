<script>
  import InputRange from "$lib/InputRange.svelte";

  export let distance = 20;
</script>

<div class="map-distance">
  <h3>Set Distance</h3>

  <div class="form-area">
    <div class="map-distance-input">
      <InputRange step={5} min={10} max={100} bind:value={distance} />
    </div>
    <div class="distance">{distance} KM</div>
  </div>
</div>

<style>
  .map-distance {
    height: var(--form-height);
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100;
    gap: 1rem;
  }

  .form-area {
    background-color: var(--surface-color);
    display: grid;
    place-items: center;
    box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 0.5rem;
    position: relative;
    min-width: 245px;
  }

  .distance {
    position: absolute;
    bottom: 0.5rem;
    left: 1rem;
    font-size: 0.9rem;
    color: #393322;
  }

  .map-distance-input {
    width: 100%;
  }
  h3 {
    text-transform: uppercase;
    font-size: var(--header-font-size);
    color: var(--header-color);
    font-weight: normal;
  }

  @media (max-width: 570px) {
    .map-distance {
      height: 110px;
    }
  }
</style>
