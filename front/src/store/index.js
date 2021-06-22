import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import post from "./modules/post";
import like from "./modules/like";
import reserve from "./modules/reserve";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    post,
    like,
    reserve,
  },
});
