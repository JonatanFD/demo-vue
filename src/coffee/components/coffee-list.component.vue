<script setup>
import { CoffeeAssembler } from "../services/coffee.assembler";
import { CoffeeService } from "../services/coffee.service";
import { onMounted, ref, watch, defineExpose } from "vue";
import AppCoffeeCard from "./coffee-card.component.vue";

const coffees = ref([]);

// I have created this function to store all the logic about fetching the coffees to resuse when its needed
const fetchCoffees = async () => {
    const coffeeService = new CoffeeService();

    try {
        const hotResponse = await coffeeService.getCoffees("hot");
        const hotCoffees = CoffeeAssembler.toEntitiesFromResponse(
            hotResponse.data.map(r => ({ ...r, drinkType: "hot" }))
        );

        const icedResponse = await coffeeService.getCoffees("iced");
        const icedCoffees = CoffeeAssembler.toEntitiesFromResponse(
            icedResponse.data.map(r => ({ ...r, drinkType: "iced" }))
        );

        const combinedCoffees = [...hotCoffees, ...icedCoffees];
        console.log("Combined Coffees:", combinedCoffees);
        coffees.value = combinedCoffees;
    } catch (error) {
        console.error("Error fetching coffees:", error);
    }
};

onMounted(() => {
    fetchCoffees();
});

// Expose the fetchCoffees method to parent components
defineExpose({
    fetchCoffees
});
</script>

<template>
    <ul>
        <li v-for="coffee in coffees">
            <app-coffee-card :id="coffee.id" :title="coffee.title" :original-title="coffee.title"
                :description="coffee.description" :image="coffee.image" :pages="coffee.totalSales" :price="coffee.price"
                :total-sales="coffee.totalSales" :ingredients="coffee.ingredients" :drink-type="coffee.drinkType" />
        </li>
    </ul>
</template>


<style scoped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}
</style>