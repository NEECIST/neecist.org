<template>
  <div id="app">
    <div class="top">
      <div class="container-left">
          <img id="logo-neec-full" src="../public/Logo_NEEC_White.png" alt="Logo NEEC Completo">
      </div>

      <div class="container-center">
          <h1>Speed Quiz</h1>
      </div>

      <div class="container-right">
        <a href="http://neecist.org/games">Back</a>
      </div>
    </div>
    <Quiz />
    <footer>
      <p id="createdBy">
        created by <a href="https://github.com/NEECIST">NEECIST</a>
      </p>
    </footer>
  </div>
</template>

<script>
import Quiz from "@/components/Quiz.vue";

export default {
  name: "App",
  components: {
    Quiz,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

/* DUARTE CSS - Top bar */

@font-face {
    font-family: Arcade;
    src: url(../public/PressStart2P-Regular.ttf);
}

.top {
    background-color: #009de0;
    font-family: Arcade;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center
}

.container-left {
    display: flex;
    height: 5vh;
    width: 25vw;
    text-align: left;
}

.container-right {
    display: flex;
    height: 5vh;
    width: 25vw;
    align-items: center;
}

.container-center {
    display: flex;
    height: 5vh;
}

.top h1 {
    margin: 0;
    color: white;
    font-size: 2.5em;
    text-align: center;
    line-height: 5.5vh;
}

.top img {
    width: 10em;
    margin: 5px;
}

.top a {
    margin-left: auto;
    text-decoration: none;
    color: white;
}

/* DUARTE CSS END */

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

footer {
  position: fixed;
  bottom: 0;
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 0.7rem;
  background-color: #009de0;
}

#createdBy {
  float: right;
  color: white;
  font-weight: bold;
}

#createdBy a {
  color: white;
  font-weight: bold;
}
</style>
