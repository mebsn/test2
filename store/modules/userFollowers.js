import axios from "axios"

const allFollowers = {
    state: {
        usersFollowersData: null,
    },
    mutations: {
        setFollowers(state, followers) {
            state.usersFollowersData = followers
        }
    },
    actions: {
        nuxtServerInit1({ commit }, user) {
            return axios.get(`https://api.github.com/users/${user}/followers?page=1&per_page=5`, {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }).then(res => {
                    const userFollowersArray = []
                    for (const key in res.data) {
                        userFollowersArray.push(res.data[key])
                    }
                    commit('setFollowers', userFollowersArray)
                })
                .catch(e => error(e));
        },
        setFollowers(context, followers) {
            commit('setFollowers', followers)
        }
    },
    getters: {
        usersFollowersData(state) {
            return state.usersFollowersData
        }
    },
}
export default allFollowers;