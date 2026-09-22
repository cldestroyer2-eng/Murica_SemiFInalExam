<script setup>
 import { ref, computed } from 'vue'

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
</template>