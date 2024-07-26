import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user:{}

    },
    mutations: { //sync
        me(state,manager){
            state.user=manager;
        },



    },
    actions: { //async

    },
    getters:{

    },
    modules: {
    }
})

