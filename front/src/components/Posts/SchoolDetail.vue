<template>
  <div>
    <h2>学校詳細</h2>
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
          <th>期間</th>
          <br><br>
          <th>料金</th>
          <br><br>
          <th>投稿者ID</th>
          <br><br>
          <th>お気に入り</th>
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
          <td><router-link to="/reservation">予約する</router-link></td>
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
import axios from "axios";
import Likes from '../../components/Likes.vue'

export default {
  components: {
    Likes,
  },
  data() {
    return {
      postid: this.$route.params.id,//id→postidに変更
      imageFile: null,
      post: {
        id: '',
        address: '',
        name: '',
        comment: '',
        term: '',
        fee: '',
        user_id: '',
      }
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.idData['id'] == this.post.user_id;
    }
  },
  mounted: function() {
    this.setPostDetail(this.postid);
  },
  methods: {
    setPostDetail(postid){
      var self = this;
      axios.get(`api/v1/posts/${postid}`).then(res => {
        self.post.image_url = res.data.image_url;
        self.post.id = res.data.id;
        self.post.address = res.data.address;
        self.post.name = res.data.name;
        self.post.comment = res.data.comment;
        self.post.term = res.data.term;
        self.post.fee = res.data.fee;
        self.post.user_id = res.data.user_id;
      });
    },
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
