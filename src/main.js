import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Button, Card, ConfirmationService, DialogService, SelectButton, ToastService } from "primevue";
import I18n from "./i18n";
import { PrimeVue } from "@primevue/core";
import Aura from "@primeuix/themes/aura";

createApp(App)
    .use(I18n)
    .use(PrimeVue, {
        theme: {
            preset: Aura,
        },
    })
    .use(ConfirmationService)
    .use(DialogService)
    .use(ToastService)
    .component("pv-card", Card)
    .component("pv-select-button", SelectButton)
    .component("pv-button", Button)
    .mount("#app");
