<template>
  <div class="list-wrapper">
    <div class="menu-name">
      <h2>スクール一覧</h2>
    </div>
      <ul v-for="post in postData" :key="post.id">
        <li>
          <h3 class="edit-name">City</h3>
          <div class="school-name">
            {{ post.address }}
          </div>
          <h3 class="edit-name">School name</h3>
          <div class="school-name">
            {{ post.name }}
          </div>
          <div class="image-position">
            <img :src="post.image_url" class="post_image" />
          </div>
          <div class="detail-link">
            <router-link :to="{ name: 'SchoolDetail', params: { id: post.id } }">詳細ページに行く</router-link>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
// import Likes from '../../components/Likes.vue'
import { mapGetters } from 'vuex'

export default {
  // components: {
  //   Likes,
  // },
  // data() {
  //   return {
  //     likeList: []
  //   }
  // },
  created() {
    this.$store.dispatch('fetchPost')
  },
  computed: {
    ...mapGetters(['postData']),
    // count() {
    //   return this.likeList.length
    // },
  },
};
</script>

<style scoped>
  .post_image {
    height: 150px;
    width: 150px;
    margin: 17px;
    border-radius: 10px;
    border: 1px solid gray;

  }

  .list-wrapper {
    background: #fafafa;
    margin: 3em auto;
    padding: 0 1em;
    max-width: 800px;
  }


  ul li{
    list-style:none;
  }

  li {
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 3em auto;
    padding: 0 1em;
  }

  .image-position {
    text-align: left;
  }

  .detail-link {
    text-align: right;

  }
</style>
