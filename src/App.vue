<template>
  <div id="nav" :style="{padding : '15px'}">
    <router-link to="/">Home</router-link>
    <router-link to="/whether">Whether</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/services">Services</router-link>
    <router-link to="/contact">Contact</router-link>
    <div :style="{marginTop:'15px'}">
      <router-view />
    </div>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: white;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  background-color: #5597b4;
}

#nav a.router-link-exact-active {
  color: white;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  background-color: #e35885;
}

</style>
