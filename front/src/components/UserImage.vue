<template>
  <img :src="imageUrl" alt="no_image"  class="user_image">
</template>

<script>
export default {
  props: ["image"],
  data() {
    return {
      imageUrl: require('../assets/images/no_image.jpg')
    }
  },
  created() {
    const imageExsits = (this.image !== null) && (this.image !== '');
    if (imageExsits) this.imageUrl = this.image;
  },
};
</script>
