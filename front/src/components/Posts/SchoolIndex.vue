<template>
  <div class="list_wrapper">
    <div class="menu_name">
      <h2>School list</h2>
    </div>
      <ul>
        <li v-for="post in postData" :key="post.id">
          <h3 class="edit_name">City</h3>
          <div class="school_name">
            {{ post.address }}
          </div>
          <h3 class="edit_name">School name</h3>
          <div class="school_name">
            No.{{ post.id }}<br>{{ post.name }}
          </div>
          <div class="image_position">
            <img :src="post.image_url" class="post_image" />
          </div>
          <div class="detail_link">
            <router-link :to="{ name: 'SchoolDetail', params: { id: post.id } }" class="user_menu">詳細ページに行く</router-link>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created() {
    this.$store.dispatch('fetchPost')
  },
  computed: {
    ...mapGetters(['postData'])
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

  .list_wrapper {
    background: #fafafa;
    margin: 3em auto;
    padding: 1em 1em;
    max-width: 800px;
  }

  li {
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 3em auto;
    padding: 0 1em;
  }

  .image_position {
    text-align: left;
  }

  .detail_link {
    text-align: right;
  }

</style>
