import axios from "axios"

const repositories = {
    state: {
        repos: null,
    },
    mutations: {
        setRepos(state, data) {
            state.repos = data
        }
    },
    actions: {
        nuxtServerInit3({ commit, error }, user) {
            return axios.get(`https://api.github.com/users/${user}/repos?page=1&per_page=5`, {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    }
                }).then(res => {
                    const userRepos = []
                    for (const key in res.data) {
                        userRepos.push(res.data[key])
                    }
                    commit('setRepos', userRepos)
                })
                .catch(e => error);
        },
        setRepos(context, data) {
            commit('setRepos', data)
        }
    },
    getters: {
        repos(state) {
            return state.repos
        }
    },
}
export default repositories;