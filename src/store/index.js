import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        goodslist: []
    },
    mutations: {
        addgoodscart(state, newgoods) {
            state.goodslist.push(newgoods)
            let oldgoods = null
            for (let item of state.goodslist) {
                if (item.iid === newgoods.iid) {
                    oldgoods = item
                }
            }
            if (oldgoods) {
                oldgoods.count += 1
            } else {
                newgoods.count = 1
                state.goodslist.push(newgoods)
            }
        }
    }
})

export default store