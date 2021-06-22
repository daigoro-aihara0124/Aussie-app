<template>
  <div>
    <h2>お気に入りしているユーザーID一覧</h2>
    <tr v-for="like in likeList" :key="like.id">
      <td >{{ like.user_id }}</td>
    </tr>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../store';

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
    },
    idData() {
      return this.$store.getters.idData;
    }
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
    console.log(store.getters.idData['id']);
    const like = this.likeList.find((like) => {
      return (like.user_id == store.getters.idData['id'])
    })
    if (like) { return like.id }
  }
}
</script>
