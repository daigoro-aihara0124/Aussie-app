<template>
  <div>
    <h2>学校一覧</h2>
    <br><br>
    <table>
      <tbody>
        <tr>
          <th>スクール名</th>
          <br><br>
          <th>場所</th>
          <br><br>
          <th>予約</th>
        </tr>
        <tr v-for="post in postData" :key="post.id">
          <td>{{ post.name }}</td>
          <br><br>
          <td>{{ post.address }}</td>
          <br><br>
          <td><router-link to="/reservation">予約する</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      post: {}
    }
  },
  computed: {
    postData() {
      return this.$store.getters.postData;
    }
  },
  created() {
    this.$store.dispatch('created')
  }
};
</script>
