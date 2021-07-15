<template>
  <div class="container">
    <div class="bg_image">
      <div class="bg_text">
        <h2>オーストラリアへの留学をもっと気軽に</h2>
        <br>
        <section>
          <router-link to="/schoolIndex" class="link_button">さっそく探す</router-link>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 1000px
}
.bg_image {
  background-image: url('../assets/images/bg_img.jpeg');
  height: 99%;
  width: 100%;
  background-size:  cover;
  text-align:  center;    /* 文字中央寄せ */
  margin-top: 10px;    /* 余白指定 */
  border: solid 2px;      /* 枠線指定 */
}

.bg_text {                         /* 枠線指定 */
  display:  block;
  text-align: left;                 /* インラインブロックにする */
  padding: 30px 20px;                             /* 余白指定 */
  font-family: 'Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
  color: #003399;
  font-size: 1.5em;
  font-weight: bold;
}

.bg_text h3 {
  color: #808080;
}

section {
  max-width: 300px;
  margin: 0 auto;
}

.link_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  position: relative;
  background: #00FF00;
  border: 1px solid #00FF00;
  border-radius: 30px;
  box-sizing: border-box;
  padding: 0 45px 0 25px;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.1em;
  line-height: 1.3;
  text-align: left;
  text-decoration: none;
  transition-duration: 0.3s;
}

.link_button:before {
  content: '';
  width: 8px;
  height: 8px;
  border: 0;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  right: 25px;
  margin-top: -6px;
}

.link_button:hover {
  background: #fff;
  color: #228bc8;
}

.link_button:hover:before {
  border-top: 2px solid #228bc8;
  border-right: 2px solid #228bc8;
}

</style>
