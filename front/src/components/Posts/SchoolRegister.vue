<template>
  <div>
    <h3>学校を登録する</h3>
    <label for="image">画像: </label>
    <input
      type="file"
      id="image"
      name="image"
      accept="image/*"
      @change="setImage"
    >
    <br><br>
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
    <label for="fee">料金(1日)：</label>
    <input
      id="fee"
      v-model="post.fee"
    >
    <br><br>
    <template v-if="isAuthenticated">
      <button @click="createInfo">内容を登録する</button>
    </template>
    <h3 v-else>ゲストユーザーは登録できません。</h3>
  </div>
</template>

<script>

export default {
  data() {
    return {
      imageFile: null,
      post: {
        address: '',
        name: '',
        comment: '',
        term: '',
        fee: ''
      }
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.idData['email'] !== 'guest@example.com';
    }
  },
  methods: {
    setImage(e) {
      e.preventDefault();
      this.imageFile = e.target.files[0];
    },
    async createInfo() {
      let formData = new FormData();
      formData.append("image", this.imageFile);
      formData.append("address", this.post.address);
      formData.append("name", this.post.name);
      formData.append("comment", this.post.comment);
      formData.append("term", this.post.term);
      formData.append("fee", this.post.fee);
      await this.$store.dispatch('createInfo',formData);
      this.$router.push('/schoolIndex');
    }
  }
};
</script>
