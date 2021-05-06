<template>
  <div>
    <h3>学校を登録する</h3>
    <label for="name">スクール名：</label>
    <input
      id="name"
      type="text"
      v-model="name"
    >
    <br><br>
    <label for="comment">スクール紹介：</label>
    <textarea
      id="comment"
      v-model="comment"
    ></textarea>
    <br><br>
    <label for="term">期間：</label>
    <input
      id="term"
      v-model="term"
    >
    <br><br>
    <label for="fee">料金：</label>
    <input
      id="fee"
      v-model="fee"
    >
    <br><br>
    <label for="address">場所：</label>
    <input
      id="address"
      v-model="address"
    >
    <br><br>
    <button @click="createComment">内容を登録する</button>
  </div>
</template>

<script>
import axios from 'axios';
import router from "../router";

export default {
  data() {
    return {
      name: '',
      comment: '',
      term: '',
      fee: '',
      address: '',
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
        comment: this.comment,
        term: this.term,
        fee: this.fee,
        address: this.address
      })
      .then(response => {
        console.log(response);
        router.push('/schoolIndex');
      })
      .catch(error => {
        console.log(error);
      });
      this.name = '';
      this.comment = '';
      this.term = '';
      this.fee = '';
      this.address = '';
    }
  }
};
</script>
