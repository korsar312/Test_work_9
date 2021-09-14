import {createStore} from "vuex";

const store = createStore({
    state () {
        return {
            timer: '',
            currentColor: '',

            colorChange:[
                {
                    color: 'red',
                    time: 10000,
                },
                {
                    color: 'yellow',
                    time: 3000,
                },
                {
                    color: 'green',
                    time: 15000,
                },
            ]
        }
    },
    mutations: {
        localSave(state){
            localStorage.setItem('session', state.timer + '00' + ',' + state.currentColor)
        },
    },
    actions: {
        timerUp(store, value){
            store.state.timer = value
            store.commit('localSave')
        },
        colorChange(store, value){
            store.state.currentColor = value
            store.commit('localSave')
        }
    },
    getters:{

    },
})

export default store
