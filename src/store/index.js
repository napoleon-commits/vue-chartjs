import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        checkedNames: ["Navy", "Army", "Air Forces", "Marine Corps"],
    },
    mutations: {
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        setCheckedNames(state, checkedNames){
            state.checkedNames = checkedNames;
        }
    }
})