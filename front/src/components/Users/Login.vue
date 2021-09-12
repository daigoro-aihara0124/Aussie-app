<template>
  <div>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <div class="form_wrapper">
      <h1 class="title">Sign In</h1>
      <div class="cp_iptxt">
        <input
          id="email"
          type="text"
          v-model="email"
          placeholder="email"
        >
      </div>
      <div class="cp_iptxt">
        <input
          :type="inputType"
          id="password"
          v-model="password"
          placeholder="password"
        >
        <span class="input_icon">
          <span :class="iconType" @click="onClick"></span>
        </span>
      </div>
      <div class="button_panel">
        <button class="button"  @click="login">送信</button>
      </div>
    </div>
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
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        });
        this.$store.commit(`message/setContent`, {
          content: 'ログインに成功しました！',
          timeout: 6000
        })
      }
      catch (error) {
        alert("入力に誤りがあります");
      }
    }
  }
};
</script>
