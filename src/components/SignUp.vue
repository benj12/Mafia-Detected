<template>
    <div>
        <h2 class="sign-up-header">Sign Up</h2>
        <div id="signup" class="signup-container">
            <p><strong>Email</strong></p>
            <input type="text" v-model="email" placeholder="Enter your email"/>
            <p><strong>Username</strong></p>
            <input type="text" v-model="username" placeholder="Enter your username"/>
            <p><strong>Password</strong></p>
            <input type="password" v-model="password" placeholder="Enter your password"/>
        </div>
        <p><button @click="register" class="submit-button">Submit</button></p>
        <p><button @click="signInWithGoogle" class="submit-button">Sign In With Google</button></p>
    </div>
</template>

<script setup>
import { ref } from "vue";
// import { useRouter } from 'vue-router';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Adjust this import based on your Supabase client setup

const email = ref("");
const password = ref("");
const username = ref("");
// const router = useRouter();
// const register = () => {
//     // createUserWithEmailAndPassword(getAuth(), email.value, password.value)
//     //     .then((data) => {
//     //         console.log("Successfully registered!");
//     //         router.push('/game');
//     //     })
//     //     .catch((error) => {
//     //         console.log(error.code);
//     //         alert(error.message);
//     //     });

// };

// const signInWithGoogle = () => {

// };

// export default {
//     data() {
//         return {
//             inputEmail: '',
//             inputUsername: '',
//             inputPassword: '',
//             emailLogin: '',
//             passwordLogin: '',
//         };
//     },
//     methods: {
//         async handleButtonClick() {
//             try {
//                 const response = await axios.post('/database/signup.php', {
//                     email: this.inputEmail,
//                     username: this.inputUsername,
//                     password: this.inputPassword,
//                 });
//                 if(response.data.success){
//                     alert("Signup successful!");
//                 }
//                 else{
//                     alert(response.data.message);
//                 }
//                 console.log(response.data);
//             } catch(error){
//                 console.error('Error:', error.message);
//             }
//         },

//         async login() {
            
//         },
//     },
// };
// </script>

<style>
@import "../css/signup.css";
</style>


