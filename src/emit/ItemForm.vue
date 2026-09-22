<script setup>
import { defineProps } from 'vue'
defineProps({
  itemName: String,
  itemPrice: Number,
  itemDescription: String
})

</script>

<template>
  <div>
    <p>Name: {{ itemName }}</p>
    <p>Price: {{ itemPrice }}</p>
    <p>Description: {{ itemDescription }}</p>
  </div>
</template>