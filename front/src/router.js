import Vue from "vue";
import VueRouter from "vue-router";
import Home from './views/Home.vue';
import Comments from './views/Comments.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import store from './store';

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes:[
    {
      path: '/',
      component: Home,
    },
    {
      path: '/comments',
      component: Comments,
      beforeEnter(to, from, next) {
        if (store.getters.idTokens['access-token']) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: '/register',
      component: Register,
      beforeEnter(to, from, next) {
        if (store.getters.idTokens['access-token']) {
          next('/comments');
        } else {
          next();
        }
      }
    },
    {
      path: '/login',
      component: Login,
      beforeEnter(to, from, next) {
        if (store.getters.idTokens['access-token']) {
          next('/comments');
        } else {
          next();
        }
      }
    }
  ]
});
