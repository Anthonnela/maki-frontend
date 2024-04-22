

import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "./login/login.component.vue";

const router=createRouter({

    history: createWebHistory(),
    routes: [
        {path:'/', component:loginComponent},


    ]


})

export default router;