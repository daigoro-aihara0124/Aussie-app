<template>
  <div>
    <div class="form_wrapper">
      <div class="menu_name">
        <h2>Reservation form</h2>
      </div>
      <div class="school_name">
        <h3>No.{{ post.id }}<br>{{ post.name }}</h3>
      </div>
      <div class="cp_iptxt">
        <h3 class="edit_name">開始日</h3>
        <Datepicker :language="ja" class="date" placeholder="日付を選択してください" format="yyyy-MM-dd"
          id="start_date" v-model.lazy="reserve.start_date">
        </Datepicker>
      </div>
      <div class="cp_iptxt">
        <h3 class="edit_name">終了日</h3>
        <Datepicker :language="ja" class="date" placeholder="日付を選択してください" format="yyyy-MM-dd"
          id="end_date" v-model.lazy="reserve.end_date">
        </Datepicker>
      </div>
      <div class="cp_iptxt">
        <h3 class="edit_name">日数</h3>
        <input
          id="total_days"
          v-model.lazy="total_days"
        >
      </div>
      <div class="cp_iptxt">
        <h3 class="edit_name">合計金額</h3>
        <input
          id="total_fee"
          v-model.lazy="total_fee"
        >
      </div>
      <div class="button_panel">
        <button class="button" @click="reseveSchool">以上の内容で予約する</button>
      </div>
    </div>
    <SchoolDetail/>
  </div>
</template>

<script>
import SchoolDetail from '../../components/Posts/SchoolDetail.vue';
import Datepicker from 'vuejs-datepicker';
import {ja} from 'vuejs-datepicker/dist/locale'

export default {
  components : {
    Datepicker,
    SchoolDetail
  },
  data() {
    return {
      ja:ja,
      format: 'yyyy-MM-dd',
      reserve: {
        start_date: null,
        end_date: null,
        post_id: this.$route.params.id,
      },
    }
  },
  computed: {
    total_fee: function() { return this.post.fee * this.total_days },
    total_days: function() { return ((this.reserve.end_date - this.reserve.start_date) / 86400000 + 1 )},
    post() {
      return this.$store.getters.post;
    },
    isAuthenticated() {
      return this.$store.getters.idData['email'] !== 'guest@example.com';
    },
    reserveAuthenticated() {
      return this.$store.getters.idData['id'] !== this.$store.getters.reserve['user_id']
    },
  },
  created() {
    this.$store.dispatch('detailPost', this.reserve.post_id)
  },
  methods: {
    reseveSchool: async function(e) {
      if (this.reserve.start_date == null || this.reserve.end_date == null) {
        alert("入力に誤りがあります")
        e.preventDefault();
      }
      else if (this.total_days < 7) {
        alert("予約は最低7日以上からです。")
        e.preventDefault();
      }
      else {
        let result = confirm("この内容で予約しますか?")
        if(result) {
          await this.$store.dispatch('reserveSchool', {
            post_id: this.reserve.post_id,
            start_date: this.reserve.start_date,
            end_date: this.reserve.end_date,
            total_days: this.total_days,
            total_fee: this.total_fee
          })
          this.$store.commit(`message/setContent`, {
            content: '予約が完了しました！',
            timeout: 5000
          })
          this.$router.push('/reservedList');
        }
        else {
          e.preventDefault();
          return;
        }
      }
    },
  }
}
</script>

<style scoped>

  .date {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 100%;
  }

</style>
