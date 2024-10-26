<template>
    <main>
        <div class="header-container">
            <img :src="mafiaImage" alt="Mafia Detected game overview" class="game-image"/> 
            <div class="text-container">
                <h2>How to Play Mafia Detected</h2>  
                <p>Mafia Detected is a social deduction game where players must uncover the identities of the mafia members before they eliminate the townsmen. The game alternates between day and night phases, each with distinct actions.</p>
                <div class="phases">
                    <h1 class="day-phase">
                        <i class="fas fa-sun" style="color: #F9E076;"></i>
                        <span>Day Phase</span>
                    </h1>
                    <h1 class="night-phase">
                        <i class="fas fa-moon" style="color: #D3D3D3;"></i>
                        <span>Night Phase</span>
                    </h1>
                </div>
                <div class="phase-texts">
                    <p class="day-phase-text">During the day phase, all <br> players discuss among themselves who<br> they suspect are in the mafia. Then<br> they vote on who to kill.</p>
                    <p class="night-phase-text">During the night phase,<br> actions are taken by specific roles.<br> The mafia secretly chooses a player(s)<br> to eliminate, the doctor chooses<br> someone to save, and the detective<br> inquires about someone's character.</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
// import gameImage from '../assets/gameImage.png';
import mafiaImage from '../assets/8.png';

export default {
    data() {
        return {
            mafiaImage // This makes the image available in the template
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
  width: 500px;
  height: 375px;
  top: -100px;
  /* align-items: left; */
  margin-right: 10px; 
  margin-left: -300px;
}

.text-container {
  display: flex;
  flex-direction: column;
  font-family: 'Courier New';
  /* top: 100px; */
}


h2 {
  margin:0;
  /* margin-top: 0; 
  margin-bottom: 20px;
  margin-left: -200px;
  margin-right: 20px; */
  /* Add spacing below the heading */
  font-size: 2em;
  font: Avenir;
  /* Adjust heading size if needed */
}

.day-phase, .night-phase {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    margin: 0;
}

.day-phase i, .night-phase i {
    margin-right: 8px;
}

.phase-texts {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.day-phase-text, .night-phase-text {
    font-size: 0.9em;
    line-height: 1.4;
    width: 48%;
}

.night-phase-text {
    margin-left: auto;
    padding-right: 40px;
}

.phases {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
}

.phase-column {
    flex: 1;
}

.phase h1 {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    margin: 0 0 10px 0;
}

.phase i {
    margin-right: 8px;
}

.phase p {
    font-size: 0.9em;
    line-height: 1.4;
}

.custom-paragraph {
  width: auto;
  margin: 10px 0;
  text-align: left;
}

.night-phase {
    margin-left: 160px;
}
</style>
