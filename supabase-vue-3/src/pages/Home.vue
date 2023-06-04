<template>
  <Card>
    <h1>Home</h1>
    <h2 v-if="allBookings.length !== 0">Current Bookings</h2>
    <h2 v-else>We have nothing scheduled right now</h2>
    <Booking
      v-for="(booking, index) in allBookings"
      :name="booking.name"
      :description="booking.description"
      :time="booking.time"
      :id="index"
    />
    <form class="booking-form">
      <label for="name">Name</label>
      <input v-model="name" id="name" type="text" />
      <label for="description">Description - Tell us what you want</label>
      <input v-model="description" id="description" type="text" />
      <label for="time">Time</label>
      <input v-model="time" id="time" type="text" />
      <label for="haircut_type"
        >Haircut Type - What haircut do you want, scroll down to view
        styles</label
      >
      <input v-model="haircut_type" id="haircut_type" type="text" />
      <button @click="createBooking" type="button">Create Booking</button>
    </form>
    <div class="haircut-gallery">
      <div v-for="(haircut, index) in allHaircuts" class="haircut" :id="index">
        <p>{{ haircut.haircut_name }}</p>
        <img :src="haircut.image_url" :alt="haircut.description" />
        <p>{{ haircut.description }}</p>
      </div>
    </div>
  </Card>
</template>

<script setup>
import Booking from "../components/Booking.vue";
import { ref } from "vue";
import { supabase } from "../supabase.js";
import Card from "../components/Card.vue";

const name = ref("");
const description = ref("");
const time = ref("");
const haircut_type = ref("");

const allBookings = ref([]);
const allHaircuts = ref([]);

async function createBooking() {
  const { error, data } = await supabase.from("bookings").insert({
    name: name.value,
    description: description.value,
    time: time.value,
    haircut_type: haircut_type.value,
  });
  if (error) {
    console.log(error);
  }
  console.log(data);
}

async function getAllHaircuts() {
  const { error, data } = await supabase.from("Haircuts").select("*");
  if (error) {
    console.log(error);
  }
  console.log(data);
  allHaircuts.value = data;
}

async function getAllBookings() {
  const { error, data } = await supabase.from("bookings").select("*");
  if (error) {
    console.log(error);
  }
  console.log(data);
  allBookings.value = data;
}

getAllHaircuts();
getAllBookings();
</script>

<style scoped>
.booking-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.haircut {
  display: flex;
  flex-direction: column;
}
</style>
