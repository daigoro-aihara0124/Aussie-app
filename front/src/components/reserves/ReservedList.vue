<template>
  <div class="form_wrapper">
    <div class="reserveList_name">
      <h2>Reservation list</h2>
    </div>
      <ul>
        <li v-for="reserve in reserveDate" :key="reserve.id">
          <div class="school_name">
          <label for="comment">Reservation No.： </label>
            No.{{ reserve.id }}
          </div>
          <div class="school_name">
          <label for="comment">User ID： </label>
          {{ reserve.user_id }}
          </div>
          <div class="school_name">
          <label for="comment">School No.： </label>
          <router-link :to="{ path: `/posts/${reserve.post_id}` }" class="link_menu">No.{{ reserve.post_id }}</router-link>
          </div>
          <div class="detail_link">
            <router-link :to="{ path: `/reserves/${reserve.id}/show` }" v-if="reserve.user_id == idData.id" class="user_menu"
            >
              予約済みページへ
            </router-link>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.idData['id'] == this.reserve.user_id;
    },
    reserveDate() {
      return this.$store.getters.reserveDate;
    },
    reserve() {
      return this.$store.getters.reserve;
    },
    idData() {
      return this.$store.getters.idData;
    },
  },
  created() {
    this.$store.dispatch('reservedSchool')
  },
}
</script>

<style scoped>

.reserveList_name {
  text-align:left;
  font-weight:bold;
  font-size:1.2rem;
  margin-bottom: 30px;
  letter-spacing:.1rem;
  border-bottom: solid #1e366a 1px;
}

li {
  border-radius: 10px;
  border: 1px solid #ccc;
  margin: 3em auto;
  padding: 0 1em;
}

.list_number {
  text-align:left;
  font-weight:bold;
  font-size:1.2rem;
  margin: 1rem auto 1rem;
  letter-spacing:.1rem;
}

.detail_link {
  text-align: right;
}

</style>
