<template>
  <div id="app">
    <Header />
    <main>
    </main>
    <RouterView/>
  </div>
</template>





<script>
import Header from './components/Header.vue';
import gameImage from './assets/gameImage.png';
import { supabase } from './main';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      inputEmail: '',
      inputUsername: '',
      inputPassword: '',
      emailLogin: '',  // Add this for login email
      passwordLogin: '', // Add this for login password
      gameImage // This makes the image available in the template
    };
  },
  methods: {
  async handleButtonClick() {
    const { user, error } = await supabase.auth.signUp({
      email: this.inputEmail,
      password: this.inputPassword,
    });

    if (error) {
      alert(error.message); // Display the error message
    } else {
      if (user) {
        // Create a profile entry in the profiles table
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([{ user_id: user.id, username: this.inputUsername }]);

        if (profileError) {
          alert(profileError.message);
        } else {
          alert('Sign up successful and profile created!');
        }
      } else {
        alert('User information not available. Please try again.'); // Fallback error handling
      }
    }
  },
  // ... rest of your methods
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
  async forgotPassword(){

  }
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

.sign-up-header {
  text-align: center; /* Center align the text */
  margin-top: 20px; /* Adds space above the header */
  font-size: 2em; /* Adjusts the font size */
  font-weight: bold; /* Makes the header bold */
}

.login-header {
  text-align: center; /* Center align the text */
  margin-top: 20px; /* Adds space above the header */
  font-size: 2em; /* Adjusts the font size */
  font-weight: bold; /* Makes the header bold */
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