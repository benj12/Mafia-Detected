<template>
    <header class="header">
        <h1>Welcome to Mafia Detected!</h1>
        <p>Become a mafia member, doctor, detective, or townsman and play the thrilling game now!</p>
        <button @click="scrollToSignup">Sign Up</button>
        <button @click="scrollToLogin">Login</button>
        <h2 class="role-header">Obtain Your Role</h2>
        <div class="roles-background">
            <span :class="['highlight', 'rounded']">Mafia</span>
            <span :class="['highlight', 'rounded']">Doctor</span>
            <span :class="['highlight', 'rounded']">Detective</span>
            <span :class="['highlight', 'rounded']">Townsman</span>
        </div>
        <p class="role-text">Use your role wisely to outsmart others in the game</p>
    </header>
  <div>
    <h2>Forgot Password</h2>
    <input type="text" v-model="email" placeholder="Enter your email" />
    <button @click="sendResetLink">Send Reset Link</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { supabase } from './main'; // Adjust the path as necessary

export default {
  data() {
    return {
      email: '',
      message: '',
    };
  },
  methods: {
    async sendResetLink() {
      const { error } = await supabase.auth.resetPasswordForEmail(this.email);

      if (error) {
        this.message = error.message; // Show error message
      } else {
        this.message = 'Password reset link sent! Check your email.';
      }
    },
  },
};
</script>

<style>
/* Add any styles you want here */
</style>
