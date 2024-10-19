<template>
  <div id="app">
    <Header />
    <main>
      <div class="header-container">
        <img :src="gameImage" alt="Mafia Detected game overview" class="game-image"/> 
        <div class="text-container">
          <h2>How to Play Mafia Detected</h2>  
          <p>Mafia Detected is a social deduction game where players must uncover the identities of the mafia members before they eliminate the townsmen. The game alternates betwen day and night phases, each with distinct actions.</p>
          <h1 class="day-phase">
            <i class="fas fa-sun" style="color: #F9E076;"></i>Day Phase
          </h1>
          <p>During the day phase, all players discuss among themselves who they suspect are in the mafia. Then they vote on who to kill.</p>
          <h1>
            <i class="fas fa-moon" style="color: #D3D3D3;"></i>Night Phase
          </h1>
          <p>During the night phase, actions are taken by specific roles. The mafia secretly chooses a player(s) to eliminate, the doctor chooses someone to save, and the detective inquires about someone's character.</p>
        </div>
      </div>
      <div class="input-container">
        <input type="text" v-model="inputUsername" placeholder="Enter your username" />
        <input type="password" v-model="inputPassword" placeholder="Enter your password" />
      </div>
      
      <!-- <img :src="gameImage" alt="Mafia Detected game overview" />
      <h2>How To Play Mafia Detected</h2> -->
      <!-- <p>Mafia Detected is a social deduction game where players must uncover the identities of the mafia members before they eliminate the townsmen. The game alternates betwen day and night phases, each with distinct actions.</p>
      <h1>Day Phase</h1>
      <p>During the day phase, all players discuss among themselves who he suspects is in the mafia. Then they vote on who to kill.</p>
      <h1>Night Phase</h1>
      <p>During the night phase, actions are taken by specific roles. The mafia secretly chooses a player(s) to eliminate, the doctor chooses someone to save, and the detective inquires about someone's character.</p> -->
      <!-- <h1 class="phases"> -->
        <!-- <span class="day-phase">Day Phase</span>
        <p>During the day phase, all players discuss among themselves who he suspects is in the mafia. Then they vote on who to kill.</p>
        <span class="night-phase">Night Phase</span>
        <p>During the night phase, actions are taken by specific roles. The mafia secretly chooses a player(s) to eliminate, the doctor chooses someone to save, and the detective inquires about someone's character. </p> -->
      <!-- </h1> -->

      <!-- <p class="custom-paragraph">During the day phase, all players discuss among themselves who he suspects is the mafia. Then they vote on who to kill.</p> -->
      <!-- Other content goes here -->
    </main>
  </div>
</template>





<script>
import Header from './components/Header.vue';
import gameImage from './assets/gameImage.png';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      inputText: '',
      gameImage // This makes the image available in the template
    };
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

.header-container {
  display: flex;
  /* align-items: flex-start; */
}

.game-image {
  width: 300px;
  height: auto;
  /* align-items: left; */
  margin-right: 10px;
  margin-left: -110px;
}

.text-container {
  display: flex;
  flex-direction: column;
}

h2 {
  margin:0;
  /* margin-top: 0; */
  /* margin-bottom: 20px; */
  /* Add spacing below the heading */
  font-size: 2em;
  font: Avenir;
  /* Adjust heading size if needed */
}

.day-phase {
  display: flex;
  align-items: center;
}

.day-phase i {
  margin-right: 8px;
  font-size: 1.5em;
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

.input-container {
  margin-top: 20px; /* Optional top margin for additional spacing from previous content */
}

.input-container input {
  display: block; /* Ensures each input takes up a full line */
  margin-bottom: 20px; /* Adds spacing below each input */
  width: 100%; /* Optional: makes inputs full width */
  padding: 10px; /* Optional: adds padding for better appearance */
  font-size: 1em; /* Adjusts font size */
  border: 1px solid #ccc; /* Adds a border */
  border-radius: 4px; /* Rounds the corners */
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
