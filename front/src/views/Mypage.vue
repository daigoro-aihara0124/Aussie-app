<template>
  <div>
    <h3>こちらは、{{ idData.name }}さんのページです。</h3>
    <h3>メールアドレスは、{{ idData.email }}です。</h3>
     <router-link to="/usersedit" class="header-item">会員情報の編集</router-link>
  </div>
</template>

<script>
export default {
computed: {
  idData() {
    return this.$store.getters.idData;
    }
  }
};
</script>
