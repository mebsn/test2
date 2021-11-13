import axios from "axios"

const allFollowing = {
    state: {
        userFollowingData: null,
    },
    mutations: {
        setFollowing(state, following) {
            state.userFollowingData = following
        }
    },
    actions: {
        nuxtServerInit2({ commit, error }, user) {
            return axios.get(`https://api.github.com/users/${user}/following?page=1&per_page=5`, {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }).then(res => {
                    const userFollowingArray = []
                    for (const key in res.data) {
                        userFollowingArray.push(res.data[key])
                    }
                    commit('setFollowing', userFollowingArray)
                })
                .catch(e => error);
        },
        setFollowing(context, following) {
            commit('setFollowing', following)
        }
    },
    getters: {
        usersFollowingData(state) {
            return state.userFollowingData
        }
    },
}
export default allFollowing;