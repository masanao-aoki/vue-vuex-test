import {mapGetters, mapActions, mapState} from 'vuex' // Vuex モジュールを読み込む
import store from '../../store';

export default {
	data() {
		return {
			aaaaaa: store.state.test
		}
	},
	mounted: () => {
		store.dispatch('pageLoad').then(()=>{
			store.dispatch('pageLoadEnd');
		});
	},
	computed: {
		...mapState([
			'text'
		]),
		...mapState({
			test(state){
				state.nnnnn = [];
				console.log(state);
				console.log(this.aaaaaa)
				return this.aaaaaa;
			}
		}),
		...mapGetters([
			
		])
	},
	methods: {
		...mapActions({
			click: 'btnClick'
		}),
		click: (e) => {
			const test = store.state.nnnnn[0] = {};
			test[e.target.name] = e.target.innerHTML;
			// store.state.nnnnn[0] = e.target.innerHTML;
			console.log(store.state);
		}
	}
}