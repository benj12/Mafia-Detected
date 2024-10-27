<template>
    <header class="header">
        <h1>Welcome to Mafia Detected!</h1>
        <p><em>Become a mafia member, doctor, detective, or townsman and play the thrilling game now!</em></p>
        <router-link to="/signup">
            <button class="spacing-between-buttons">Sign Up</button>
        </router-link>
        <router-link to="/login">
            <button class="spacing-between-buttons">Login</button>
        </router-link>
        

        <h2 class="role-header"><strong>Obtain Your Role</strong></h2>
        <div class="roles-background">
            <span :class="['highlight', 'rounded']">Mafia</span>
            <span :class="['highlight', 'rounded']">Doctor</span>
            <span :class="['highlight', 'rounded']">Detective</span>
            <span :class="['highlight', 'rounded']">Townsman</span>
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
@import url('https://fonts.googleapis.com/css2?family=Rochester&display=swap');


.spacing-between-buttons{
    margin: 10px;
}
.spacing-between-buttons:hover{
    background-color: #abadad;
    color: rgb(19, 1, 1);
}
/* Your existing styles */
body {
    /* padding-top: 100px; */
    padding: 0;
    margin: 0;
}
.header {
    background-color: #080b66;
    color: white;
    padding: 15px;
    text-align: center;
    box-sizing: border-box;
    width: 100vw;
    margin: 0 calc(-50vw + 50%);
    padding: 15 px calc(-50vw + 50%);


}


h1 {
    margin-bottom: 10px;
    font-size: 90px;
    font-family: 'Rochester', cursive; /* Apply the Rochester font */
}

/* Other styles remain unchanged */
.role-header {
    text-align: center;
    margin: 20px 0 10px 0;
    transform: translateX(-10%);
    font-size: 20px;
    font-family: 'Rochester', cursive; /* Apply the Rochester font */
}

.role-text {
    text-align: center;
    margin: 20px 0 10px 0;
    transform: translateX(-4.75%);
}


.roles-background {
    display: flex;
    /* Use flexbox for horizontal alignment */
    justify-content: center;
    /* align-items: center; */
    /* Center align the role text */
    /* background-color: #f0f0f0; */
    /* Background color for the roles */
    padding: 10px;
    /* Padding around the text */
    border-radius: 5px;
    /* Rounded corners */
    margin: 10px 0;
    /* Space above and below */
}


.roles-background span {
    margin: 0 15px;
    /* Space between role texts, adjust this to 30px for ~5 spaces */
    font-size: 16px;
    /* Font size for role text */
    color: #333;
    /* Text color */

}

.role {
    padding: 20px;
    /* Padding inside each role */
    border-radius: 50px;
    /* Rounded corners */
    color: #fff;
    /* Text color */
    margin: 0 15px;
    /* Space between role texts */
    font-size: 20px;
    flex: 1;
    display: inline-block,
    /* Font size for role text */
}
/* ... rest of your styles ... */

.mafia {
    background-color: #686868;
    /* Red */
}

.doctor {
    background-color: #ffffff;
    /* Green */
}

.detective {
    background-color: #ffffff;
    /* Blue */
}

.townsman {
    background-color: #ffffff;
    /* Orange */
}

.highlight {
    background-color: gray;
    /* adjust the color as needed */
    padding: 5px;
    /* adjust the padding as needed */
    font-size: 16px;
}

.rounded-card {
    border-radius:50px;
}

</style>
