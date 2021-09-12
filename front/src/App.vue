<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet">
    <Header/>
    <FlashMessage/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import FlashMessage from './components/FlashMessage.vue';

export default {
  components: {
    Header,
    Footer,
    FlashMessage
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
  box-sizing: border-box;
}
/* マイページ */
.user_image{
  height: 150px;
  width: 150px;
  margin: 17px;
  border-radius: 50%;
  border: 1px solid gray;
}
.profile_wrapper {
  background: #fafafa;
  margin: 3em auto;
  padding: 0 1em;
  width: 1000px;
}
/* ページタイトル */
.menu_name {
text-align:left;
font-weight:bold;
font-size:1.2rem;
margin: 1rem auto 1rem;
letter-spacing:.1rem;
}
/* ログイン、登録機能、編集機能、お気に入り一覧共通 */
.form_wrapper {
  background: #fafafa;
  margin: 3em auto;
  padding: 1em 1em;
  width: 1000px;
}
/* 1200px以下に適用されるCSS */
@media screen and (max-width: 1200px) {
  .form_wrapper {
    background: #fafafa;
    margin: 3em 1em;
    padding: 1em 1em;
    width: auto;
  }
}

ul li {
  list-style:none;
}

.edit_name {
  text-align:left;
}

h1.title {
  text-align: center;
  padding: 1em 0;
  font-family: 'Open Sans', sans-serif;
}

.cp_iptxt {
position: relative;
width: 90%;
margin: 40px 3%;
}

.cp_iptxt input {
font: 15px/24px sans-serif;
box-sizing: border-box;
width: 100%;
padding: 0.3em;
padding-left: 30px;
letter-spacing: 1px;
border: 0;
}

.cp_iptxt textarea {
font: 15px/24px sans-serif;
box-sizing: border-box;
width: 100%;
padding: 0.3em;
padding-left: 30px;
letter-spacing: 1px;
border: 0;
}

.cp_iptxt input:focus {
outline: none;
}

.cp_iptxt input:focus::after {
outline: none;
}

.cp_iptxt textarea:focus {
outline: none;
}

.cp_iptxt textarea:focus::after {
outline: none;
}

.cp_iptxt::after {
	display: block;
	width: 100%;
	height: 4px;
	margin-top: -1px;
	content: '';
	border-width: 0 1px 1px 1px;
	border-style: solid;
	border-color: #da3c41;
}

.button_panel {
  margin: 2em 0 0;
}

.button_panel .button {
  background: #f16272;
  border: none;
  border-radius:30px;
  color: #fff;
  cursor: pointer;
  height: 50px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.3s ease-in-out;
  width: 50%;
}

.button:hover {
  background: #ee3e52;
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

.input_icon {
  position: relative;
  margin-top: -25px;
  margin-left: -20px;
}
.hidden {
  display: none;
}
/* 投稿一覧、詳細 */
.school_name {
  font-size: 1.2em;
  font-weight: bold;
  text-align: left;
  margin: 1.2rem auto 1.2rem;
  letter-spacing:.1rem;
  border-bottom: solid #1e366a 1px;/*下のボーダー*/
}
/* リンク用 */
.user_menu {
  transition: .4s;
  text-decoration: none;
}
.user_menu:hover {
  color: #996633;
}

.link_menu {
  transition: .4s;
}
.link_menu:hover {
  color: #996633;
}
</style>
