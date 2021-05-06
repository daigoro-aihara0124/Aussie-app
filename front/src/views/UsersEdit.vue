<template>
  <div>
    <h3>こちらは、{{ idData.name }}さんの編集ページです。</h3>
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
    <li class="image__field">
      <label for="user_image" class="text__top">プロフィール画像：</label>
      <label for="user_image">
        <img v-if="imageFile" :src="imageUrl" class="user__image">
        <UserImage v-else :image="idData.image_url" />
      </label>
      <input
        id="user_image"
        type="file"
        @change="imagePreview($event)"
        ref="imagePreview"
        accept="image/*"
        name="user[image]"
        class="hidden"
      >
    </li>
    <br><br>
    <button @click="updateIdData">編集する</button>
  </div>
</template>

<script>
import UserImage from '../views/UserImage.vue';

export default {
  components: {
    UserImage,
  },
  data() {
    return {
      name: '',
      email: '',
      imageUrl: null,
      imageFile: null,
    };
  },
  computed: {
    idData() {
      return this.$store.getters.idData;
    }
  },
  methods: {
    imagePreview() {
      const image = this.$refs.imagePreview.files[0];
      this.imageFile = image;
      this.imageUrl = URL.createObjectURL(image);
      this.$refs.imagePreview.value = '';
    },
    updateIdData() {
      const isNotNoImage = (this.imageUrl !== require('../assets/images/no_image.jpg'));

      let formData = new FormData();

      formData.append('name', this.name);
      formData.append('email', this.email);
      if (isNotNoImage) formData.append('image', this.imageFile);

      return this.$store.dispatch('updateIdData', formData);
    }
  },
  created() {
    this.name = this.idData.name;
    this.email = this.idData.email;
  }
};
</script>

<style scoped>
.text__top {
   vertical-align: top;
 }

.image__field{
    padding-left: 20px;
    list-style:none;

  }
  .user__image {
    height: 150px;
    width: 150px;
    border-radius: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }

</style>
