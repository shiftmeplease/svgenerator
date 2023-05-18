<script>
  import OptionArea from "./OptionArea.svelte";
  import SvgArea from "./SVGArea.svelte";
</script>

<div class="editor-area">
  <div>
    <SvgArea />
  </div>
  <div class="option-area">
    <OptionArea />
  </div>
</div>

<style>
  .editor-area {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    min-width: 375px;
  }

  .editor-area > div {
    flex: 1;
  }
</style>
