import MainPage from '../pages/MainPage.vue'
import ConvertCurrencyPage from '../pages/ConvertCurrencyPage.vue'
import TheDefaultLayout from '../layout/TheDefaultLayout.vue'

import { createRouter, createWebHistory } from "vue-router"

const routes = [
   {
    path: '/',
    component: TheDefaultLayout,
    children: [
        {
            path: '',
            name: 'main-page',
            component: MainPage
        },
        {
            path: '/convert',
            name: 'convert-page',
            component: ConvertCurrencyPage
        }
    ]
   }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router