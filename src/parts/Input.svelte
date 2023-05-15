<script>
  import Slider from "./Slider.svelte";

  export let value;
  export let label = "label";
  export let type = "text";
  export let values = {};

  let sliderValue;

  let min = $$restProps?.min | 0,
    max = $$restProps?.max || 100;

  if (type == "select" && Object.entries(values).length == 0) {
    throw new Error("select input are missing prop `values`");
  }
  if (type == "slider") {
    sliderValue = [value];
  }
  $: if (type == "slider" && sliderValue) {
    value = sliderValue[0];
  }
</script>

<p class="label">{label}</p>
{#if type == "text"}
  <div class="input-outer">
    <input class="text-input" bind:value />
  </div>
{:else if type == "slider"}
  <div class="input-outer-slider">
    <input class="text-input" type="number" bind:value={sliderValue[0]} {min} {max} />
    <div class="slider-x-top">
      <Slider bind:values={sliderValue} {min} {max} />
    </div>
  </div>
{:else if type == "select"}
  <div class="input-outer">
    <select class="text-input" bind:value>
      {#each Object.entries(values) as [valueName]}
        <option class="text-input" value={valueName}>
          {valueName}
        </option>
      {/each}
    </select>
  </div>
{/if}

<style>
  .label {
    color: white;
    font-size: 0.8rem;
    margin-bottom: 0.4em;
    opacity: 0.7;
  }
  .input-outer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-input {
    /* line-height: 1.4375em; */
    font-size: 1rem;
    color: rgb(255, 255, 255);
    border: 1px solid white;
    box-sizing: border-box;
    cursor: text;
    display: inline-flex;
    align-items: center;
    width: 100%;
    position: relative;
    border-radius: 8px;
    background: #161c24;
    padding: 6.5px 8px;
    transition: 0.2s;
    /* white-space: nowrap; */
    height: 2.2rem;
  }

  .text-input:hover {
    background-color: #222a34;
  }
  .input-outer-slider {
    display: flex;
    flex-direction: column;
  }

  .input-outer-slider .slider-x-top {
    margin-top: 10px;
  }

  .input-outer-slider .slider-x-top {
    width: 80%;
    margin: 12px auto;
  }
</style>
