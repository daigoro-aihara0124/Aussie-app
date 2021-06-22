import axios from 'axios'

export default {
  state: {
    likeList: [],
    like: []
  },
  getters: {
    likeList: state => state.likeList,
    like: state => state.like
  },
  mutations: {
    updateLikeList: (state, likeList) => (state.likeList = likeList),
    updateLike: (state, like) => (state.like = like),
    addLike: (state, like) => (state.likeList = [...state.likeList, like]),
    deleteLikeList: (state, likeid) => state.likeList = state.likeList.filter(like => like.id !== likeid),
  },
  actions: {
    async createdLike({ commit }, postid) {
      const res = await axios.get('api/v1/likes', postid)
      if (res.status !== 200) { process.exit() }
      commit('updateLikeList', res.data);
      this.likeList = res.data
    },
    async registerLike({ commit }, postid) {
      console.log(this.postid);
        const res = await axios.post('api/v1/likes', postid, {
        headers: {
          'access-token':  localStorage.getItem('access-token'),
          'uid':  localStorage.getItem('uid'),
          'client':  localStorage.getItem('client')
        }
      })
      if (res.status !== 201) { process.exit() }
      commit('addLike', res.data);
    },
    async deleteLike({ commit }, likeid) {
      const res = await axios.delete(`api/v1/likes/${likeid}`)
      if (res.status !== 200) { process.exit() }
      commit('deleteLikeList', res.data)
    },
  }
}
