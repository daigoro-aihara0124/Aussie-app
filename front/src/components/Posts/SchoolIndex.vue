<template>
  <div class="list_container">
    <div class="search_box">
      <h2>Search Form</h2>
      <input id="input_box" type="text" v-model="search" placeholder="キーワードを入力" >
    </div>
    <div class="list_wrapper">
      <div class="menu_name">
        <h1>School list</h1>
      </div>
        <ul>
          <li v-for="post in search_postData" :key="post.id">
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      search: '',
    }
  },
  created() {
    this.$store.dispatch('fetchPost')
  },
  computed: {
    ...mapGetters(['postData']),
    search_postData(){
      return this.postData.filter(post => {
        return post.name.includes(this.search) ||
        post.address.includes(this.search)
      })
    }
  }
}
</script>

<style scoped>
  .list_container {
    width: 100%;
  }

  .list_container .search_box {
    text-align: left;
    padding: 20px 100px 10px 50px;
    width: auto;
  }

  #input_box {
    width:200px;
    height:40px;
    border-radius:2px;
    outline:0;
    padding-left: 10px;
    margin-bottom:10px;
    background:#eee;
  }

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

  /* 480px以下に適用されるCSS（スマホ用） */
  @media screen and (max-width: 480px) {
    .search_box {
      text-align: center;

    }

    .search_box h2 {
      font-size: 20px;
    }

    #input_box {
      width:150px;
      height:30px;
      border-radius:2px;
      outline:0;
      background:#eee;
    }

    .list_wrapper {
      background: #fafafa;
      margin: 1em auto;
      padding: 1em 1em;
      max-width: 800px;
    }

  }


</style>
