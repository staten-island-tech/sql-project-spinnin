<template>
  <div class="booking">
    <h3>{{ haircut_name }}</h3>
    <p>{{ description }}</p>
    <p>{{ time }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  name: String,
  description: String,
  time: String,
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
