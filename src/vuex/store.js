import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
    user: {
        id: 0,
        email: "",
        name: "",
        access_token: "",
        refresh_token: ""
    },
}

export default new Vuex.Store({
    getters,
    state
});
