<script setup>
 import { ref, watch } from 'vue'


   const item = ref('')
    const quantity = ref('')
    const category = ref('')
    const restockDate = ref('')

    //getItem() -> that will retrieve our data from local storage
    item.value = localStorage.getItem('item') || ''
    quantity.value = localStorage.getItem('quantity') || ''
    category.value = localStorage.getItem('category') || ''
    restockDate.value = localStorage.getItem('restockDate') || ''

    //watch() -> monitor changes
    watch(item, (newValue) => {
        localStorage.setItem('item', newValue)
    })

     watch(quantity, (newValue) => {
        localStorage.setItem('quantity', newValue)
    })

     watch(category, (newValue) => {
        localStorage.setItem('category', newValue)
    })

    watch(restockDate, (newValue) => {
        localStorage.setItem('restockDate', newValue)
    })

    //Clear saved data
    function clearForm() {
        item.value = ''
        quantity.value = ''
        category.value = ''
        restockDate.value = ''

        localStorage.removeItem('item')
        localStorage.removeItem('quantity')
        localStorage.removeItem('category')
        localStorage.removeItem('restockDate')
      
        
    }

function handleSubmit() {
    console.log('Form submitted');
}



</script>

<template>
    <div>
        <form @submit.prevent="handleSubmit">

            <label>Item Name</label>
            <input type="text" placeholder="Enter item name">   


            <label>Item Quantity</label>
            <input type="number" placeholder="Enter item quantity">

            <label>Item Category</label>
            <input type="text" placeholder="Enter item category">

            <label>Restock Date</label>
            <input type="date" placeholder="Enter restock date">
      
             <button 
                        type="submit"
                        
                        >
                        Add item
                    </button>
        </form>
    </div>


    <div>
        <h2>Inventory List</h2>
        Item: {{ item }} <br>
        Quantity: {{ quantity }} <br>
        Category: {{ category }} <br>
        Restock Date: {{ restockDate }} <br>
        <button @click="clearForm">Clear Form</button>
    </div>
</template>