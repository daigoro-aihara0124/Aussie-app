import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idData: {
      'name': null,
      'email': null
    },
    idTokens: {
      'access-token': null,
      'uid': null,
      'client': null
    }
  },
  getters: {
    idTokens: state => state.idTokens,
    idData: state => state.idData
  },
  mutations: {
    updateIdData(state, idData) {
      state.idData['name'] = idData['name'];
      state.idData['email'] = idData['email'];
    },
    updateIdTokens(state, idTokens) {
      state.idTokens['access-token'] = idTokens['access-token'];
      state.idTokens['uid'] = idTokens['uid'];
      state.idTokens['client'] = idTokens['client'];
    },
    updateLocalStorage(state, { idData, idTokens }) {
      localStorage.setItem('name', idData['name']);
      localStorage.setItem('email', idData['email']);
      localStorage.setItem('access-token', idTokens['access-token']);
      localStorage.setItem('client', idTokens['client']);
      localStorage.setItem('uid', idTokens['uid']);
    },
  },
  actions: {
    autoLogin({ commit }) {
      const idData = {
        'name':  localStorage.getItem('name'),
        'email':  localStorage.getItem('email')
      };
      const idTokens = {
        'access-token':  localStorage.getItem('access-token'),
        'uid':  localStorage.getItem('uid'),
        'client':  localStorage.getItem('client')
      };
      if (idTokens['access-token']) {
        commit('updateIdTokens', idTokens);
        commit('updateIdData', idData);
      }
    },
    register: async function({ commit }, authData) {
      return await axios.post('api/v1/auth', {
        name: authData.name,
        email: authData.email,
        password: authData.password
      })
      .then(response => {
        commit('updateIdTokens', response.headers);
        commit('updateIdData', response.data['data']);
        commit('updateLocalStorage', { idData: response.data['data'], idTokens: response.headers });
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
        commit('updateIdData', response.data['data']);
        commit('updateLocalStorage', { idData: response.data['data'], idTokens: response.headers });
        router.push('/comments');
      });
    },
    logout: async function({ commit }) {
      return await axios.delete('api/v1/auth/sign_out', {
        headers: {
          'access-token': localStorage.getItem('access-token'),
          'uid': localStorage.getItem('uid'),
          'client': localStorage.getItem('client'),
        }
     })
     .then(() => {
       const idData = {
         'name': null,
         'email': null
       };
       const idTokens = {
          'access-token': null,
          'client': null,
          'uid': null
        };
       commit('updateIdTokens', idTokens);
       commit('updateIdData', idData);
       localStorage.removeItem('access-token');
       localStorage.removeItem('uid');
       localStorage.removeItem('client');
       localStorage.removeItem('name');
       localStorage.removeItem('email');
       router.replace('/login');
      });
    },
    updateIdData: async function({ commit }, authData) {
      return await axios.put('/api/v1/auth', authData, {
        headers: {
          'access-token': localStorage.getItem('access-token'),
          'uid': localStorage.getItem('uid'),
          'client': localStorage.getItem('client')
        }
      })
      .then(response => {
        commit('updateIdData', response.data['data']);
        commit('updateLocalStorage', { idData: response.data['data'], idTokens: response.headers });
        router.replace('/mypage');
      });
    }
  },
});
