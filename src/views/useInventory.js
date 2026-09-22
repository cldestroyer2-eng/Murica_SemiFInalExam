import { ref } from 'vue'

 export function useItem() {
 	const items = ref([])

 	function addItem(item) {
     	items.value.push(item)
 	}

 	function removeItem(id) {
     	items.value = items.value.filter(
         	record => record.id !== id
     	)
 	}

 	return {
     	items,
     	addItem,
     	removeItem
 	}
 }