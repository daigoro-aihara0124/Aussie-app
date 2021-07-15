<template>
  <div>
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <header class="header_menu">
      <template v-if="isAuthenticated">
        <div class="home_aicon">
          <router-link to="/"><i class="fas fa-home size"></i></router-link>
          <h2>Aussie Journey</h2>
        </div>
        <ul>
          <div class="school_menu">
            <li><router-link to="/schoolRegister" class="header_item">スクール登録フォーム</router-link></li>
          	<li><router-link to="/schoolIndex" class="header_item">スクール一覧</router-link></li>
          	<li><router-link to="/ReservedList" class="header_item">予約済みのスクール一覧</router-link></li>
          	<li class="header_item">About</li>
          </div>
          <div class="sign_items">
            <router-link to="/mypage" class="login_btn">マイページ</router-link>
            <span class="login_btn" @click="logout">ログアウト</span>
          </div>
        </ul>
      </template>
      <template v-else>
        <div class="home_aicon">
          <router-link to="/"><i class="fas fa-home size"></i></router-link>
          <h2>Aussie Journey</h2>
        </div>
        <div class="sign_items">
          <span class="guest_btn" @click="guestUserLogin">ゲストユーザーログイン</span>
          <router-link to="/login" class="login_btn">ログイン</router-link>
          <router-link to="/register" class="login_btn">新規登録</router-link>
        </div>
      </template>
    </header>
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
    logout: async function(e) {
      let result = confirm("ログアウトしますか？")
      if(result) {
        return await this.$store.dispatch('logout');
      }
      else {
        e.preventDefault();
        return;
      }
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

  .header_menu {
    font-size: 14px;
    padding: 20px 100px 10px 50px;
    background-color: whitesmoke;
  }

  .home_aicon {
    text-align: left;
  }

  .home_aicon h2 {
    color: #008000;
    font-size: 1.5em;
  }

  .size {
    font-size: 3em;
    text-align: left;
    transition: .4s;
  }

  .size:hover {
    opacity:0.5;
  }

  .sign_items {
    text-align: right;
    padding: 10px;
    cursor: pointer;
    justify-content: space-between;
  }

  .login_btn {
    display: inline;
  	width: 80px;
    margin: 0px 10px;
  	padding: 0.3em;
  	text-align: center;
  	text-decoration: none;
  	color: #EC407A;
  	border: 2px solid #EC407A;
  	border-radius: 10px;
  	transition: .4s;
  }

  .login_btn:hover {
	background: #EC407A;
	color: #fff;
  }

  .guest_btn {
    transition: .4s;
    margin: 0px 5px;
  }

  .guest_btn:hover {
    color: #996633;
  }

  ul {
    display:flex;
    width: 100%;
  }

  .school_menu {
    list-style-type: none;
    margin-top: 5px;
    margin-right: 800px;
  	padding: 0;
  	overflow: hidden;
    text-align: center;
  	background-color: #808000;
    width: 700px;
  }

  li {
  	float: left;
  	border-right: 1px solid #bbbbbb;
  }

  li:last-child {
  	border-right: none;
  }

  li .header_item {
	display: block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
  }

  .header_item {
  	display: block;
  	color: white;
  	text-align: center;
  	padding: 14px 16px;
  	text-decoration: none;
  }


  li .header_item:hover:not(.active) {
  	background-color: #a9bce2;
  }
  .active {
  	background-color: #da3c41;
  }

</style>
