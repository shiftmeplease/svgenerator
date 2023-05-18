<script>
  import EditorArea from "./EditorArea.svelte";
  import Footer from "./Footer.svelte";
  import HeaderInfoButton from "./HeaderInfoButton.svelte";
</script>

<main>
  <p class="text header text-center logo">
    <span class="header-letter-g">SVG</span>ENERATOR
  </p>
  <div class="container">
    <div class="application">
      <HeaderInfoButton />
      <EditorArea />
      <Footer />
    </div>
  </div>
</main>

<style>
  .container {
    max-width: calc(100% - 200px);
    margin: 0 auto;
  }
  @media (max-width: 1250px) {
    .container {
      max-width: calc(100% - 20px);
    }
  }
  main {
    height: 100vh;
  }

  /*TODO better fit to big screens */
  /* .background-fluid {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    position: fixed;
    background: linear-gradient(rgba(22, 28, 36, 0.94), rgba(22, 28, 36, 0.94)) center center /
        cover no-repeat,
      url(https://minimals.cc/assets/background/overlay_2.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    z-index: -1;
  } */

  .logo {
    background: #161c2494;
    padding: 20px;
    box-shadow: rgb(0 0 0 / 20%) -10px 40px 80px;
  }

  .header-letter-g {
    background: linear-gradient(225deg, rgba(255, 200, 71, 1) 0%, rgba(255, 65, 39, 1) 100%);
    padding: 1px 5px 1px 5px;
    margin-right: 3px;
    border-radius: 4px;
    transition: 0.2s;
    cursor: pointer;
    user-select: none;
  }

  .header-letter-g:hover {
    box-shadow: 0px 0px 15px 4px rgba(255, 200, 71, 0.1);
  }
</style>
