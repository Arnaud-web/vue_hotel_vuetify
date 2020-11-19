import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: [],
        hotels:[],
        comments:[],
        url1:'http://127.0.0.1:3000/',
        url:'https://afternoon-coast-58196.herokuapp.com/'
    },
    getters: {
        getUser(){
            return this.state.user
        },

    },
    actions:{

        setUser({commit},user){
            console.log('ok set')
            commit('SET_USER',user)
        },

        setHotels({commit},hotels){
            console.log('ok set')
            commit('SET_HOTELS',hotels)
        }

    },
    mutations:{

        SET_USER (state,user){
            state.user = user
            console.log(state)
        },
        SET_HOTELS (state,hotels){
            state.hotels = hotels
            console.log(state)
        }

    }
    
})