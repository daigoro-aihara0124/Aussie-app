import Vue from "vue";
import VueRouter from "vue-router";
import Home from './views/Home.vue';
import SchoolRegister from './views/SchoolRegister.vue';
import SchoolIndex from './views/SchoolIndex.vue';
import SchoolDetail from './views/SchoolDetail.vue';
import Reservation from './views/Reservation.vue';
import MyReserved from './views/MyReserved.vue';
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
      path: '/schoolRegister',
      component: SchoolRegister,
      beforeEnter(to, from, next) {
        if (store.getters.idTokens['access-token']) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/schoolIndex',
      component: SchoolIndex,
      beforeEnter(to, from, next) {
        if (store.getters.idTokens['access-token']) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/posts/:id',
      name: 'SchoolDetail',
      component: SchoolDetail,
      params: true,
      beforeEnter(to, from, next) {
        if (store.getters.idTokens['access-token']) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/reservation',
      component: Reservation,
      beforeEnter(to, from, next) {
        if (store.getters.idTokens['access-token']) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/myReserved',
      component: MyReserved,
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
        if (store.getters.idData['name'] && store.getters.idData['email'] !== 'guest@example.com') {
          next();
        } else {
          next('/');
        }
      }
    }
  ]
});
