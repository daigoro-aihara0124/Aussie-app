<template>
  <footer>
    <ul>
      <li>
        <span>Copyright Aussie Journey All Rights Reserved</span>
      </li>
    </ul>
  </footer>
</template>

<style scoped>

footer {
  background-color: whitesmoke;
  height: 80px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

ul {
  height: 100%;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

span {
  font-size: 12px;
  text-align: center;
}

/* 480px以下に適用されるCSS（スマホ用） */
@media screen and (max-width: 480px) {
  footer {
    background-color: whitesmoke;
    height: 80px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  ul {
    height: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  span {
    font-size: 10px;
    text-align: center;
  }
}


</style>
