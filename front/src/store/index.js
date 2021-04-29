import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idTokens:{
      'access-token': null,
      'uid': null,
      'client': null
    }
  },
  getters: {
    idTokens: state => state.idTokens
  },
  mutations: {
    updateIdTokens(state, idTokens) {
      state.idTokens['access-token'] = idTokens['access-token'];
      state.idTokens['uid'] = idTokens['uid'];
      state.idTokens['client'] = idTokens['client'];
    }
  },
  actions: {
    autoLogin({ commit }) {
      const idTokens = {
        'access-token':  localStorage.getItem('access-token'),
        'uid':  localStorage.getItem('uid'),
        'client':  localStorage.getItem('client')
      };
      if (idTokens['access-token']) {
        commit('updateIdTokens', idTokens);
      }
    },
    register({ commit }, authData) {
      axios.post('api/v1/auth', {
        email: authData.email,
        password: authData.password
      })
      .then(response => {
        commit('updateIdTokens', response.headers);
        localStorage.setItem('access-token', response.headers['access-token']);
        localStorage.setItem('uid', response.headers['uid']);
        localStorage.setItem('client', response.headers['client']);
        router.push('/comments');
      });
    },
    login: async function({ commit }, authData) {
       return await axios.post('api/v1/auth/sign_in', {
         email: authData.email,
         password: authData.password
      })
      .then(response => {
        commit('updateIdTokens', response.headers);
        localStorage.setItem('access-token', response.headers['access-token']);
        localStorage.setItem('uid', response.headers['uid']);
        localStorage.setItem('client', response.headers['client']);
        router.push('/comments');
      });
    },
    logout: async function({ commit }) {
      return await axios.delete('api/v1/auth/sign_out', {
        headers: {
          'access-token': localStorage.getItem('access-token'),
          'uid': localStorage.getItem('uid'),
          'client': localStorage.getItem('client')
        }
     })
     .then(() => {
       const idTokens = {
          'access-token': null,
          'client': null,
          'uid': null,
        };
       commit('updateIdTokens', idTokens);
       localStorage.removeItem('access-token');
       localStorage.removeItem('uid');
       localStorage.removeItem('client');
       router.replace('/login');
     });
    }
  },
});
