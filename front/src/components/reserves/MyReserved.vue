<template>
  <div class="form_wrapper">
    <template v-if="isAuthenticated">
      <div class="reserveList_name">
        <h2>{{ idData.name }}'s reserved page</h2>
      </div>
        <div class="link_description">
          <h2>Reservation Details</h2>
        </div>
          <ul>
            <li>
              <div class="school_name">
              <label for="comment">Reservation No.： </label>
                No.{{ reserve.id }}
              </div>
              <div class="school_name">
              <label for="comment">Your Name： </label>
                {{ idData.name }}
              </div>
              <div class="school_name">
              <label for="comment">Your ID： </label>
                {{ reserve.user_id }}
              </div>
              <div class="school_name">
              <label for="comment">Start Date： </label>
                {{ reserve.start_date }}
              </div>
              <div class="school_name">
              <label for="comment">End Date： </label>
                {{ reserve.end_date }}
              </div>
              <div class="school_name">
              <label for="comment">Days： </label>
                {{ reserve.total_days }}
              </div>
              <div class="school_name">
              <label for="comment">Fee： </label>
                ¥{{ reserve.total_fee | addComma }}
              </div>
              <div class="school_name">
              <label for="comment">School Link： </label>
                <router-link :to="{ path: `/posts/${reserve.post_id}` }" class="user_menu">学校詳細ページへ行く</router-link>
              </div>
            </li>
          </ul>
    </template>
  </div>
</template>

<script>


export default {
  data() {
    return {
      reserveid: this.$route.params.id,
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.idData['id'] == this.$store.getters.reserve['user_id'];
    },
    reserve() {
      return this.$store.getters.reserve;
    },
    post() {
      return this.$store.getters.post;
    },
    postData() {
      return this.$store.getters.postData;
    },
    idData() {
      return this.$store.getters.idData;
    },
  },
  filters: {
    addComma: function (value) {
      return value.toLocaleString();
    }
  },
  created() {
    this.$store.dispatch('detailReservation', this.reserveid);
  },
};
</script>

<style scoped>

.reserveList_name {
  text-align:left;
  font-weight:bold;
  font-size:1.2rem;
  margin-bottom: 30px;
  letter-spacing:.1rem;
}

.link_description {
  margin-bottom: 30px;
  text-align:left;
  font-weight:bold;
  font-size:1.0rem;
  border-bottom: solid #1e366a 1px;
}

</style>
