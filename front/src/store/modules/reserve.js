import axios from 'axios'

export default {
  state: {
    reserveDate: [],
    reserve: []
  },
  getters: {
    reserveDate: state => state.reserveDate,
    reserve: state => state.reserve
  },
  mutations: {
    updateReserveDate: (state, reserveDate) => (state.reserveDate = reserveDate),
    updateReserve: (state, reserve) => (state.reserve = reserve),
    addReserve: (state, reserve) => (state.reserveDate = [...state.reserveDate, reserve]),
    deleteReserveDate: (state, reserveid) => state.reserveDate = state.reserveDate.filter(reserve => reserve.id !== reserveid),
  },
  actions: {
    async reserveSchool({ commit }, authData) {
      console.log(this.postid);
        const res = await axios.post('api/v1/reserves', {
          post_id: authData.post_id,
          start_date: authData.start_date,
          end_date: authData.end_date,
          total_days: authData.total_days,
          total_fee: authData.total_fee
        }, {
        headers: {
          'access-token':  localStorage.getItem('access-token'),
          'uid':  localStorage.getItem('uid'),
          'client':  localStorage.getItem('client')
        }
      })
      if (res.status !== 201) { process.exit() }
      commit('addReserve', res.data);
    },
    async reservedSchool({ commit }) {
      const res = await axios.get('api/v1/reserves')
      commit('updateReserveDate', res.data);
    },
    async detailReservation({ commit }, reserveid) {
      const response = await axios.get(`api/v1/reserves/${reserveid}`)
      commit('updateReserve', response.data);
    },
  }
}
