import axios from "axios";

export default {
  state: {
    postData: [],
    post:[]
  },
  getters: {
    postData: state => state.postData.sort((a, b) => b.id - a.id),
    post: state => state.post
  },
  mutations: {
    updatePostData: (state, postData) => (state.postData = postData),
    updatePost: (state, post) => (state.post = post),
    addPost: (state, post) => (state.postData = [...state.postData, post]),
    editPost: (state, postid) => state.postData = state.postData.filter(post => post.id == postid),
    deletePost: (state, postid) => state.postData = state.postData.filter(post => post.id !== postid),
  },
  actions: {
    async fetchPost({ commit }) {
      await axios.get('api/v1/posts')
      .then(response => {
        commit('updatePostData', response.data);
      })
      .catch(e => console.log(e))
    },
    async detailPost({ commit }, postid) {
      const response = await axios.get(`api/v1/posts/${postid}`)
      commit('updatePost', response.data);
    },
    async createInfo({ commit }, formData) {
      const response = await axios.post('api/v1/posts', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'access-token':  localStorage.getItem('access-token'),
          'uid':  localStorage.getItem('uid'),
          'client':  localStorage.getItem('client')
        }
      })
      commit('addPost', response.data);
      return response.data
    },
    async editInfo({ commit }, { postid, formData }) {
      const response = await axios.put(`api/v1/posts/${postid}`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'access-token':  localStorage.getItem('access-token'),
          'uid':  localStorage.getItem('uid'),
          'client':  localStorage.getItem('client')
        }
      })
      commit('editPost', response.data);
      return response.data
    },
    async deleteInfo({ commit }, postid) {
      const response = await axios.delete(`api/v1/posts/${postid}`, {
        headers: {
          'content-type': 'multipart/form-data',
          'access-token':  localStorage.getItem('access-token'),
          'uid':  localStorage.getItem('uid'),
          'client':  localStorage.getItem('client')
        }
      });
      commit('deletePost', postid);
      return response.data
    }
  }
}
