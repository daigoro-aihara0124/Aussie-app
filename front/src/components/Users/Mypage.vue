<template>
  <div class="profile_wrapper">
    <UserImage :image="idData.image" />
    <div class="menu_name">
      <h3>プロフィール</h3>
    </div>
    <ul class="school_name">
      <li>NAME： {{ idData.name }}</li>
      <li>ID：  {{ idData.id }}</li>
      <li>EMAIL：  {{ idData.email }}</li>
    </ul>
    <div class="profile_menu">
      <h3>メニュー</h3>
    </div>
    <ul class="header_item">
      <li><router-link to="/usersedit" class="user_menu">会員情報の編集ページへ</router-link></li>
      <li><router-link to="/myLikes" class="user_menu">お気に入りしたスクールページ一覧へ</router-link></li>
      <li><router-link to="/reservedList" class="user_menu">予約済みのスクールリストへ</router-link></li>
    </ul>
  </div>
</template>

<script>
import UserImage from '../../components/UserImage.vue';

export default {
  components: {
    UserImage,
  },
  computed: {
    idData() {
      return this.$store.getters.idData;
    },
  },
};
</script>

<style scoped>

.profile_menu {
  text-align:left;
  font-weight:bold;
  font-size:1.2rem;
  margin: 1rem auto 1rem;
  letter-spacing:.1rem;
}

ul {
  color: #1e366a;
  border-top: solid #1e366a 1px;/*上のボーダー*/
  border-bottom: solid #1e366a 1px;/*下のボーダー*/
  padding: 0.5em 0 0.5em 1.5em;
}

ul li {
  line-height: 1.5;
  padding: 0.5em 0;
  text-align: left;
  list-style:none;
}

@media screen and (max-width: 1200px) {
  .profile_wrapper {
    background: #fafafa;
    margin: 3em 1em;
    padding: 0 1em;
    width: auto;
  }

  .profile_menu {
    text-align:left;
    font-weight:bold;
    font-size:1.2rem;
    margin: 1rem auto 1rem;
    letter-spacing:.1rem;
  }

  ul {
    color: #1e366a;
    border-top: solid #1e366a 1px;/*上のボーダー*/
    border-bottom: solid #1e366a 1px;/*下のボーダー*/
    padding: 0.5em 0 0.5em 1.5em;
  }

  ul li {
    line-height: 1.5;
    padding: 0.5em 0;
    text-align: left;
    list-style:none;
  }
}


</style>
