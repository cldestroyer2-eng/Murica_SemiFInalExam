<script setup>
import { formatQuantity } from '../views/formatQuantity.js'

const props = defineProps({
  item: Object
})

const emit = defineEmits(['remove', 'status'])
</script>

<template>
  <div class="item-card">
    <h3>{{ props.item.name }}</h3>
    <p>Quantity: {{ formatQuantity(props.item.quantity) }}</p>
    <p>Category: {{ props.item.category }}</p>
    <p>Restock Date: {{ props.item.restockDate }}</p>
    <p>Status: {{ props.item.status }}</p>

    <button @click="emit('status', props.item.id)">Change Status</button>
    <button @click="emit('remove', props.item.id)">Delete</button>
  </div>
</template>
