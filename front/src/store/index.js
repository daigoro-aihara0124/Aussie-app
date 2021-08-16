import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import post from "./modules/post";
import reserve from "./modules/reserve";
import message from "./modules/message";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    post,
    reserve,
    message
  },
});
