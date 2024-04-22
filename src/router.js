

import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "./login/login.component.vue";
import loginClientComponent from "./login/login-client.component.vue";
import loginArtesanoComponent from "./login/login-artesano.component.vue";

const router=createRouter({

    history: createWebHistory(),
    routes: [
        {path:'/', component:loginComponent},
        {path:'/login-client', component:loginClientComponent},
        {path:'/login-artesano', component:loginArtesanoComponent},


    ]


})

export default router;