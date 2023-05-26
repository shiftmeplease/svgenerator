<div class="header-info-button-block">
  <p class="text regular left-block">
    SVG Playground. Built with Svelte<br />A long time ago, there was a dream of customizeable
    onchain NFT. Everything was fine, until i discovered that Safari doesn't support multiple
    <span style="font-weight:bold">text-shadow</span>
    styles.<br />So, every SVG built on this website, will look like
    <span class="shining-shit">💩</span>
    on Safari
  </p>
</div>

<style>
  .header-info-button-block {
    margin-top: 25px;
    display: flex;
    gap: 10px;
  }

  .header-info-button-block .text {
    width: min(100%, 800px);
    margin: 0 auto;
  }
  .shining-shit {
    text-shadow: 0px 0px 6px rgb(255, 65, 39);
  }
</style>
