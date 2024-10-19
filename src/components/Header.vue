<template>
    <!-- <header class="header" :style="{ backgroundImage: 'url(' + require('@/assets/gameImage.png') + ')'}"> -->
    <header class="header">
        <h1>Welcome to Mafia Detected!</h1>
        <p>Become a mafia member, doctor, detective, or townsman and play the thrilling game now!</p>
        <button @click="handleButtonClick">Sign Up</button>
        <h2 class="role-header">Obtain Your Role</h2>
        <div class="roles-background">
            <span :class="['highlight', 'rounded']">Mafia</span>
            <span :class="['highlight', 'rounded']">Doctor</span>
            <span :class="['highlight', 'rounded']">Detective</span>
            <span :class="['highlight', 'rounded']">Townsman</span>
        </div>
        <p class="role-text">Use your role wisely to outsmart others in the game</p>
    </header>
</template>

<script>
export default {
    name: "HeaderMafia",
    methods: {
        handleButtonClick() {
            // Add your button click logic here
            alert("Sign Up clicked!");
        }
    },
};
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rochester&display=swap');

/* Your existing styles */
body {
    padding-top: 100px;
    margin: 0;
}
.header {
    background-color: #080b66;
    color: white;
    padding: 15px;
    text-align: center;
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

/* ... rest of your styles ... */
</style>

<style scoped>
body {
    padding-top: 100px;
    margin: 0;
}
.header {
    background-color: #080b66;
    /* background-size: cover;
    background-position: center; */

    /* Dark blue */
    color: white;
    padding: 15px;
    text-align: center;
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0; */
    /* height: 100px; */
    /* Center align text by default */
}

h1 {
    margin-bottom: 10px;
    font-size: 90px;
    /* Space below the main heading */
}

.role-header {
    text-align: center; /* Center align this specific heading */
    margin: 20px 0 10px 0; /* Adjust spacing: top, bottom */
    transform: translateX(-10%); /* Shift it slightly leftward */
    font-size: 20px;
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

<!-- <style scoped>
.header {
  background-color: #080b66; /* Dark blue */
  color: white;
  padding: 15px;
  text-align: center;
}
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin: 0 15px;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
</style> -->
