<template>
  <div>
    <h3>学校を登録する</h3>
    <label for="address">場所：</label>
    <input
      id="address"
      v-model="post.address"
    >
    <br><br>
    <label for="name">スクール名：</label>
    <input
      id="name"
      type="text"
      v-model="post.name"
    >
    <br><br>
    <label for="comment">スクール紹介：</label>
    <textarea
      id="comment"
      v-model="post.comment"
    ></textarea>
    <br><br>
    <label for="term">期間：</label>
    <input
      id="term"
      v-model="post.term"
    >
    <br><br>
    <label for="fee">料金：</label>
    <input
      id="fee"
      v-model="post.fee"
    >
    <br><br>
    <button @click="createInfo">内容を登録する</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    async createInfo() {
      await this.$store.dispatch('createInfo', this.post);
    }
  }
};
</script>
