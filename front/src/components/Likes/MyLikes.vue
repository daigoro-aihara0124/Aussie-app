<template>
  <div class="form_wrapper">
    <div class="likeList_name">
      <h2>Favorite School</h2>
    </div>
      <div class="link_description">
        <h3>School No.(detail pages)</h3>
      </div>
      <ul v-for="like in likeList" :key="like.id">
        <template v-if="like.user_id == idData.id">
          <li class="list_number">
            <router-link :to="{ path: `/posts/${like.post_id}` }" class="link_menu">No.{{ like.post_id }}</router-link>
          </li>
        </template>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  props: ['postid', 'post'],
  data() {
    return {
      likeList: []
    }
  },
  computed: {
    // ログインユーザが既にいいねしているかを判定する
    isLiked() {
      if (this.likeList.length === 0) { return false }
      return Boolean(this.findLikeId())
    },
    idData() {
      return this.$store.getters.idData;
    },
  },
  created: function() {
    this.createdLike().then(result => {
      this.likeList = result
    })
  },
  methods: {
    async createdLike() {
      var res = await axios.get(`/api/v1/likes`)
      if (res.status !== 200) { process.exit() }
      return res.data
    },
  },
  findLikeId: function() {
    const like = this.likeList.find((like) => {
      return (like.user_id == this.$store.getters.idData['id'])
    })
    if (like) { return like.id }
  }
}
</script>

<style scoped>

.likeList_name {
  text-align:left;
  font-weight:bold;
  font-size:1.2rem;
  margin-bottom: 30px;
  letter-spacing:.1rem;
}

.link_description {
  margin-bottom: 30px;
  text-align:left;
  font-weight:bold;
  font-size:1.0rem;
  border-bottom: solid #1e366a 1px;
}

.list_number {
  text-align:left;
  font-weight:bold;
  font-size:1.2rem;
  margin: 1rem auto 1rem;
  letter-spacing:.1rem;
}
</style>
