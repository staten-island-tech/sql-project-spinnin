<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/login">Go to LogIn</router-link>
      <router-link to="/signup">Go to SignUp</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
