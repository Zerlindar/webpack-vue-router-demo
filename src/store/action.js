
import {
  ADD_NUMBER
} from './mutation-types.js'

export default {
  async getCount({commit}) {
    commit(ADD_NUMBER, {number: 1})
  },
}
