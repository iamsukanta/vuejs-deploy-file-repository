import Vue from "vue";
import Router from "vue-router";

//Pages
import Home from "../components/HomeComponent.vue";
import About from "../components/AboutComponent.vue";
import Contact from "../components/ContactComponent.vue";

Vue.use(Router);

export default new Router({
  base: process.env.NODE_ENV === 'production'?'/vuejs-deploy': '',
  mode: "history",
  routes: [
    
    {
      path: '/',
      redirect: '/home',
      name: 'HomeRoot',
      meta: {
        auth: false
      },
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'about',
          name: 'About',
          component: About
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact
        }
      ]
    }
  ]
});
