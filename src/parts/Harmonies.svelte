<script>
  import { colord, extend } from "colord";
  import * as svgData from "../store/svgData";
  import harmoniesPlugin from "colord/plugins/harmonies";
  extend([harmoniesPlugin]);

  export let color;
  $: suggestedColors = colord(color)
    .harmonies("complementary")
    .map((c) => c.toHex());

  function updateTextColor(color) {
    svgData.update("textColor", color);
  }
</script>

<div>
  {#each suggestedColors as suggColor, i}
    <!-- {#if suggColor != color} -->
    {#if i != 0}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => {
          updateTextColor(suggColor);
        }}
      >
        <span style="color:{suggColor}">{suggColor}</span>
      </div>
    {/if}
  {/each}
</div>
