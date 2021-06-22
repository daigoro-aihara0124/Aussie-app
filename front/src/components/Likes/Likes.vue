<template>
  <div>
    <button v-if="isLiked" @click="deleteLike()">
      いいねを取り消す
    </button>
    <button v-else @click="registerLike()">
      いいねする
    </button>
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
    like() {
      return this.$store.getters.like;
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
  // created() {
  //   this.$store.dispatch('createdLike')
  // },
  methods: {
    async createdLike() {
      const res = await axios.get(`/api/v1/likes/?post_id=${this.$route.params.id}`)
      if (res.status !== 200) { process.exit() }
      return res.data
    },
    async registerLike() {
      await this.$store.dispatch('registerLike', { post_id: this.$route.params.id }, {
        likeList: this.likeList
      });
    },
    // registerLike: async function() {
    //   console.log(this.postid);
    //     const res = await axios.post('api/v1/likes', { post_id: this.$route.params.id }, {
    //     headers: {
    //       'access-token':  localStorage.getItem('access-token'),
    //       'uid':  localStorage.getItem('uid'),
    //       'client':  localStorage.getItem('client')
    //     }
    //   })
     //  if (res.status !== 201) { process.exit() }
     //  this.createdLike().then(result => {
     //   this.likeList = result
     // })
    // },
    // rails側のdestroyアクションにリクエストするメソッド
    async deleteLike() {
      const likeid = this.findLikeId()
      await this.$store.dispatch('deleteLike', likeid)
    },
    // deleteLike: async function() {
    //   const likeId = this.findLikeId()
    //   const res = await axios.delete(`api/v1/likes/${likeId}`)
    //   if (res.status !== 200) { process.exit() }
    //   this.likeList = this.likeList.filter(n => n.id !== likeId)
    // },
    // ログインユーザがいいねしているlikeモデルのidを返す
   findLikeId: function() {
     console.log(this.like.id);
     const like = this.likeList.find((like) => {
       return (like.user_id == this.$store.getters.idData['id'])
     })
     if (like) { return like.id }
    }
  }
}
</script>
