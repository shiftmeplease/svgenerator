<script>
  export let wrapper;
  export let isOpen;
  export let isPopup;
  /* svelte-ignore unused-export-let */
  export let toRight;
</script>

<div
  class="wrapper"
  bind:this={wrapper}
  class:isOpen
  class:isPopup
  role={isPopup ? "dialog" : undefined}
  aria-label="color picker"
>
  <slot />
</div>

<style>
  div {
    padding: 8px 5px 5px 8px;
    /* background-color: white; */
    margin: 0 10px 10px;
    border: 1px solid white;
    border-radius: 12px;
    display: none;
    width: max-content;
    box-shadow: rgb(0 0 0 / 40%) -10px 40px 80px;
    background-color: rgb(22, 28, 36);
  }
  div:hover {
    background-color: #222a34;
  }

  div:hover {
    box-shadow: rgb(255 255 255 / 4%) 0px 2px 16px 0px;
  }
  .isOpen {
    display: block;
  }
  .isPopup {
    position: absolute;
    top: 60px; /* magic */
    /*left: 500px; /* magic */
    z-index: 5;
  }

  @media (max-width: 1250px) {
    .isPopup {
      top: 60px; /* magic */
      left: -100px;
    }
  }
  @media (max-width: 700px) {
    .isPopup {
      position: fixed;
      top: 70%; /* magic */
      left: 30%;
    }
  }

  /* @media (max-width: 1050px) {
    .isPopup {
      left: -60%;
    }
  } */
</style>
