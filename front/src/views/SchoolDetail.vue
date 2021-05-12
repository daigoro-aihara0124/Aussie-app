<template>
  <div>
    <h2>学校詳細</h2>
    <br><br>
    <table>
      <tbody>
        <tr>
          <th>id</th>
          <br><br>
          <th>場所</th>
          <br><br>
          <th>スクール名</th>
          <br><br>
          <th>スクール紹介</th>
          <br><br>
          <th>期間</th>
          <br><br>
          <th>料金</th>
          <br><br>
          <th>予約</th>
        </tr>
        <tr>
          <td>{{ post.id }}</td>
          <br><br>
          <td>{{ post.address }}</td>
          <br><br>
          <td>{{ post.name }}</td>
          <br><br>
          <td>{{ post.comment }}</td>
          <br><br>
          <td>{{ post.term }}</td>
          <br><br>
          <td>¥{{ post.fee }}〜</td>
          <br><br>
          <td><router-link to="/reservation">予約する</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  computed: {
    postData() {
      return this.$store.getters.postData;
    },
    post() {
      return this.postData.find(postId => postId.id === this.$route.params.id) || {}
    }
  }
};
</script>
