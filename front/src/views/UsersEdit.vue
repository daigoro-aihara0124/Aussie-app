<template>
  <div>
    <h3>こちらは、{{ idData.name }}さんの編集ページです。</h3>
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
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
    <button @click="updateIdData">編集する</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: '',
      email: '',
      password:'',
    };
  },
  computed: {
    idData() {
      return this.$store.getters.idData;
    }
  },
  methods: {
    updateIdData: async function() {
      await this.$store.dispatch('updateIdData', {
        name: this.name,
        email: this.email,
        password: this.password
      });
    }
  },
};
</script>
