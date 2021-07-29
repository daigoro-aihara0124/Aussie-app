import Vue from "vue";
import VueRouter from "vue-router";
import store from './store';
import Home from './components/Home.vue';
//user
import Login from './components/Users/Login.vue';
import Register from './components/Users/Register.vue';
import Mypage from './components/Users/Mypage.vue';
import UsersEdit from './components/Users/UsersEdit.vue';
//post
import SchoolRegister from './components/Posts/SchoolRegister.vue';
import SchoolIndex from './components/Posts/SchoolIndex.vue';
import SchoolDetail from './components/Posts/SchoolDetail.vue';
import SchoolEdit from './components/Posts/SchoolEdit.vue';
//like
import MyLikes from './components/Likes/MyLikes.vue';

//reserve
import Reservation from './components/Reserves/Reservation.vue';
import ReservedList from './components/Reserves/ReservedList.vue';
import MyReserved from './components/Reserves/MyReserved.vue';

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
      path: '/posts/:id/edit',
      name: 'SchoolEdit',
      component: SchoolEdit,
      params: true,
      beforeEnter(to, from, next) {
        if (store.getters.idTokens['access-token']) {
          next();
        } else {
          next('/');
        }
      }
    },
    {
      path: '/myLikes',
      component: MyLikes,
      beforeEnter(to, from, next) {
        if (store.getters.idTokens['access-token']) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/reserves/:id/',
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
      path: '/reservedList',
      component: ReservedList,
      beforeEnter(to, from, next) {
        if (store.getters.idTokens['access-token']) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/reserves/:id/show/',
      component: MyReserved,
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
          next('/');
        }
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      return { x: 0, y: 0 }
    }
  }
});
