import Vue from 'vue'
import Vuex from 'vuex' // Vuex モジュールを読み込む
import {state} from './state.js'
import {mutations} from './mutations.js'
import {actions} from './actions.js'
import {getters} from './getters.js'

Vue.use(Vuex)  // Vue で使えるようにアクティベート

const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	strict: true
})

export default store