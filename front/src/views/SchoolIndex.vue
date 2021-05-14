<template>
  <div>
    <h2>学校一覧</h2>
    <br><br>
    <table>
      <tbody>
        <tr>
          <th>画像</th>
          <br><br>
          <th>ID</th>
          <br><br>
          <th>場所</th>
          <br><br>
          <th>スクール名</th>
          <br><br>
          <th>スクール紹介</th>
          <br><br>
          <th>スクール詳細</th>
          <br><br>
          <th>予約</th>
        </tr>
        <tr v-for="post in postData" :key="post.id">
          <td><img :src="post.image_url" class="post_image" /></td>
          <br><br>
          <td>{{ post.id }}</td>
          <br><br>
          <td>{{ post.address }}</td>
          <br><br>
          <td>{{ post.name }}</td>
          <br><br>
          <td>{{ post.comment }}</td>
          <br><br>
          <td><router-link :to="{ name: 'SchoolDetail', params: { id: post.id } }">詳細ページに行く</router-link></td>
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

<style scoped>
  .post_image {
    height: 150px;
    width: 150px;
    margin: 17px;
    border-radius: 10px;
    border: 1px solid gray;
  }

</style>
