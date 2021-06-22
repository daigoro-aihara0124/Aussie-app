<template>
  <div>
    <h2>学校一覧</h2>
    <br><br>
    <table>
      <tbody>
        <tr>
          <th>画像</th>
          <br><br>
          <th>スクールID</th>
          <br><br>
          <th>場所</th>
          <br><br>
          <th>スクール名</th>
          <br><br>
          <th>スクール紹介</th>
          <br><br>
          <!-- <th>お気に入り数</th> -->
          <br><br>
          <th>スクール詳細</th>
          <br><br>
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
          <!-- <td><likes :postid ="post-id" :post ="post" ></likes></td> -->
          <br><br>
          <td><router-link :to="{ name: 'SchoolDetail', params: { id: post.id } }">詳細ページに行く</router-link></td>
          <br><br>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import Likes from '../../components/Likes.vue'
import { mapGetters } from 'vuex'

export default {
  // components: {
  //   Likes,
  // },
  // data() {
  //   return {
  //     likeList: []
  //   }
  // },
  created() {
    this.$store.dispatch('fetchPost')
  },
  computed: {
    ...mapGetters(['postData']),
    // count() {
    //   return this.likeList.length
    // },
  },
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
