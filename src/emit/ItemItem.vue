    <script setup>
// Declare that this component can emit an event called "notify"
const emit = defineEmits(['item'])

function item() {
  // Trigger the event, and send a message along with it
  emit('item', {
    name: 'suka',
    price: 30
  })
  
}
</script>

<template>
  <button @click="item">Click Me</button>
</template>