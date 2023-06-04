<template>
  <Card>
    <h1>Log In</h1>
    <form class="login-form">
      <label for="email">Email</label>
      <input v-model="email" id="email" type="text" />
      <label for="password">Password</label>
      <input v-model="password" id="password" type="password" />
    </form>
    <button class="login-button" @click="logIn">Log In</button>
  </Card>
</template>

<script setup>
import Card from "../components/Card.vue";
import { ref } from "vue";
import { supabase } from "../supabase.js";
import { userStore } from "../stores/user";
import router from "../router/index.js";

const user = userStore();
const email = ref("");
const password = ref("");

async function logIn() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error);
  }
  console.log(data);
  user.getUser();
  router.push("/home");
}
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
