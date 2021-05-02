<template>
  <div>
    <h3>掲示板に投稿する</h3>
    <label for="name">ネーム：</label>
    <input
      id="name"
      type="text"
      v-model="name"
    >
    <br><br>
    <label for="comment">コメント：</label>
    <textarea
      id="comment"
      v-model="comment"
    ></textarea>
    <br><br>
    <button @click="createComment">コメントをサーバーに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <br>
      <div>名前：{{post.name}}</div>
      <div>コメント：{{post.comment}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      comment: '',
      posts: []
    };
  },
  created() {
    axios.get('api/v1/posts.json')
    .then(response => {
      this.posts = response.data;
      console.log(response);
    });
  },
  methods: {
    createComment() {
      axios.post('api/v1/posts', {
        name: this.name,
        comment: this.comment
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
      this.name = '';
      this.comment = '';
    }
  }
};
</script>
