<script setup>
import ItemItem from './ItemItem.vue'

defineProps({
  items: Array
})

defineEmits(['remove', 'status'])
</script>

<template>
  <div>
    <h2>Inventory List</h2>

    <p v-if="items.length === 0">No items yet.</p>

    <ItemItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @remove="$emit('remove', $event)"
      @status="$emit('status', $event)"
    />
  </div>
</template>
