<template>
  <div class="profile_wrapper">
    <div class="menu_name">
      <h2>User edit</h2>
    </div>
    <div class="cp_iptxt">
      <h3 class="edit_name">Name</h3>
      <input
        id="name"
        type="text"
        v-model="name"
      >
    </div>
    <div class="cp_iptxt">
      <h3 class="edit_name">Email</h3>
      <input
        id="email"
        type="email"
        v-model="email"
      >
    </div>
    <div class="cp_iptxt">
      <h3 class="edit_name">Photo</h3>
      <label for="user_image">
        <img v-if="imageUrl" :src="imageUrl" class="user_image">
        <UserImage v-else :image="idData.image" />
      </label>
      <input
        id="user_image"
        type="file"
        @change="setImage"
        ref="preview"
        accept="image/*"
        name="user[image]"
        class="hidden"
      >
      <button class="delete_bottun" @click="deleteImage">削除する</button>
    </div>
    <template v-if="guestAuthenticated">
      <div class="button_panel">
        <button class="button" @click="updateIdData">編集する</button>
      </div>
    </template>
    <h3 v-else>ゲストユーザーは編集できません！</h3>
  </div>
</template>

<script>
import UserImage from '../../components/UserImage.vue';

export default {
  components: {
    UserImage,
  },
  data() {
    return {
      name: '',
      email: '',
      imageUrl: '',
    };
  },
  computed: {
    guestAuthenticated() {
      return this.$store.getters.idData['email'] !== 'guest@example.com';
    },
    idData() {
      return this.$store.getters.idData;
    }
  },
  methods: {
    setImage() {
      const image = this.$refs.preview.files[0];
      this.imageUrl = URL.createObjectURL(image);
      this.$refs.preview.value = "";
    },
    updateIdData() {
      const existsImage = (this.imageUrl !== require('../../assets/images/no_image.jpg'));
      let formData = new FormData();

      formData.append('name', this.name);
      formData.append('email', this.email);
      if (existsImage) formData.append('image', this.imageUrl);

      return this.$store.dispatch('updateIdData', formData),
      this.$store.commit(`message/setContent`, {
        content: 'ユーザー情報の変更をしました！',
        timeout: 3000
      })
    },
    deleteImage() {
      let formData = new FormData();
      formData.append('image', this.imageUrl);
      this.imageUrl = '';
      URL.revokeObjectURL(this.imageUrl);
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
  .text_top {
     vertical-align: top;
  }

  .user_image{
    cursor: pointer;
  }

  .image_field{
      padding-left: 20px;
      list-style:none;
  }

  .edit_name {
    text-align:left;
  }

  .delete_bottun {
    cursor: pointer;
  }
  /* 1200px以下に適用されるCSS */
  @media screen and (max-width: 1200px) {
    .profile_wrapper {
      background: #fafafa;
      margin: 3em 1em;
      padding: 0 1em;
      width: auto;
    }

    .text_top {
       vertical-align: top;
    }

    .user_image{
      cursor: pointer;
    }

    .image_field{
        padding-left: 20px;
        list-style:none;
    }

    .edit_name {
      text-align:left;
    }

    .delete_bottun {
      cursor: pointer;
    }
  }
</style>
