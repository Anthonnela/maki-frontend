import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";

// App Theme
import 'primevue/resources/themes/aura-dark-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
// Add PrimeFlex
import 'primeflex/primeflex.css';
// Add PrimeIcons
import 'primeicons/primeicons.css';
// Add Components
import Card from "primevue/card";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Steps from "primevue/steps";
import InputText from "primevue/inputtext";
import Divider from "primevue/divider";
import Calendar from "primevue/calendar";
import Rating from "primevue/rating";
import Inputtext from "primevue/inputtext";
import Inputnumber from "primevue/inputnumber";
import InputMask from "primevue/inputmask";
import Message from "primevue/message";
import ButtonGroup from "primevue/buttongroup";
import {createI18n} from "vue-i18n";

const i18n =  createI18n({
    locale: 'en',
    massages:{
        en:{
            Hello:'hello'
        }
    }
})

createApp(App)
    .use(PrimeVue, { ripple: true })
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-data-table', DataTable)
    .component('pv-column', Column)
    .component('pv-steps', Steps)
    .component('pv-input-text', InputText)
    .component('pv-divider', Divider)
    .component('pv-calendar', Calendar)
    .component('pv-rating', Rating)
    .component('pv-inputtext', Inputtext)
    .component('pv-inputnumber', Inputnumber)
    .component('pv-inputmask', InputMask)
    .component('pv-message', Message)
    .component('pv-buttonGroup', ButtonGroup)


    .mount('#app')
