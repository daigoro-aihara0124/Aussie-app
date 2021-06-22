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
// import LikeList from './components/Likes/LikeList.vue';

//reserve
import Reservation from './components/reserves/Reservation.vue';
import MyReserved from './components/reserves/MyReserved.vue';



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
        if (store.getters.idTokens['access-token'] && store.getters.idData['email'] !== 'guest@example.com') {
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
    // {
    //   path: '/likeList',
    //   component: LikeList,
    //   beforeEnter(to, from, next) {
    //     if (store.getters.idTokens['access-token']) {
    //       next();
    //     } else {
    //       next('/login');
    //     }
    //   }
    // },
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
