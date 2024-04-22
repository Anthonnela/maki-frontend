

import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "./login/login.component.vue";

import loginArtesanoComponent from "./login/login-artesano.component.vue";
import loginCustomerComponent from "./login/login-customer.component.vue";
;

const router=createRouter({

    history: createWebHistory(),
    routes: [
        {path:'/', component:loginComponent},
        {path:'/login-customer', component:loginCustomerComponent},
        {path:'/login-artesano', component:loginArtesanoComponent},


    ]


})

export default router;