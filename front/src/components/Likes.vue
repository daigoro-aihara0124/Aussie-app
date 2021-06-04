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
  props: ['userId', 'postId'],
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
  methods: {
    // rails側のindexアクションにリクエストするメソッド
    // fetchLikeByPostId: async function() {
    //   const res = await axios.get(`api/v1/likes/post_id=${this.postId}`)
    //   if (res.status !== 200) { process.exit() }
    //   return res.data
    // },
    // rails側のcreateアクションにリクエストするメソッド
    registerLike: async function() {
      const res = await axios.post('api/v1/posts/' + this.post.id +'/likes', {
        headers: {
          'access-token':  localStorage.getItem('access-token'),
          'uid':  localStorage.getItem('uid'),
          'client':  localStorage.getItem('client')
        }
      })
      if (res.status !== 201) { process.exit() }
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
     const like = this.likeList.find((like) => {
       return (like.user_id === this.userId)
     })
     if (like) { return like.id }
    }
  }
}
</script>
