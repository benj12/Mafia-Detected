import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';// Make sure to import your router setup
// import { createClient } from '@supabase/supabase-js';

// // Supabase configuration
// const supabaseUrl = 'https://zvxquhctcwbdxczczhsl.supabase.co/';
// const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2eHF1aGN0Y3diZHhjemN6aHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NTg5NDQsImV4cCI6MjA0NTAzNDk0NH0._uhQugMsDl5royrAqvl6DIow3CW1mn4LHfOx-qsIklc';

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmQ2bjBYk0k3mYZ_Vxv1ADDzqwuFLmZLM",
  authDomain: "mafia-detected.firebaseapp.com",
  projectId: "mafia-detected",
  storageBucket: "mafia-detected.firebasestorage.app",
  messagingSenderId: "1035656387776",
  appId: "1:1035656387776:web:876369365d55a7d4c86125"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Create and mount the Vue app
const app = createApp(App);
// app.config.globalProperties.$supabase = supabase;
app.use(router); // Use the router instance
app.mount('#app');




