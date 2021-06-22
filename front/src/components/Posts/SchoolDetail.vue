<template>
  <div>
    <h2>学校詳細</h2>
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
          <th>期間</th>
          <br><br>
          <th>料金</th>
          <br><br>
          <th>投稿者ID</th>
          <br><br>
          <th>いいね！</th>
          <br><br>
          <th>お気に入り数</th>
          <br><br>
          <th>予約</th>
          <template v-if="isAuthenticated">
            <th>編集</th>
          </template>
          <br><br>
        </tr>
        <tr>
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
          <td>{{ post.term }}</td>
          <br><br>
          <td>¥{{ post.fee }}〜</td>
          <br><br>
          <td>{{ post.user_id }}</td>
          <br><br>
          <td><likes :postid ="postid" :post ="post" ></likes></td>
          <br><br>
          <td><like-counter :postid ="postid" :post ="post" ></like-counter></td>
          <br><br>
          <td><router-link :to="{ path: `/reserves/${post.id}` }">予約する</router-link></td>
          <br><br>
          <template v-if="isAuthenticated">
            <td><router-link :to="{ path: `/posts/${post.id}/edit` }">編集ページ</router-link></td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Likes from '../../components/Likes/Likes.vue'
import LikeCounter from '../../components/Likes/LikeCounter.vue'
// import LikeList from '../../components/LikeList.vue'

export default {
  components: {
    Likes,
    LikeCounter,
    // LikeList,
  },
  data() {
    return {
      postid: this.$route.params.id,//id→postidに変更
      imageFile_url: null,
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.idData['id'] == this.post.user_id;
    },
    post() {
      return this.$store.getters.post;
    },
  },
  created() {
    this.$store.dispatch('detailPost', this.postid)
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
