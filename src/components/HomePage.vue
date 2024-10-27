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


<style scoped>
@import "../css/home.css";

</style>