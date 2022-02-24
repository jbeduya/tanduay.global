<script>
  export let min = 1;
  export let max = 100;
  export let step = 1;
  export let value = 1;

  $: rangeWidth = Math.floor(((value - min) / (max - min)) * 100);
</script>

<div class="input-range" role="button">
  <div class="bar">
    <div
      class="background"
      style:width={rangeWidth + "%"}
      class:max={rangeWidth === 100}
    />
    <input type="range" bind:value {min} {max} {step} />
  </div>
</div>

<style>
  .input-range {
    width: 100%;
    position: relative;
    --height: 12px;
    --thumb-height: 24px;
    --color: #818d45;
  }
  input {
    background-color: transparent;
    display: block;
    width: 100%;
    position: absolute;
    top: -2px;
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    outline: none;
    transition: 0.3s;
  }
  input::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;
    background-color: var(--color);
    width: calc(var(--thumb-height) + 5px);
    height: calc(var(--thumb-height) + 5px);
    border-radius: 50%;
    border: 3px solid #fff;
    cursor: pointer;
    position: relative;
    top: -6px;
  }
  input::-moz-range-thumb {
    width: var(--thumb-height);
    height: var(--thumb-height);
    border-radius: 50%;
    background-color: var(--color);
    border: 3px solid white;
    cursor: pointer;
  }

  .bar {
    width: 100%;
    height: var(--height);
    background: #ddd;
    border-radius: 5px;
    position: relative;
  }
  .background {
    height: var(--height);
    display: inline-block;
    background: var(--color);
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    position: absolute;
    top: 0;
  }

  .max {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>
