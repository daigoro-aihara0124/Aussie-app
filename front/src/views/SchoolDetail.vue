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
          <th>予約</th>
          <br><br>
          <th>編集</th>
          <br><br>
          <th>削除</th>
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
          <td><router-link to="/reservation">予約する</router-link></td>
          <br><br>
          <td><router-link :to="{ path: `/posts/${post.id}/edit` }">編集ページ</router-link></td>
          <br><br>
          <td><button @click="del(post.id)">内容を削除する</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      imageFile: null,
      post: {
        id: '',
        address: '',
        name: '',
        comment: '',
        term: '',
        fee: '',
      }
    };
  },
  mounted: function() {
    this.setPostDetail(this.id);
  },
  methods: {
    setPostDetail(id){
      axios.get(`api/v1/posts/${id}`).then(res => {
        this.post.image_url = res.data.image_url;
        this.post.id = res.data.id;
        this.post.address = res.data.address;
        this.post.name = res.data.name;
        this.post.comment = res.data.comment;
        this.post.term = res.data.term;
        this.post.fee = res.data.fee;
      });
    },
    del(id) {
      this.$store.dispatch('deleteInfo', id)
      this.$router.push('/schoolIndex');
    }
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
