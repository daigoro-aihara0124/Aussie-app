<template>
  <div>
    <button v-if="isLiked" @click="deleteLike()">
      いいねを取り消す {{ count }}
    </button>
    <button v-else @click="registerLike()">
      いいねする {{ count }}
    </button>
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
    registerLike: async function() {
      console.log(this.postid);
        const res = await axios.post('api/v1/likes', { post_id: this.$route.params.id }, {
        headers: {
          'access-token':  localStorage.getItem('access-token'),
          'uid':  localStorage.getItem('uid'),
          'client':  localStorage.getItem('client')
        }
      })
      if (res.status !== 201) { process.exit() }
      this.createdLike().then(result => {
       this.likeList = result
     })
    },
    // rails側のdestroyアクションにリクエストするメソッド
    deleteLike: async function() {
      const likeId = this.findLikeId()
      const res = await axios.delete(`api/v1/likes/${likeId}`)
      if (res.status !== 200) { process.exit() }
      this.likeList = this.likeList.filter(n => n.id !== likeId)
    },
    // ログインユーザがいいねしているlikeモデルのidを返す
   findLikeId: function() {
     console.log(this.post.user_id);
     const like = this.likeList.find((like) => {
       return (like.user_id === this.post.user_id)
     })
     if (like) { return like.id }
    }
  }
}
</script>
