import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Button, Card, Checkbox, Column, ConfirmationService, ConfirmDialog, DataTable, Dialog, DialogService, Drawer, FileUpload, FloatLabel, IconField, InputIcon, InputNumber, InputText, Menu, Rating, Row, Select, SelectButton, Tag, Textarea, Toast, ToastService, Toolbar } from "primevue";
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
    .component('pv-column', Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-select', Select)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-label', FloatLabel)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-input-text', InputText)
    .component('pv-input-number', InputNumber)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-drawer', Drawer)
    .component('pv-tag', Tag)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast)
    .mount("#app");
