<template>
  <div>
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
      <i v-if="isLiked" @click="deleteLike()" class="far fa-heart unlike-btn">
        <span>{{ count }}</span>
      </i>
      <i v-else @click="registerLike()" class="far fa-heart like-btn">
        <span>{{ count }}</span>
      </i>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
  props: ['postid'],
  data() {
    return {
      likeList: [],
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
  // created() {
  //   this.$store.dispatch('createdLike').then(result => {
  //     this.likeList = result
  //   })
  // },
  methods: {
    async createdLike() {
      const res = await axios.get(`/api/v1/likes/?post_id=${this.$route.params.id}`)
      if (res.status !== 200) { process.exit() }
      return res.data
    },
    // async registerLike() {
    //   await this.$store.dispatch('registerLike', {
    //     likeList: this.likeList,
    //     post_id: this.post_id
    //   });
    // },
    registerLike: async function() {
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
    // async deleteLike() {
    //   const likeid = this.findLikeId()
    //   await this.$store.dispatch('deleteLike', likeid)
    // },
    deleteLike: async function() {
      const likeId = this.findLikeId()
      const res = await axios.delete(`api/v1/likes/${likeId}`)
      if (res.status !== 200) { process.exit() }
      this.likeList = this.likeList.filter(n => n.id !== likeId)
    },
    // ログインユーザがいいねしているlikeモデルのidを返す
   findLikeId: function() {
     const like = this.likeList.find((like) => {
       return (like.user_id == this.$store.getters.idData['id'])
     })
     if (like) { return like.id }
    }
  }
}
</script>

<style scoped>

span {
  margin-left: 10px;
}

.like-btn {
width: 25px;
height: 20px;
font-size: 25px;
color: #808080;
margin-left: 0px;
margin-right: 20px;
cursor: pointer;
}

.unlike-btn {
width: 25px;
height: 20px;
font-size: 25px;
color: #e54747;
margin-left: 0px;
margin-right: 20px;
cursor: pointer;
}

</style>
