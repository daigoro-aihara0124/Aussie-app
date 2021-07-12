<template>
  <div class="form_wrapper">
    <template v-if="isAuthenticated">
      <div class="menu_name">
        <h3>{{ post.name }}の編集</h3>
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
        <h3 class="edit_name">Address</h3>
        <input
          id="address"
          v-model="post.address"
        >
      </div>
      <div class="cp_iptxt">
        <h3 class="edit_name">School name</h3>
        <input
          id="name"
          type="text"
          v-model="post.name"
        >
      </div>
      <div class="cp_iptxt">
        <h3 class="edit_name">School introduction</h3>
        <textarea
          id="comment"
          v-model="post.comment"
        ></textarea>
      </div>
      <div class="cp_iptxt">
        <h3 class="edit_name">Term</h3>
        <input
          id="term"
          v-model="post.term"
        >
      </div>
      <div class="cp_iptxt">
        <h3 class="edit_name">Fee</h3>
        <input
          id="fee"
          v-model="post.fee"
        >
      </div>
      <div class="button_panel">
        <button class="button" @click="editInfo(post.id)">内容を編集する</button>
      </div>
      <div class="button_panel">
        <button class="button" @click="del(post.id)">内容を削除する</button>
      </div>
    </template>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      postid: this.$route.params.id,
      imageFile: null,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.idData['id'] == this.post.user_id;
    },
    post() {
      return this.$store.getters.post;
    },
    idData() {
      return this.$store.getters.idData;
    },
  },
  created() {
    this.$store.dispatch('detailPost', this.postid)
  },
  methods: {
    setImage(e) {
      e.preventDefault();
      this.imageFile = e.target.files[0];
    },
    async editInfo(postid) {
      let formData = new FormData();
      formData.append("image", this.imageFile);
      formData.append("id", this.post.id);
      formData.append("address", this.post.address);
      formData.append("name", this.post.name);
      formData.append("comment", this.post.comment);
      formData.append("term", this.post.term);
      formData.append("fee", this.post.fee);
      formData.append("user_id", this.post.user_id);
      await this.$store.dispatch('editInfo', { postid, formData });
      this.$router.push('/schoolIndex');
    },
    del(postid) { // 追加
      this.$store.dispatch('deleteInfo', postid)
      this.$router.push('/schoolIndex');
    }
  }
}
</script>

<style scoped>

.text_top {
   vertical-align: top;
 }

</style>
