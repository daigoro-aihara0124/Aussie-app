<template>
  <div class="detail_wrapper">
    <div class="menu_name">
      <h2>School details</h2>
    </div>
    <div class="like_position">
      <likes :postid ="postid"></likes>
    </div>
    <div class="school_name">
      <h3>No.{{ post.id }}<br>{{ post.name }}</h3>
    </div>
    <ul>
      <li>
        <img :src="post.image_url" class="post_image" />
      </li>
      <div class="school_name">
        <h3>Information</h3>
      </div>
      <li>
        <div class="school_name">
          <label for="address">City:</label>
          <p>{{ post.address }}</p>
        </div>
        <div class="school_name">
          <label for="comment">Introduction:</label>
          <p>{{ post.comment }}</p>
        </div>
        <div class="school_name">
          <label for="term">Term:</label>
          <p>{{ post.term }}</p>
        </div>
        <div class="school_name">
          <label for="fee">Fee(Per day):</label>
          <p>¥{{ post.fee | addComma }}〜</p>
        </div>
        <div class="school_name">
          <label for="user_id">Host number:</label>
          <p>{{ post.user_id }}</p>
        </div>
        <div class="reserve_link">
          <router-link :to="{ path: `/reserves/${post.id}` }" class="user_menu">予約する</router-link>
        </div>
        <div class="edit_link">
          <template v-if="isAuthenticated">
            <router-link :to="{ path: `/posts/${post.id}/edit` }" class="user_menu">編集ページ</router-link>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Likes from '../../components/Likes/Likes.vue'

export default {
  components: {
    Likes,
  },
  data() {
    return {
      postid: this.$route.params.id,//id→postidに変更
      imageFile_url: null,
    }
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
    this.$store.dispatch('detailPost', this.postid);
  }
};
</script>

<style scoped>
  .post_image {
    height: 400px;
    width: 600px;
    margin: 17px;
    border-radius: 10px;
    border: 1px solid gray;
  }

  .detail_wrapper {
    background: #fafafa;
    margin: 3em auto;
    padding: 1em 1em;
    max-width: 1000px;
  }

  li {
    border-radius: 10px;
    border: 1px solid #ccc;
    margin: 3em auto;
    padding: 0 1em;
  }

  p {
    margin-left: 2rem;
  }

  .like_position {
    text-align: right;
  }

  .reserve_link {
    font-size: 1.2em;
    font-weight: bold;
    text-align: right;
    margin: 1.2rem auto 1.2rem;
    letter-spacing:.1rem;
    border-bottom: solid #1e366a 1px;/*下のボーダー*/
  }

  .edit_link {
    font-size: 1.2em;
    font-weight: bold;
    text-align: right;
    margin: 1rem auto 1rem;
    letter-spacing:.1rem;
  }

  /* 480px以下に適用されるCSS（スマホ用） */
@media screen and (max-width: 480px) {
  .post_image {
    height: 200px;
    width: 300px;
    margin: 5px;
    border-radius: 10px;
    border: 1px solid gray;
  }
}

</style>
