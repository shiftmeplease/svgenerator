<div class="modal">
  <div class="modal-box">
    <p class="modal-title">Title</p>
    <p class="modal-text">
      The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
      graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs
      vex! Fox nymph
    </p>
    <div class="modal-button-area">
      <a class="button primary large">Button1<i class="fa-solid fa-wallet" /></a>
      <a class="button error large">Close modal<i class="fa-solid fa-wallet" /></a>
    </div>
  </div>
  <div class="modal-bg" />
</div>

<style>
  .modal {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-box {
    background: white;
    z-index: 21;
    padding: 48px 20px;
    max-width: 850px;
    border-radius: 25px;
  }

  .modal-title {
    font-size: 38px;
    text-align: center;
    margin-bottom: 10px;
  }

  .modal-button-area {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .modal-text {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .modal-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000000b0;
  }
</style>
