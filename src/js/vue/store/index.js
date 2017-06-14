import Vue from 'vue'
import Vuex from 'vuex' // Vuex モジュールを読み込む

Vue.use(Vuex)  // Vue で使えるようにアクティベート

const store = new Vuex.Store({
	state: {  // 初期状態を作成
		counter: 0,
		text: 'クリックしてません。'
	},
	mutations: {  // 状態を変更するメソッドを宣言
		INCREMENT (state) {
			state.counter ++
		},
		CLICK(state,text) {
			console.log(text);
			state.text = text;
		}
	},
	actions: {
		BBB({ commit }, nnnn) {
			commit('CLICK', nnnn)
		}
	},
	strict: true
})

export default store