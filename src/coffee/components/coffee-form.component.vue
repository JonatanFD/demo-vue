<template>
  <div class="coffee-form-container">
    <h2>Add New Coffee</h2>
    <form @submit.prevent="handleSubmit" class="coffee-form">
      <div class="form-group">
        <label for="title">Title</label>
        <input 
          type="text" 
          id="title" 
          v-model="coffee.title" 
          required
          placeholder="Enter coffee name"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea 
          id="description" 
          v-model="coffee.description" 
          required
          placeholder="Describe the coffee"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="price">Price ($)</label>
        <input 
          type="number" 
          id="price" 
          v-model="coffee.price" 
          step="0.01" 
          min="0"
          required
          placeholder="Enter price"
        />
      </div>

      <div class="form-group">
        <label for="image">Image URL</label>
        <input 
          type="url" 
          id="image" 
          v-model="coffee.image" 
          placeholder="Enter image URL (or leave empty for default)"
        />
      </div>

      <div class="form-group">
        <label for="ingredients">Ingredients</label>
        <div class="ingredients-input">
          <input 
            type="text" 
            v-model="newIngredient" 
            placeholder="Add ingredient"
            @keydown.enter.prevent="addIngredient"
          />
          <button type="button" @click="addIngredient" class="add-btn">Add</button>
        </div>
        <div v-if="coffee.ingredients.length > 0" class="ingredients-list">
          <span 
            v-for="(ingredient, index) in coffee.ingredients" 
            :key="index" 
            class="ingredient-tag"
          >
            {{ ingredient }}
            <button type="button" @click="removeIngredient(index)" class="remove-btn">×</button>
          </span>
        </div>
      </div>

      <div class="form-group">
        <label>Drink Type</label>
        <div class="radio-group">
          <label>
            <input type="radio" v-model="coffee.drinkType" value="hot" required />
            Hot
          </label>
          <label>
            <input type="radio" v-model="coffee.drinkType" value="iced" required />
            Iced
          </label>
        </div>
      </div>

      <div class="form-actions">
        <button type="submit" class="submit-btn">Add Coffee</button>
        <button type="button" @click="resetForm" class="reset-btn">Reset</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { CoffeeService } from '../services/coffee.service';

const emit = defineEmits(['coffee-added']);

// Form data
const coffee = reactive({
  title: '',
  description: '',
  price: null,
  image: '',
  ingredients: [],
  drinkType: 'hot',
  totalSales: 0 // Starting with 0 sales for a new coffee
});

const newIngredient = ref('');

// Methods
const addIngredient = () => {
  if (newIngredient.value.trim()) {
    coffee.ingredients.push(newIngredient.value.trim());
    newIngredient.value = '';
  }
};

const removeIngredient = (index) => {
  coffee.ingredients.splice(index, 1);
};

const handleSubmit = async () => {
  try {
    // Create a new coffee service
    const coffeeService = new CoffeeService();
    
    // This would typically send the data to the API
    // For now, we'll just emit an event with the new coffee data
    emit('coffee-added', { 
      ...coffee, 
      id: `new-${Date.now()}`, // Generate a temporary ID
      price: parseFloat(coffee.price)
    });
    
    // Reset the form after successful submission
    resetForm();
    
  } catch (error) {
    console.error('Error adding coffee:', error);
  }
};

const resetForm = () => {
  // Reset all form fields
  coffee.title = '';
  coffee.description = '';
  coffee.price = null;
  coffee.image = '';
  coffee.ingredients = [];
  coffee.drinkType = 'hot';
  newIngredient.value = '';
};
</script>

<style scoped>
.coffee-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-top: 0;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
}

.coffee-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 600;
  color: #555;
}

input, textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.ingredients-input {
  display: flex;
  gap: 0.5rem;
}

.add-btn {
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.ingredients-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.ingredient-tag {
  background-color: #e9ecef;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.remove-btn {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.radio-group {
  display: flex;
  gap: 1.5rem;
}

.radio-group label {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: normal;
  cursor: pointer;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.submit-btn, .reset-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  flex: 1;
}

.submit-btn {
  background-color: #007bff;
  color: white;
}

.reset-btn {
  background-color: #6c757d;
  color: white;
}

.submit-btn:hover {
  background-color: #0069d9;
}

.reset-btn:hover {
  background-color: #5a6268;
}
</style>
