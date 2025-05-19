<script setup>
import { ref } from 'vue';
import CoffeeList from '../../coffee/components/coffee-list.component.vue';
import CoffeeForm from '../../coffee/components/coffee-form.component.vue';
import { CoffeeAssembler } from '../../coffee/services/coffee.assembler';
import { Coffee } from '../../coffee/model/coffee.entity';

const showForm = ref(false);
const coffeeListRef = ref(null);

const toggleForm = () => {
  showForm.value = !showForm.value;
};

const handleCoffeeAdded = (newCoffee) => {
  // Create a Coffee entity from the form data
  const coffeeEntity = new Coffee({
    ...newCoffee,
    // Ensure any data type conversions happen here
    price: parseFloat(newCoffee.price)
  });
  
  console.log('New coffee added:', coffeeEntity);
  
  // Refresh the coffee list to include the new coffee
  if (coffeeListRef.value) {
    coffeeListRef.value.fetchCoffees();
  }
  
  // Hide the form after successful submission
  showForm.value = false;
};
</script>

<template>
  <div class="home-container">
    <div class="page-header">
      <h1>Coffee Collection</h1>
      <button @click="toggleForm" class="toggle-form-btn">
        {{ showForm ? 'Hide Form' : 'Add New Coffee' }}
      </button>
    </div>
    
    <div v-if="showForm" class="form-section">
      <coffee-form @coffee-added="handleCoffeeAdded" />
    </div>
    
    <div class="coffee-list-section">
      <coffee-list ref="coffeeListRef" />
    </div>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

h1 {
  margin: 0;
  color: #333;
}

.toggle-form-btn {
  padding: 0.6rem 1.2rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

.toggle-form-btn:hover {
  background-color: #0069d9;
}

.form-section {
  margin-bottom: 2rem;
}

.coffee-list-section {
  margin-top: 1rem;
}
</style>