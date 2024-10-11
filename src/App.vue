<template>
  <div id="app">
    <Header />
    <main>
      <h2>How To Play Mafia</h2>
      <!-- Other content goes here -->
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
main {
  padding: 20px;
  /* Add space inside the main area */
  text-align: left;
  /* Left align the text */
  max-width: 800px;
  /* Optional: limit the width */
  margin: 0 auto;
  /* Center the main area on the page */
}

h2 {
  margin-bottom: 20px;
  /* Add spacing below the heading */
  font-size: 2em;
  /* Adjust heading size if needed */
}
</style>







<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to the Mafia Detected Game"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderMafia from './components/Header.vue'

export default {
  name: 'Mafia-Detected',
  components: {
    HelloWorld,
    HeaderMafia,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
