<template>
    <div>
        <h2 class="sign-up-header">Sign Up</h2>
        <div id="signup" class="signup-container">
            <p><strong>Email</strong></p>
            <input type="text" v-model="inputEmail" placeholder="Enter your email"/>
            <p><strong>Username</strong></p>
            <input type="text" v-model="inputUsername" placeholder="Enter your username"/>
            <p><strong>Password</strong></p>
            <input type="password" v-model="inputPassword" placeholder="Enter your password"/>
        </div>
        <button @click="handleButtonClick">Submit</button>
    </div>
</template>

<script>
import axios from 'axios';
import { supabase } from '../main';  // Adjust this import based on your Supabase client setup

export default {
    data() {
        return {
            inputEmail: '',
            inputUsername: '',
            inputPassword: '',
            emailLogin: '',
            passwordLogin: '',
        };
    },
    methods: {
        async handleButtonClick() {
            try {
                const response = await axios.post('/database/signup.php', {
                    email: this.inputEmail,
                    username: this.inputUsername,
                    password: this.inputPassword,
                });
                if(response.data.success){
                    alert("Signup successful!");
                }
                else{
                    alert(response.data.message);
                }
                console.log(response.data);
            } catch(error){
                console.error('Error:', error.message);
            }
        },

        async login() {
            const { user, error } = await supabase.auth.signInWithPassword({
                email: this.emailLogin,   // Use emailLogin for the login email
                password: this.passwordLogin, // Use passwordLogin for the login password
            });

            if (error) {
                alert(error.message); // Handle error (e.g., show a message)
            } else {
                alert('Login successful!');
                console.log(user); // User information can be used here
            }
        },
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
h1 {
  margin-bottom: 10px;
  font-size: 1.5em;
}

.sign-up-header {
  text-align: center; /* Center align the text */
  margin-top: 20px; /* Adds space above the header */
  font-size: 2em; /* Adjusts the font size */
  font-weight: bold; /* Makes the header bold */
}
.signup-container {
  margin-top: 20px; /* Optional top margin for additional spacing from previous content */
}

.signup-container input {
  display: block; /* Ensures each input takes up a full line */
  margin-bottom: 20px; /* Adds spacing below each input */
  width: 100%; /* Optional: makes inputs full width */
  padding: 10px; /* Optional: adds padding for better appearance */
  font-size: 1em; /* Adjusts font size */
  border: 1px solid #ccc; /* Adds a border */
  border-radius: 4px; /* Rounds the corners */
}

</style>


