<template>
  <div>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <h3>ログイン</h3>
    <label for="email">Email：</label>
    <input
      id="email"
      type="email"
      v-model="email"
    >
    <br><br>
    <label for="name">パスワード：</label>
      <input
      :type="inputType"
      id="password"
      class="input"
      v-model="password"
      >
      <span class="input-icon">
        <span :class="iconType" @click="onClick"></span>
      </span>
    <br><br>
    <button @click="login">送信</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: '',
      isChecked: false
    };
  },
  computed: {
    inputType: function () {
      return this.isChecked ? "text" : "password";
    },
    iconType: function () {
     return this.isChecked ? "eye-slash" : "eye";
   }
  },
  methods: {
    onClick: function() {
      this.isChecked = !this.isChecked;
    },
    login: async function() {
      await this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
