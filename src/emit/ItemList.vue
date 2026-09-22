<script setup>
const props = defineProps({
  itemName: String,
  itemPrice: Number,
  itemDescription: String
})

const emit = defineEmits(['select'])

function handleSelect() {
  emit('select', {
    itemName: props.itemName,
    itemPrice: props.itemPrice,
    itemDescription: props.itemDescription
  })
}

</script>

<template>
  <div>
    <p>Name: {{ props.itemName }}</p>
    <p>Price: {{ props.itemPrice }}</p>
    <p>Description: {{ props.itemDescription }}</p>
    <button @click="handleSelect">Select</button>
  </div>
</template>