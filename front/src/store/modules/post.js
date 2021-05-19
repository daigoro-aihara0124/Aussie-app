import axios from "axios";


export default {
  state: {
    postData: []
  },
  getters: {
    postData: state => state.postData.sort((a, b) => b.id - a.id)
  },
  mutations: {
    updatePostData: (state, postData) => (state.postData = postData),
    addPost: (state, post) => (state.postData = [...state.postData, post]),
    // editInfo: (state, id) =>
    // (state.postData = state.postData.filter(post => post.id !== id)),
    deleteInfo: (state, id) =>
    (state.postData = state.postData.filter(post => post.id !== id))
  },
  actions: {
    async fetchPost({ commit }) {
      await axios.get('api/v1/posts')
      .then(response => {
        commit('updatePostData', response.data);
      })
      .catch(e => console.log(e))
    },
    // async detailPost(commit, { id }) {
    //   await axios.get(`api/v1/posts/${id}`)
    //   .then(response => {
    //     commit('updatePostData', response.data);
    //   })
    //   .catch(e => console.log(e))
    // },
    async createInfo({ commit }, post) {
      const response = await axios.post('api/v1/posts', post, {
        headers: {
          'content-type': 'multipart/form-data',
        }
      })
      commit('addPost', response.data);
    },
    // async editInfo({ commit }, id, post) {
    //   const response = await axios.put(`api/v1/posts/${id}`, post, {
    //     headers: {
    //       'content-type': 'multipart/form-data',
    //     }
    //   })
    //   commit('editPost', response.data);
    // },
    async deleteInfo({ commit }, id) {
      await axios.delete(`api/v1/posts/${id}`);
      commit('deletePost', id);
    }
  }
}
