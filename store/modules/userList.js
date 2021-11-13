import axios from "axios"

const allUsers = {
    state: {
        usersData: null,
    },
    mutations: {
        setUsers(state, users) {
            state.usersData = users
        }
    },
    actions: {
        nuxtServerInit(vuexContext, context) {
            return axios.get("https://api.github.com/users?page=1&per_page=10", {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }).then(res => {
                    const userArray = []
                    for (const key in res.data) {
                        userArray.push(res.data[key])
                    }
                    vuexContext.commit('setUsers', userArray)
                })
                .catch(e => context.error(e));
        },
        setUsers(vuexContext, users) {
            vuexContext.commit('setUsers', users)
        }
    },
    getters: {
        usersData(state) {
            return state.usersData
        }
    },
}
export default allUsers;