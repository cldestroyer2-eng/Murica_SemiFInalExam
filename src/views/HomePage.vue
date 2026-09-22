<script setup>
 import { ref, computed } from 'vue'
import { useInventory } from '../views/useInventory.js'
     
export default {
    mixins: [useInventory]
};
    const messages = ref('This is the homepage')

    function changesMessage() {
      messages.value = 'This is the Home Page'
    }

    function clearMessages() {
      messages.value = ''
    }
</script>

<template>

    <H1>This is the Home Page</H1>

    
    <h4>This is the Composition API</h4>
    <p>Message: {{ messages }}</p>
    <button @click="changesMessage">Change Message</button>
    <button @click="clearMessages">Clear Message</button>

    <h1>This is the MIXIN</h1>
     <h3>Item: {{ item }}</h3>
  

    <button @click="addItem">Add Item</button>
    <button @click="removeItem">Remove Item</button>

</template>