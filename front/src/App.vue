<template>
  <div id="app">
    <header>
      <template v-if="isAuthenticated">
        <router-link to="/" class="header-item">ホーム</router-link>
        <router-link to="/schoolRegister" class="header-item">スクール登録フォーム</router-link>
        <router-link to="/schoolIndex" class="header-item">スクール一覧</router-link>
        <router-link to="/mypage" class="header-item">マイページ</router-link>
        <span class="header-item" @click="logout">ログアウト</span>
      </template>
      <template v-if="!isAuthenticated">
        <router-link to="/" class="header-item">ホーム</router-link>
        <span class="header-item" @click="guestUserLogin">ゲストユーザーログイン</span>
        <router-link to="/login" class="header-item">ログイン</router-link>
        <router-link to="/register" class="header-item">登録</router-link>
      </template>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.idTokens['access-token'] !== null;
    }
  },
  methods: {
    logout: async function() {
      return await this.$store.dispatch('logout');
    },
    guestUserLogin: async function() {
      await this.$store.dispatch('guestUserLogin', {
        email: 'guest@example.com',
        password: "guest12345"
      });
    }
  }
};
</script>

<style scoped>
  .header-item {
    padding: 10px;
    cursor: pointer;
  }
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* register,loginのマスク */
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
.hidden {
  display: none;
}
</style>
