import { createWebHistory, createRouter } from "vue-router";
import Main from '../pages/Main'
import Yellow from "../pages/Yellow";
import Red from "../pages/Red";
import Green from "../pages/Green";

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
    },
            // я не знаю как лучше сделать. Разными компонентами или одним компонентом и параметром передать цвет. Если разными, то много повтора html
    {
        path: '/red',
        name: 'red',
        component: Red,
    },
    {
        path: '/yellow',
        name: 'yellow',
        component: Yellow,
    },
    {
        path: '/green',
        name: 'green',
        component: Green,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router




