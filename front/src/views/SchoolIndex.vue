<template>
  <div>
    <h2>学校一覧</h2>
    <br><br>
    <table>
      <tbody>
        <tr>
          <th>スクール名</th>
          <br><br>
          <th>スクール紹介</th>
          <br><br>
          <th>期間</th>
          <br><br>
          <th>料金</th>
          <br><br>
          <th>場所</th>
          <br><br>
          <th>予約</th>
        </tr>
        <tr v-for="post in posts" :key="post.name">
          <td>{{ post.name }}</td>
          <br><br>
          <td>{{ post.comment }}</td>
          <br><br>
          <td>{{ post.term }}</td>
          <br><br>
          <td>{{ post.fee }}</td>
          <br><br>
          <td>{{ post.address }}</td>
          <br><br>
          <td>予約する</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

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
  }
};
</script>
