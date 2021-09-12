<template>
  <div class="container">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <header class="header_menu">
      <!-- ログインしている場合 -->
      <template v-if="isAuthenticated">
        <div class="home_aicon">
          <router-link to="/"><i class="fas fa-home size"></i></router-link>
          <h2>Aussie Journey</h2>
        </div>
        <!-- スマホ用ハンバーガーメニュー -->
        <div class="hamburger_wrapper">
          <div class="header-logo-menu">
            <div id="nav-drawer">
                <input id="nav-input" type="checkbox" class="nav-unshown">
                <label id="nav-open" for="nav-input"><span></span></label>
                <label class="nav-unshown" id="nav-close" for="nav-input"></label>
                <div id="nav-content">
                  <ul class="hamburger_menu">
                    <li class="hamburger_list"><router-link to="/schoolRegister" class="list_item">スクール登録フォーム</router-link></li>
                    <li class="hamburger_list"><router-link to="/schoolIndex" class="list_item">スクール一覧</router-link></li>
                    <li class="hamburger_list"><router-link to="/ReservedList" class="list_item">予約済みのスクール</router-link></li>
                    <li class="hamburger_list"><router-link to="/about" class="list_item">About Aussie Journey</router-link></li>
                    <li class="hamburger_list"><router-link to="/mypage" class="list_item">マイページ</router-link></li>
                    <li class="hamburger_list"><span @click="logout" class="guest_btn">ログアウト</span></li>
                  </ul>
                </div>
            </div>
              <div class="logo-area">Aussie Journey</div>
          </div>
        </div>
        <!--メニュー一覧 -->
        <ul class="school_form">
          <div class="school_menu">
            <li><router-link to="/schoolRegister" class="header_item">スクール登録フォーム</router-link></li>
          	<li><router-link to="/schoolIndex" class="header_item">スクール一覧</router-link></li>
          	<li><router-link to="/ReservedList" class="header_item">予約済みのスクール</router-link></li>
            <li><router-link to="/about" class="header_item">About Aussie Journey</router-link></li>
          </div>
          <div class="sign_items">
            <router-link to="/mypage" class="login_btn">マイページ</router-link>
            <span class="login_btn" @click="logout">ログアウト</span>
          </div>
        </ul>
      </template>
      <!-- ログインしていない場合 -->
      <template v-else>
        <div class="home_aicon">
          <router-link to="/"><i class="fas fa-home size"></i></router-link>
          <h2>Aussie Journey</h2>
        </div>
        <!-- スマホ用ハンバーガーメニュー -->
        <div class="hamburger_wrapper">
          <div class="header-logo-menu">
            <div id="nav-drawer">
                <input id="nav-input" type="checkbox" class="nav-unshown">
                <label id="nav-open" for="nav-input"><span></span></label>
                <label class="nav-unshown" id="nav-close" for="nav-input"></label>
                <div id="nav-content">
                  <ul class="hamburger_menu">
                    <li class="hamburger_list"><span class="guest_btn" @click="guestUserLogin">ゲストユーザーログイン</span></li>
                    <li class="hamburger_list"><router-link to="/login" class="list_item">ログイン</router-link></li>
                    <li class="hamburger_list"><router-link to="/register" class="list_item">新規登録</router-link></li>
                  </ul>
                </div>
            </div>
              <div class="logo-area">Aussie Journey</div>
          </div>
        </div>
        <!-- メニュー一覧 -->
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
        return await this.$store.dispatch('logout'),
        this.$store.commit(`message/setContent`, {
          content: 'ログアウトしました！',
          timeout: 5000
        })
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
      this.$store.commit(`message/setContent`, {
        content: 'ゲストログインしました！',
        timeout: 5000
      })
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
}

.header_menu {
  font-size: 14px;
  padding: 20px 100px 10px 20px;
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
  margin-right: 5px
}

.guest_btn:hover {
  color: #996633;
}

.school_form {
  display:flex;
  width: 100%;
}

.school_menu {
  list-style-type: none;
  margin-top: 5px;
  margin-right: 50px;
  padding: 0;
  overflow: hidden;
  text-align: center;
  background-color: #808000;
  width: 616px;
}

.school_menu li {
  float: left;
  border-right: 1px solid #bbbbbb;
}

.school_menu li:last-child {
  border-right: none;
}

.school_menu li .header_item {
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
}

.header_item {
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
/*スマホ版は、ヘッダーメニューをハンバーガーメニューで表示*/
.hamburger_wrapper {
  padding:10px;
  background: #ccc;
}

#nav-drawer {
  position: relative;
}
/*チェックボックス等は非表示に*/
.nav-unshown {
  display:none;
}
/*アイコンのスペース*/
#nav-open {
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;
}
/*ハンバーガーの形をCSSで表現*/
#nav-open span, #nav-open span:before, #nav-open span:after {
  position: absolute;
  height: 3px;/*線の太さ*/
  width: 25px;/*長さ*/
  border-radius: 3px;
  background: #555;
  display: block;
  content: '';
  cursor: pointer;
}
#nav-open span:before {
  bottom: -8px;
}
#nav-open span:after {
  bottom: -16px;
}
/*閉じる用の薄黒箇所*/
#nav-close {
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;
}
/*メニューの中身*/
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 90%;
  max-width: 330px;/*最大幅*/
  height: 50%;
  background: #fff;
  transition: .3s ease-in-out;
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);
}
/*チェックがついたら表示させる*/
#nav-input:checked ~ #nav-close {
  display: block;
  opacity: .5;
}

#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  box-shadow: 6px 0 25px rgba(0,0,0,.15);
}

.header-logo-menu{
   display: flex;
   display: -moz-flex;
   display: -o-flex;
   display: -webkit-flex;
   display: -ms-flex;
   flex-direction: row;
   -moz-flex-direction: row;
   -o-flex-direction: row;
   -webkit-flex-direction: row;
   -ms-flex-direction: row;
 }
/*ロゴやサイトタイトルをセンタリング*/
.logo-area{text-align:center;margin:auto;}
/* 1050px以上に適用されるCSS（タブレットスマホ用） */
@media screen and (min-width: 1050px) {
  .hamburger_wrapper {
   display:none;
 }
}
/* 1050px以下に適用されるCSS（タブレットスマホ用） */
@media screen and (max-width: 1050px) {
  .home_aicon h2 {
    display:none;
  }
  .header_menu {
    font-size: 14px;
    padding: 10px 10px 10px 10px;
    background-color: whitesmoke;
  }
  .school_menu {
    display:none;
  }
  .sign_items {
    display:none;
  }

  .hamburger_list {
    font-size: 1.2em;
    font-weight: bold;
    text-align: left;
    padding-left: 5px;
    margin: 1rem auto 1rem;
    letter-spacing:.1rem;
    border-bottom: solid #1e366a 1px;
  }

  .list_item {
    text-decoration: none;
  }
}
</style>
