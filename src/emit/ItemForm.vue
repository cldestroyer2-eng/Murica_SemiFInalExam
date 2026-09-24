<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['add-item'])

const form = reactive({
  name: '',
  quantity: '',
  category: '',
  restockDate: ''
})

const error = ref('')

function submitForm() {
  if (!form.name || !form.quantity || !form.category || !form.restockDate) {
    
    error.value = 'Please fill in all fields.'
    return
  }

  emit('add-item', {
    id: Date.now(),
    name: form.name,
    quantity: Number(form.quantity),
    category: form.category,
    restockDate: form.restockDate,
    status: 'Available'
  })

  form.name = ''
  form.quantity = ''
  form.category = ''
  form.restockDate = ''
  error.value = ''
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <h2>Add Item</h2>

    <label>Item Name</label>
    <input v-model="form.name" type="text" placeholder="Enter item name" />

    <label>Quantity</label>
    <input v-model="form.quantity" type="number" min="1" placeholder="Enter quantity" />

    <label>Category</label>
    <select v-model="form.category">
      <option value="">Select category</option>
      <option>Writing Materials</option>
      <option>Paper</option>
      <option>Folders</option>
      <option>Other</option>
    </select>

    <label>Restock Date</label>
    <input v-model="form.restockDate" type="date" />

    <p v-if="error" class="error">{{ error }}</p>
    
    <button type="submit">Add Item</button>
  </form>
</template>

<style>

  .error {
    color: red;
  }
  
</style>