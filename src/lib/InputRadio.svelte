<script>
  export let name;
  export let value;
  export let label;
  export let checked = false;

  let id = Math.random().toString();
</script>

<label class="custom-radio" for={id} on:click>
  <input type="radio" {name} {id} {value} {checked} />
  <span class="checkmark" />
  <span>{label}</span>
</label>

<style>
  .custom-radio {
    --size: 22px;
    display: inline-block;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    width: calc(var(--size) - 4px);
    height: calc(var(--size) - 4px);
    border-radius: 50%;
    border: 2px solid #818d45;
    position: relative;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .custom-radio input:checked ~ .checkmark:after {
    display: block;
  }

  .custom-radio:hover input ~ .checkmark {
    border-color: #616a34;
  }

  .custom-radio .checkmark:after {
    width: 10px;
    height: 10px;
    background-color: #818d45;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
  }
</style>
