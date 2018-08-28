/*jshint esversion: 6 */

import home from "./components/home.vue";
import signUp from "./components/signUp.vue";
import login from "./components/login.vue";

export default [
	{ path: '/', component: home},
    { path: '/signup', component: signUp },
    { path: '/login', component: login}
];