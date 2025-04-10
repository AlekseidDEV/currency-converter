import { createApp } from "vue";

import App from "./App.vue";
import AntD from 'ant-design-vue'

import router from "./router";

import "ant-design-vue/dist/reset.css"
import "./style.css";
import {createPinia} from "pinia";

const app = createApp(App);
const pinia = createPinia();

app
    .use(pinia)
    .use(router)
    .use(AntD)
    .mount("#app");

