<template>
    <!-- <Header /> -->
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
    </main>
</template>

<script>
import gameImage from '../assets/gameImage.png';

export default {
    data() {
        return {
            gameImage // This makes the image available in the template
        };
    },
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
  font-family: 'Courier New'
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
</style>