<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const defaultLanguage = "EN";
const currentLanguage = ref("EN");
const availableLanguages = ref(["EN", "ES"]);

const { locale } = useI18n();

const changeLanguage = (newLanguage) => {
    if (availableLanguages.value.includes(newLanguage)) {
        locale.value = newLanguage.toLowerCase();
    }
};
</script>

<template>
    <header>
        <div class="left-header">
            <img src="../../assets/vue.svg" alt="Vue logo" />
            <h1>{{ $t("header.title") }}</h1>
        </div>

        <div class="right-header">
            <pv-select-button
                v-model="currentLanguage"
                :default-value="defaultLanguage"
                :options="availableLanguages"
                @change="(event) => changeLanguage(event.value)"
            />
        </div>
    </header>
</template>

<style scoped>
header {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-header {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 32px;
            height: 32px;
        }

        h1 {
            font-size: 1.5rem;
        }
    }
}
</style>
