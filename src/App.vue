<template>
  <div id="app">
    <Header />
    <main>
      <h2>How To Play Mafia Detected</h2>
      <p>Mafia Detected is a social deduction game where players must uncover the identities of the mafia members before they eliminate the townsmen. The game alternates betwen day and night phases, each with distinct actions.</p>
      <h1 class="phases">
        <span class="day-phase">Day Phase</span>
        <span class="night-phase">Night Phase</span>
      </h1>

      <p class="custom-paragraph">During the day phase, all players discuss among themselves who he suspects is the mafia. Then they vote on who to kill.</p>
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

h1 {
  margin-bottom: 10px;
  font-size: 1.5em;
}

.phases {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.night-phase{
  margin-left: auto;
}
.custom-paragraph {
  width: 50%;
  margin: 10px auto;
  line-height: 1.5;
  text-align: center;
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
