<template>
  <div>
    <template v-if="isAuthenticated">
      <h2>こちらは{{ idData.name }}さんが予約したスクールになります。</h2>
      <br><br>
      <h2>予約詳細</h2>
      <br><br>
      <table>
        <tbody>
          <tr>
            <th>予約番号</th>
            <br><br>
            <th>予約者</th>
            <br><br>
            <th>予約者のID</th>
            <br><br>
            <th>開始予定日</th>
            <br><br>
            <th>終了予定日</th>
            <br><br>
            <th>日数</th>
            <br><br>
            <th>料金</th>
            <br><br>
            <th>スクール名</th>
            <br><br>
          </tr>
          <tr>
            <td>{{ reserve.id }}</td>
            <br><br>
            <td>{{ idData.name }}様</td>
            <br><br>
            <td>{{ reserve.user_id }}</td>
            <br><br>
            <td>{{ reserve.start_date }}</td>
            <br><br>
            <td>{{ reserve.end_date }}</td>
            <br><br>
            <td>{{ reserve.total_days }}</td>
            <br><br>
            <td>¥{{ reserve.total_fee }}</td>
            <br><br>
            <td><router-link :to="{ path: `/posts/${reserve.post_id}` }">学校詳細ページへ行く</router-link></td>
            <br><br>
          </tr>
        </tbody>
      </table>
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
  created() {
    this.$store.dispatch('detailReservation', this.reserveid);
  },
};
</script>
