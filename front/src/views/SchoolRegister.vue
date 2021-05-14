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
      v-model="address"
    >
    <br><br>
    <label for="name">スクール名：</label>
    <input
      id="name"
      type="text"
      v-model="name"
    >
    <br><br>
    <label for="comment">スクール紹介：</label>
    <textarea
      id="comment"
      v-model="comment"
    ></textarea>
    <br><br>
    <label for="term">期間：</label>
    <input
      id="term"
      v-model="term"
    >
    <br><br>
    <label for="fee">料金：</label>
    <input
      id="fee"
      v-model="fee"
    >
    <br><br>
    <button @click="createInfo">内容を登録する</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      address: '',
      name: '',
      comment: '',
      term: '',
      fee: '',
      imageFile: null
    };
  },
  methods: {
    setImage(e) {
      e.preventDefault();
      this.imageFile = e.target.files[0];
    },
    async createInfo() {
      let formData = new FormData();
      formData.append("image", this.imageFile);
      formData.append("address", this.address);
      formData.append("name", this.name);
      formData.append("comment", this.comment);
      formData.append("term", this.term);
      formData.append("fee", this.fee);
      await this.$store.dispatch('createInfo',formData);
    }
  }
};
</script>
