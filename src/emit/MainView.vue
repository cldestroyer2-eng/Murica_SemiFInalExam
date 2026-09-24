<script setup>
import ItemForm from './ItemForm.vue'
import ItemList from './ItemList.vue'
import { useInventory } from '../views/useInventory.js'

const { items, addItem, removeItem, changeStatus } = useInventory()
</script>

<template>
  <div>
    <h1>Inventory</h1>

    <ItemForm @add-item="addItem" />

    <ItemList
      :items="items"
      @remove="removeItem"
      @status="changeStatus"
    />
  </div>
</template>
