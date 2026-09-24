import { ref, watch } from 'vue'

export function useInventory() {
  const savedItems = localStorage.getItem('items')
  const items = ref(savedItems ? JSON.parse(savedItems) : [])

  function addItem(item) {
    items.value.push(item)
  }

  function removeItem(id) {
    items.value = items.value.filter(item => item.id !== id)
  }

  function changeStatus(id) {
    const item = items.value.find(item => item.id === id)
    if (item) {
      item.status = item.status === 'Available' ? 'Out of Stock' : 'Available'
    }
  }

  watch(items, (newItems) => {
    localStorage.setItem('items', JSON.stringify(newItems))
  }, { deep: true })

  return {
    items,
    addItem,
    removeItem,
    changeStatus
  }
}
