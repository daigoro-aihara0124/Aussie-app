<template>
  <div class="message_area" v-show="message">
    <h2 class="message">{{ message }}</h2>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      //メッセージストアのステートにセットされてある「メッセージ内容」を返す
      ...mapState({
        message: state => state.message.content
      })
    }
  }
</script>

<style scoped>
  .message_area .message {
    font-size: 1.5em;
  }


</style>
