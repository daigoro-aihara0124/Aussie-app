<template>
  <div>
    <br><br>
    <h2>こちらは{{ post.name }}の予約ページです。</h2>
    <br><br>
    <SchoolDetail/>
    <br><br>
      <label for="start_date">開始日：</label>
      <Datepicker :language="ja" class="date" placeholder="日付" format="yyyy-MM-dd"
        id="start_date" v-model="reserve.start_date">
      </Datepicker>
      <br><br>
      <label for="end_date">終了日：</label>
      <Datepicker :language="ja" class="date" placeholder="日付" format="yyyy-MM-dd"
        id="end_date" v-model="reserve.end_date">
      </Datepicker>
    <br><br>
    <br><br>
    <button @click="reseveSchool">以上の内容で予約する</button>
  </div>
</template>

<script>
import SchoolDetail from '../../components/Posts/SchoolDetail.vue';
import Datepicker from 'vuejs-datepicker';
import {ja} from 'vuejs-datepicker/dist/locale'
import axios from 'axios'

export default {
  components : {
    Datepicker,
    SchoolDetail
  },
  data() {
    return {
      ja:ja,
      format: 'yyyy-MM-dd',
      postid: this.$route.params.id,
      reserve: {
        start_date: null,
        end_date: null
      }
    }
  },
  computed: {
    post() {
      return this.$store.getters.post;
    },
    // postData() {
    //   return this.$store.getters.postData;
    // },
  },
  created() {
    this.$store.dispatch('detailPost', this.postid)
  },
  methods: {
    reseveSchool: async function() {
      console.log(this.post.id);
        const res = await axios.post('api/v1/reserves', {
          post_id: this.postid,
          start_date: this.reserve.start_date,
          end_date: this.reserve.end_date
        }, {
        headers: {
          'access-token':  localStorage.getItem('access-token'),
          'uid':  localStorage.getItem('uid'),
          'client':  localStorage.getItem('client')
        }
      })
      if (res.status !== 201) { process.exit() }
    },
    // reseveSchool: async function() {
    //   await this.$store.dispatch('reserveSchool', {
    //     postid: this.postid,
    //     start_date: this.startDate,
    //     end_date: this.end_date
    //   })
    // },
  }
}
</script>

<style scoped>

  .date {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
</style>
