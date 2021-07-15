<template>
  <div>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <div class="form_wrapper">
      <h1 class="title">Sign Up</h1>
      <div class="cp_iptxt">
        <input
          id="name"
          type="text"
          v-model="name"
          placeholder="name(必須)"
        >
      </div>
      <div class="cp_iptxt">
        <input
          id="email"
          type="email"
          v-model="email"
          placeholder="email(必須)"
        >
      </div>
      <div class="cp_iptxt">
        <input
        :type="inputType"
        id="password"
        class="input"
        v-model="password"
        placeholder="password(必須) 8文字以上"
        >
        <span class="input_icon">
          <span :class="iconType" @click="onClick"></span>
        </span>
      </div>
      <div class="button_panel">
        <button class="button" @click="register">送信</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      isChecked: false,
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
      try {
        await this.$store.dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        });
        alert("新規登録が完了しました")
      }
      catch (error) {
        alert("入力に誤りがあります");
      }
    },
  },
};
</script>
