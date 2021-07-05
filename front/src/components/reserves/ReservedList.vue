<template>
  <div>
    <h2>こちらは予約済み画面になります。</h2>
    <br><br>
    <h2>予約済みスクール一覧</h2>
    <br><br>
    <table>
      <tbody>
        <tr>
          <th>予約番号</th>
          <br><br>
          <th>予約したユーザーのID</th>
          <br><br>
          <th>予約した学校の番号</th>
          <br><br>
        </tr>
        <tr v-for="reserve in reserveDate" :key="reserve.id">
          <td>{{ reserve.id }}</td>
          <br><br>
          <td>{{ reserve.user_id }}</td>
          <br><br>
          <td><router-link :to="{ path: `/posts/${reserve.post_id}` }">{{ reserve.post_id }}</router-link></td>
          <br><br>
          <td v-if="reserve.user_id == idData.id"><router-link :to="{ path: `/reserves/${reserve.id}/show` }">予約詳細ページへ</router-link></td>
          <br><br>
        </tr>
      </tbody>
    </table>
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
