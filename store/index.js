import Vuex from "vuex";
import userList from "./modules/userList.js";
import userFollowers from "./modules/userFollowers.js"
import userFollowing from "./modules/userFollowing.js"
import repositories from "./modules/repositories.js"


const createStore = () => {
    return new Vuex.Store({
        modules: {
            userList,
            userFollowers,
            userFollowing,
            repositories,
        },
        state: {},
        mutations: {},
        actions: {},
        getters: {},
    })
}
export default createStore