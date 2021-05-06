<template>
  <div>
    <UserImage :image="idData.image_url" />
    <h3>こちらは、{{ idData.name }}さんのページです。</h3>
    <h3>メールアドレスは、{{ idData.email }}です。</h3>
    <template v-if="isAuthenticated">
      <router-link to="/usersedit" class="header-item">会員情報の編集ページへ</router-link>
    </template>
  </div>
</template>

<script>
import UserImage from '../views/UserImage.vue';

export default {
components: {
  UserImage,
},
computed: {
  isAuthenticated() {
    return this.$store.getters.idData['email'] !== 'guest@example.com';
  },
  idData() {
    return this.$store.getters.idData;
    }
  }
};
</script>

<style scoped>
  .user__image{
    height: 150px;
    width: 150px;
    margin: 17px;
    border-radius: 10px;
    border: 1px solid gray;
  }

</style>
