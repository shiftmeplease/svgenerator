<script>
  let isConnected = false;
</script>

<div class="header-info-button-block">
  <div>
    <p class="text regular left-block">
      The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
      graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs
      vex! Fox nymph
    </p>
  </div>
  <div class="header-info-button">
    {#if !isConnected}
      <a class="button primary large" href="#">aaaa<i class="fa-solid fa-wallet" /></a>
    {:else}
      <a class="button completed large off" href="#"
        >Connect Completed<i class="fa-regular fa-circle-check" /></a
      >
    {/if}
  </div>
</div>

<style>
  .header-info-button-block {
    margin-top: 25px;
    display: flex;
    gap: 10px;
  }

  .header-info-button-block > div {
    flex: 1;
  }

  .header-info-button-block .text {
    max-width: 70%;
    margin: 0 auto;
  }

  .header-info-button {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
