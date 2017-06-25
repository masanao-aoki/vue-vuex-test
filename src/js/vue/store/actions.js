export const actions = {
	btnClick({ commit },event) {
		commit('CLICK', event.target.innerHTML.replace(/してください。/g , "されました。"))
	},
	pageLoad({ commit }) {
		console.time('処理時間：');
		console.log('pageLoadStart');
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 1000)
		})
	},
	pageLoadEnd({ commit }) {
		console.timeEnd('処理時間：');
		console.log('pageLoadEnd');
	}
}