import {
  ADD_NUMBER,
} from './mutation-types.js'


export default {
	[ADD_NUMBER](state, {
		number
	}) {
		state.countNumber += number;
	},
}
