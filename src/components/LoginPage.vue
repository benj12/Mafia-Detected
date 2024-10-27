<template>
    <div>
        <h2 class="login-header">Login</h2>
        <div id="login" class="login-container">
            <p><strong>Email</strong></p>
            <input type="text" v-model="emailLogin" placeholder="Enter your email"/>
            <p><strong>Password</strong></p>
            <input type="password" v-model="passwordLogin" placeholder="Enter your password"/>
        </div>
        <button @click="login" class="login-button">Login</button>
        <router-link to="/forgotpass">
            <button class="forgot-password-button">Forgot password?</button>
        </router-link>
    </div>
</template>

<script>
import { supabase } from '../main';

export default {
  data() {
    return {
      emailLogin: '',
      passwordLogin: '',
    };
  },
  methods: {

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




h2 {
  margin:0;
  /* margin-top: 0; */
  /* margin-bottom: 20px; */
  /* Add spacing below the heading */
  font-size: 2em;
  font: Avenir;
  /* Adjust heading size if needed */
}


.login-button, .forgot-password-button {
  margin: 10px;
}
.login-button:hover, .forgot-password-button:hover {
    background-color: #b3b4b7;
    color: rgb(1, 0, 0);
}

.login-header {
  text-align: center; /* Center align the text */
  margin-top: 20px; /* Adds space above the header */
  font-size: 2em; /* Adjusts the font size */
  font-weight: bold; /* Makes the header bold */
}

.login-container {
  margin-top: 20px; /* Optional top margin for additional spacing from previous content */
}

.login-container input {
  display: block; /* Ensures each input takes up a full line */
  margin-bottom: 20px; /* Adds spacing below each input */
  width: 100%; /* Optional: makes inputs full width */
  padding: 10px; /* Optional: adds padding for better appearance */
  font-size: 1em; /* Adjusts font size */
  border: 1px solid #ccc; /* Adds a border */
  border-radius: 4px; /* Rounds the corners */
}
</style>


