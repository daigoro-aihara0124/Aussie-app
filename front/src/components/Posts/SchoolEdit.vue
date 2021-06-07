<template>
  <div>
    <template v-if="isAuthenticated">
      <h3>こちらは、あなた(ID: {{ post.user_id }})の編集ページです。</h3>
        <br><br>
        <label for="image">画像：</label>
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
        <label for="fee">料金：</label>
        <input
          id="fee"
          v-model="post.fee"
        >
        <br><br>
          <button @click="editInfo(post.id)">内容を編集する</button>
        <br><br>
          <button @click="del(post.id)">内容を削除する</button>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      postid: this.$route.params.id,
      imageFile: null,
      post: {
        id: '',
        address: '',
        name: '',
        comment: '',
        term: '',
        fee: '',
        user_id: '',
      }
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.idData['id'] == this.post.user_id;
    }
  },
  mounted: function() {
    this.setPostEdit(this.postid);
  },
  methods: {
    setPostEdit(postid){
      axios.get(`api/v1/posts/${postid}`).then(res => {
        this.post.image_url = res.data.image_url;
        this.post.id = res.data.id;
        this.post.address = res.data.address;
        this.post.name = res.data.name;
        this.post.comment = res.data.comment;
        this.post.term = res.data.term;
        this.post.fee = res.data.fee;
        this.post.user_id = res.data.user_id
      });
    },
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
      await axios.put(`api/v1/posts/${postid}`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'access-token':  localStorage.getItem('access-token'),
          'uid':  localStorage.getItem('uid'),
          'client':  localStorage.getItem('client')
        }
      })
      .then(() => {
        this.$router.push('/schoolIndex');
      }, (error) => {
        console.log(error);
      });
    },
    async del(postid) {
      await axios.delete(`api/v1/posts/${postid}`, {
        headers: {
          'content-type': 'multipart/form-data',
          'access-token':  localStorage.getItem('access-token'),
          'uid':  localStorage.getItem('uid'),
          'client':  localStorage.getItem('client')
        }
      })
      .then(() => {
        this.$router.push('/schoolIndex');
      }, (error) => {
        console.log(error);
      });
    }
  }
};
</script>


<style scoped>
li {
  list-style:none;
}

.text_top {
   vertical-align: top;
 }

</style>
