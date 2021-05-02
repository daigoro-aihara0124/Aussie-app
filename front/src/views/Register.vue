<template>
  <div>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <h3>登録</h3>
    <label for="name">名前：</label>
    <input
      id="name"
      type="text"
      v-model="name"
    >
    <br><br>
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
    <button @click="register">送信</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
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
    register: async function() {
      await this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password
      });
      this.name = '';
      this.email = '';
      this.password = '';
    }
  }
};
</script>

<style>

.eye::after {
  font-family: 'FontAwesome';
  content: "\f06e";
}

.eye-slash::after {
  font-family: 'FontAwesome';
  content: "\f070";
}

.input-icon {
  position: relative;
  margin-top: -25px;
  margin-left: -20px;
}
</style>
