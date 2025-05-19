<script setup>

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    originalTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    }
    ,
    price: {
        type: Number,
        required: true
    }
    ,
    totalSales: {
        type: Number,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    drinkType: {
        type: String,
        required: true
    }
});

const buyLink = `https://lovers.coffee/us/products?q=${props.title.split(" ").join("+")}`;

</script>

<template>
    <pv-card class="card">
        <template #header>
            <img :src="image" :alt="`${props.title} coffee`" />
        </template>

        <template #title>{{ props.title }}</template>

        <template #subtitle>
            <p>{{ $t("coffeeCard.type") }}: {{ props.drinkType }}</p>
        </template>

        <template #content class="cardInfo">
            <p>{{ props.description }}</p>

            <div>
                <h4>{{ $t("coffeeCard.ingredients") }}:</h4>


                <ul class="ingredients" v-if="props.ingredients.length > 0" aria-label="ingredients">
                    <li v-for="ingredient in props.ingredients">
                        {{ ingredient }}
                    </li>
                </ul>

                <p v-else>{{ $t("coffeeCard.noIngredients") }}</p>

            </div>

            <div>
                <h4>{{ $t("coffeeCard.totalSales") }}: {{ props.totalSales }}</h4>
                <h4>{{ $t("coffeeCard.price") }}: S/ {{ props.price }}</h4>
            </div>
        </template>
        <template #footer>
            <a :href="buyLink" target="_blank" rel="noopener noreferrer">
                <pv-button type="primary">{{ $t("coffeeCard.buyLink") }}</pv-button>
            </a>
        </template>
    </pv-card>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    overflow: hidden;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
}

.ingredients {
    list-style: "-";
    padding-left: 0.8rem;
}

</style>