<template>
  <div class="contact">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Contact Page</h1>
    <p>Mirpur, Dhaka, Bangladesh</p>
    <a href="https://bdtunnel.com" target="_blank">www.bdtunnel.com</a>
    <ul>
      <li><router-link to="/">Home Page</router-link></li>
      <li><router-link to="/about">About Page</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
