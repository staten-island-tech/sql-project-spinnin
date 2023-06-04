<template>
  <Card>
    <h1>Sign Up</h1>
    <form class="signup-form">
      <label for="email">Email</label>
      <input v-model="email" id="email" type="text" />
      <label for="password">Password</label>
      <input v-model="password" id="password" type="password" />
    </form>
    <button class="signup-button" @click="signUp">Sign Up</button>
  </Card>
</template>

<script setup>
import Card from "../components/Card.vue";
import { supabase } from "../supabase";
import { ref } from "vue";

const email = ref("");
const password = ref("");

async function signUp() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error);
  }
  console.log(data);
}
</script>

<style scoped>
.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
