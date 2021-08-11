import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    doubleCounter: (state) => {
      return state.counter;
    },
  },
  mutations: {
    plusCounter: (state, payload) => {
      state.counter = state.counter + payload ;
    },
    minusCounter: (state) => {
       state.counter --;
    }
  },
  // actions: {},
  // modules: {},
});
