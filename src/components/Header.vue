<template>
  <header class="header">
    <h1>Welcome to Mafia Detected!</h1>
    <p>Become a mafia member, doctor, detective, or townsman and play the thrilling game now!</p>
    <button @click="handleButtonClick">Sign Up</button>
    <!-- <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav> -->
  </header>
</template>

<script>
export default {
  name: "HeaderMafia"
};
</script>

<style scoped>
.header {
  background-color: #080b66; /* Green */
  color: white;
  padding: 15px;
  text-align: center;
}
nav ul {
  list-style-type: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin: 0 15px;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
