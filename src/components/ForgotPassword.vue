<template>
    <div>
        <h2 id = "forgot-password-header">Forgot Password</h2>
        <input type="text" v-model="email" placeholder="Enter your email" />
        <button @click="sendResetLink">Send Reset Link</button>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
// import { supabase } from '../main'; // Adjust the path as necessary

export default {
    data() {
        return {
            email: '',
            message: '',
        };
    },
  methods: {
    // async sendResetLink() {
    //     const { error } = await supabase.auth.resetPasswordForEmail(this.email, {
    //         redirectTo: 'http://localhost:8080/reset-password', // Change to your actual URL
    //     });

    //     if (error) {
    //         this.message = error.message; // Show error message
    //     } else {
    //         this.message = 'Password reset link sent! Check your email.';
    //     }
    // },

  },
};
</script>

<style>
@import "../css/forgotPassword.css";
</style>
