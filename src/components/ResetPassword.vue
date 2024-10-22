<template>
  <div>
    <h2>Change your password</h2>
    <input type="password" v-model="password" placeholder="Enter your new password" />
    <button @click="changePassword">Change Password</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { supabase } from '../main';

export default {
  setup() {
    const password = ref('');
    const message = ref('');

    onBeforeMount(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get('access_token'); // Get the access token from URL

      if (accessToken) {
        // Set the session in Supabase
        supabase.auth.setAuth(accessToken);
      } else {
        message.value = 'No access token found!';
      }
    });

    const changePassword = async () => {
      const { error } = await supabase.auth.updateUser({
        password: password.value,
      });

      if (error) {
        message.value = error.message;
      } else {
        message.value = 'Password changed successfully!';
      }
    };

    return {
      password,
      message,
      changePassword,
    };
  },
};
</script>

<style>
h2 {
  margin: 0;
  font-size: 2em;
  font: Avenir;
}
</style>
