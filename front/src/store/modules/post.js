import axios from "axios";
import router from "../../router";

export default {
  state: {
    postData: []
  },
  getters: {
    postData: state => state.postData
  },
  mutations: {
    updatePostData(state, postData) {
      state.postData = postData
    },
    addPost(state, post) {
      const postData = state.postData.concat(post)
      state.postData = postData
    }
  },
  actions: {
    created({ commit }) {
      axios.get('api/v1/posts')
      .then(response => {
        commit('updatePostData', response.data);
      });
    },
    async createInfo({ commit }, post) {
      const response = await axios.post('api/v1/posts', post)
      const savedPost = response.data
      commit('addPost', savedPost);
      router.push('/schoolIndex');
    }
  }
}
