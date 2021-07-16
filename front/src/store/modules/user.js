import axios from "axios";
import router from "../../router";

export default {
  state: {
    idData: {
      'id': null,
      'name': null,
      'email': null,
      'image': null
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
      state.idData['id'] = idData['id'];
      state.idData['name'] = idData['name'];
      state.idData['email'] = idData['email'];
      state.idData['image'] = idData['image'];
    },
    updateIdTokens(state, idTokens) {
      state.idTokens['access-token'] = idTokens['access-token'];
      state.idTokens['uid'] = idTokens['uid'];
      state.idTokens['client'] = idTokens['client'];
    },
    updateLocalStorage(state, { idData, idTokens }) {
      localStorage.setItem('id', idData['id']);
      localStorage.setItem('name', idData['name']);
      localStorage.setItem('email', idData['email']);
      localStorage.setItem('image', idData['image']);
      localStorage.setItem('access-token', idTokens['access-token']);
      localStorage.setItem('client', idTokens['client']);
      localStorage.setItem('uid', idTokens['uid']);
    },
  },
  actions: {
    autoLogin({ commit }) {
      const idData = {
        'id':  localStorage.getItem('id'),
        'name':  localStorage.getItem('name'),
        'email':  localStorage.getItem('email'),
        'image':  localStorage.getItem('image')
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
        password: authData.password,
      })
      .then(response => {
        commit('updateIdTokens', response.headers);
        commit('updateIdData', response.data['data']);
        commit('updateLocalStorage', { idData: response.data['data'], idTokens: response.headers });
        router.push('/mypage');
      });
    },
    guestUserLogin: async function({ commit }, authData) {
       return await axios.post('api/v1/auth/sign_in', {
         email: authData.email,
         password: authData.password
      })
      .then(response => {
        commit('updateIdTokens', response.headers);
        commit('updateIdData', response.data['data']);
        commit('updateLocalStorage', { idData: response.data['data'], idTokens: response.headers });
        router.push('/', () => {});
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
        router.push('/mypage', () => {});
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
         'id': null,
         'name': null,
         'email': null,
         'image': null
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
       localStorage.removeItem('id');
       localStorage.removeItem('name');
       localStorage.removeItem('email');
       localStorage.removeItem('image');
       router.replace('/', () => {});
      });
    },
    updateIdData({ commit }, formData) {
      axios.put('/api/v1/auth', formData, {
        headers: {
          'content-type': 'multipart/form-data',
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
};
