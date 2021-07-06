<template>
  <div class="detail-wrapper">
    <div class="menu-name">
      <h2>スクール詳細</h2>
    </div>
    <div class="like-position">
      <likes :postid ="postid" :post ="post" ></likes>
    </div>
    <div class="school-name">
      <h3>No.{{ post.id }}<br>{{ post.name }}</h3>
    </div>
    <ul>
      <li>
        <img :src="post.image_url" class="post_image" />
      </li>
      <div class="school-name">
        <h3>Information</h3>
      </div>
      <li>
        <div class="school-name">
          <label for="address">City: </label>
          {{ post.address }}
        </div>
        <div class="school-name">
          <label for="comment">Introduction: </label>
          {{ post.comment }}
        </div>
        <div class="school-name">
          <label for="term">Term: </label>
          {{ post.term }}
        </div>
        <div class="school-name">
          <label for="fee">Fee(Per day): </label>
          ¥{{ post.fee }}〜
        </div>
        <div class="school-name">
          <label for="user_id">Host number: </label>
          {{ post.user_id }}
        </div>
        <div class="school-name">
          <router-link :to="{ path: `/reserves/${post.id}` }">To reservation page</router-link>
        </div>
        <div class="edit-link">
          <template v-if="isAuthenticated">
            <router-link :to="{ path: `/posts/${post.id}/edit` }">編集ページ</router-link>
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
    reserveAuthenticated() {
      return this.$store.getters.idData['id'] !== this.$store.getters.reserve['user_id']
    },
    post() {
      return this.$store.getters.post;
    },
    reserveDate() {
      return this.$store.getters.reserveDate;
    },
    reserve() {
      return this.$store.getters.reserve;
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

  .detail-wrapper {
    background: #fafafa;
    margin: 3em auto;
    padding: 0 1em;
    max-width: 1000px;
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

  .like-position {
    text-align: right;
  }

  .edit-link {
    font-size: 1.2em;
    font-weight: bold;
    text-align: right;
    margin: 1rem auto 1rem;
    letter-spacing:.1rem;
    border-bottom: solid #1e366a 1px;/*下のボーダー*/
  }
</style>
