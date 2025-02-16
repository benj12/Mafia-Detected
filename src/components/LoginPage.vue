<template>
    <div>
        <h2 id = "login-header" class="login-header">Login</h2>
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

export default {
  data() {
    return {
      emailLogin: '',
      passwordLogin: '',
    };
  },
  methods: {

    async login() {
      // const { user, error } = await supabase.auth.signInWithPassword({
      //   email: this.emailLogin,   // Use emailLogin for the login email
      //   password: this.passwordLogin, // Use passwordLogin for the login password
      // });

      // if (error) {
      //   alert(error.message); // Handle error (e.g., show a message)
      // } else {
      //   alert('Login successful!');
      //   console.log(user); // User information can be used here
      // }
    },
  },
};
</script>

<style>
@import "../css/login.css";
</style>


