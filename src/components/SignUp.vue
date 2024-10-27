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
        <button @click="handleButtonClick" class="submit-button">Submit</button>
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
@import "../css/signup.css";
</style>


