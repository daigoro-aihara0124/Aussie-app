<template>
  <div class="about_wrapper">
    <div class="about_name">
      <h2>About</h2>
    </div>
        <div class="about_field">
          <p>このアプリは、海外の学校と留学を志望する人を繋げたいという目的で作成しました。</p>
          <br>
          <p>私自身、オーストラリアへの留学経験があり、留学エージェント選びからとても苦労した経験があります。
            もっと多くの人が手軽に海外に行けるように、アプリで旅行の予約をするような感覚で利用できるサービスを作りたいと思ってます！</p>
          <br>
          <p>使用言語は、フロントエンドをVue.js、バックエンドをRailsで構成しております。SPAでアプリを作成しました。</p>
          <br>
          <p>内容としては、ログイン機能や学校の投稿、お気に入り機能、予約機能が利用できます。</p>
          <br>
          <p>今後もこのアプリがユーザーにとってより使いやすいアプリになるように様々な機能をアップデートしていきます！！</p>
          <br>
          <p>ぜひ一度このアプリを触っていただけると光栄です。</p>
        </div>
  </div>
</template>

<style scoped>
.about_wrapper {
  background: #fafafa;
  margin: 3em auto;
  padding: 1em 1em;
  max-width: 1000px;
}

.about_name {
  text-align:left;
  font-weight:bold;
  font-size:1.2rem;
  margin-bottom: 30px;
  letter-spacing:.1rem;
  border-bottom: solid #1e366a 1px;
}

.about_field {
  margin-top: 20px;
  text-align:left;
}

.about_field p {
  font-size: 20px;
}
</style>
