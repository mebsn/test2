<template>
<div class="mainContainer">
    <div class="singleUser">
        <div class="userContent">
            <div class="subTitle">{{$route.params.userName}}</div>
            <img :src='$route.params.image'/>
            <div class="friendList">
                <div>
                    <div class="subTitle">Followers</div>
                    <li class="userFollowersContent" v-for="follower in followersList" :key="follower.id" @click="getUser(follower.login )">
                        <div>{{follower.login}}</div>
                    </li>
                </div>
                <div>
                    <div class="subTitle">Following</div>
                    <li class="userFollowingContent" v-for="follower in followingList" :key="follower.id" @click="getUser(follower.login )">
                        <div>{{follower.login}}</div>
                    </li>
                </div>
            </div>
            <div class="repos">
                <div class="subTitle">Repositories </div>
                <li class="userRepos" v-for="repos in reposList" :key="repos.id">
                        <div>name: {{repos.name}}</div>
                        <div><a :href='repos.contributors_url'>contributors</a></div>
                </li>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        followersList() {
            return this.$store.state.userFollowers.usersFollowersData;
        },
        followingList() {
            return this.$store.state.userFollowing.userFollowingData;
        },
        reposList() {
            return this.$store.state.repositories.repos;
        }

    },
    methods: {
        getUser(userName) {
            this.$router.push({path: '/' + userName, params: {userName: userName}});
    }
    },
    async created() {
        await this.$store.dispatch('nuxtServerInit1', this.$route.params.userName);
        await this.$store.dispatch('nuxtServerInit2', this.$route.params.userName);
        await this.$store.dispatch('nuxtServerInit3', this.$route.params.userName)

    },
}
</script>

<style>
.mainContainer {
    width: 100%;
    height: 98vh;
    background-color:	#1a0000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.userContent {
    margin-top: 20px;
}

.friendList {
    display: flex;
    flex-direction: row;
    width: 600px;
    justify-content: space-between;
}

.singleUser {
    width: 60%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color:dimgray; */
    font-size: 24px;
    font-weight: 800;
}
.repos {
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
}
.userRepos {
    font-size: 22px;
    color:mediumturquoise;
}
.userContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    font-weight: 800;
    cursor: pointer;
    color: indigo;
}

.subTitle {
    font-size: 28px;
    color: orangered;
    margin-top:15px;
}
img {
    margin-top:15px;
}
</style>
