<template>
  <div class="bg_image">
    <div class="bg_text">
      オーストラリアへの留学をもっと気軽に
    </div>
  </div>
</template>

<style scoped>

.bg_image {
  background-image: url('../assets/images/bg_img.jpeg');
  height: 800px;
  background-size:  cover;
  text-align:  center;    /* 文字中央寄せ */
  margin-top: 10px;    /* 余白指定 */
  border: solid 2px;      /* 枠線指定 */
}

.bg_text {
  border:  solid 1px;                             /* 枠線指定 */
  display:  inline-block;                         /* インラインブロックにする */
  padding: 10px 20px;                             /* 余白指定 */
  background-color: rgba(255, 255, 255, 0.7);
}

</style>
