<template>
  <div class="form_wrapper">
    <div class="menu_name">
      <h2>School registration</h2>
    </div>
    <div class="cp_iptxt">
      <h3 class="edit_name">Photo</h3>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/*"
        @change="setImage"
      >
    </div>
    <div class="cp_iptxt">
      <input
        id="address"
        v-model="post.address"
        placeholder="Address"
      >
    </div>
    <div class="cp_iptxt">
      <input
        id="name"
        type="text"
        v-model="post.name"
        placeholder="School name"
      >
    </div>
    <div class="cp_iptxt">
      <textarea
        id="comment"
        v-model="post.comment"
        placeholder="School introduction"
      ></textarea>
    </div>
    <div class="cp_iptxt">
      <input
        id="term"
        v-model="post.term"
        placeholder="Term(1 to 24 weeks)"
      >
    </div>
    <div class="cp_iptxt">
      <input
        id="fee"
        v-model="post.fee"
        placeholder="fee(Per day)"
      >
    </div>
    <template v-if="isAuthenticated">
      <div class="button_panel">
        <button class="button" @click="createInfo">内容を登録する</button>
      </div>
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
