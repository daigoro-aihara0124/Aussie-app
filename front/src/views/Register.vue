<template>
  <div>
    <h3>登録</h3>
    <label for="email">Email：</label>
    <input
      id="email"
      type="email"
      v-model="email"
    >
    <br><br>
    <label for="name">パスワード：</label>
    <input
      id="password"
      type="password"
      v-model="password"
    >
    <br><br>
    <button @click="register">送信</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      axios.post('api/v1/auth', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        console.log(response);
      });
      this.email = '';
      this.password = '';
    }
  }
};
</script>
