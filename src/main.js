import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';// Make sure to import your router setup
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://zvxquhctcwbdxczczhsl.supabase.co/';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2eHF1aGN0Y3diZHhjemN6aHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NTg5NDQsImV4cCI6MjA0NTAzNDk0NH0._uhQugMsDl5royrAqvl6DIow3CW1mn4LHfOx-qsIklc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Create and mount the Vue app
const app = createApp(App);
app.config.globalProperties.$supabase = supabase;
app.use(router); // Use the router instance
app.mount('#app');




