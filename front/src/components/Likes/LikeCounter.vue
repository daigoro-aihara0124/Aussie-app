<template>
  <div>
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
import axios from 'axios'
// import store from '../store';

export default {

  props: ['postid', 'post'],
  data() {
    return {
      likeList: []
    }
  },
  computed: {
    // いいね数を返す
    count() {
      return this.likeList.length
    },
    // ログインユーザが既にいいねしているかを判定する
    isLiked() {
      if (this.likeList.length === 0) { return false }
      return Boolean(this.findLikeId())
    }
  },
  created: function() {
    this.createdLike().then(result => {
      this.likeList = result
    })
  },
  methods: {
    async createdLike() {
      var res = await axios.get(`/api/v1/likes/?post_id=${this.$route.params.id}`)
      if (res.status !== 200) { process.exit() }
      return res.data
    },
  },
  findLikeId: function() {
    console.log(this.$store.getters.idData['id']);
    const like = this.likeList.find((like) => {
      return (like.user_id == this.$store.getters.idData['id'])
    })
    if (like) { return like.id }
  }
}
</script>
