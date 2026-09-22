<script setup>
import { ref } from 'vue'

import itemForm from './ItemForm.vue'
import itemList from './ItemList.vue'
import itemItem from './ItemItem.vue'

const message = ref('')

//Emits
function handleNotify(info) {
  // Update the message when the event is received
  message.value = `Name: ${info.itemName},
  Price: ${info.itemPrice},
  Description: ${info.itemDescription}`
}

function handleItem(info) {
  message.value = `Name: ${info.name}, Price: ${info.price}`
}

</script>

<template>
  <div>
    <h1>Main View</h1>
    <item-item @item="handleItem" />
    <item-list item-name="Example" :item-price="100" item-description="Demo" @select="handleNotify" />
    <p>{{ message }}</p>
  </div>
</template>