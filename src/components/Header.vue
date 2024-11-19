<template>
    <header class="header">
        <h1 id="header-title">Welcome to Mafia Detected!</h1>
        <p><em>Become a mafia member, doctor, detective, or townsman and play the thrilling game now!</em></p>
        <router-link to="/signup">
            <button class="spacing-between-buttons">Sign Up</button>
        </router-link>
        <router-link to="/login">
            <button class="spacing-between-buttons">Login</button>
        </router-link>
        

        <h2 class="role-header"><strong>Obtain Your Role</strong></h2>
        <div class="roles-background">
            <span :class="['highlight', 'rounded-card']">Mafia</span>
            <span :class="['highlight', 'rounded-card']">Doctor</span>
            <span :class="['highlight', 'rounded-card']">Detective</span>
            <span :class="['highlight', 'rounded-card']">Townsman</span>
        </div>
        <p class="role-text"><em>Use your role wisely to outsmart others in the game.</em></p> 
    </header>
</template>

<script>
export default {
    name: "HeaderMafia",
};
</script>

<style scoped>
@import '../css/header.css';

</style>