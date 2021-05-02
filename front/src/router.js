import Vue from "vue";
import VueRouter from "vue-router";
import Home from './views/Home.vue';
import Comments from './views/Comments.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Mypage from './views/Mypage.vue';
import UsersEdit from './views/UsersEdit.vue';
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
          next('/login');
        }
      }
    },
    {
      path: '/register',
      component: Register,
      beforeEnter(to, from, next) {
        if (store.getters.idTokens['access-token']) {
          next();
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
          next();
        } else {
          next();
        }
      }
    },
    {
      path: '/mypage',
      component: Mypage,
      beforeEnter(to, from, next) {
        if (store.getters.idData['name']) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/usersedit',
      component: UsersEdit,
      beforeEnter(to, from, next) {
        if (store.getters.idData['name']) {
          next();
        } else {
          next('/login');
        }
      }
    }
  ]
});
