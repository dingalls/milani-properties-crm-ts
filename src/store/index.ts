import Vue from "vue";
import Vuex from "vuex";
import agents from "./modules/agents";
import contacts from "./modules/contacts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    agents,
    contacts,
  },
});
