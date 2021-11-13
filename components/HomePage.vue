
<template>
  <div class="mainContent">
    <div class="text">List Of Users</div>
    <ul>
    <li class="userContent" v-for="user in userList" :key="user.id" @click="getUserInfo([user.login , user.avatar_url])">
        <img :src="user.avatar_url"/>
        <div>{{user.login}}</div>
    </li>
    </ul>
  </div>
</template>

<script>
export default{
  async created() {
    await this.$store.dispatch('nuxtServerInit')
  },
  computed: {
    userList() {
      return this.$store.state.userList.usersData;
    }
  },
  methods: {
    getUserInfo([userName, image]) {
      this.$router.push({path: '/' + userName, params:[ {userName: userName}, {image: image }]});
    }
  }
}
</script>

<style>
.mainContent {
  width:100%;
  height:98vh;
  background-color:#008080;
  margin:0;
  display:flex;
  flex-direction: column;
  align-items: center;
}
.text {
  font-size: 36px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 600;
  color:indigo;
  filter:brightness(1.2);
  margin-top:120px;
}

ul{
  display:grid;
  width:70%;
  grid-template-columns: auto auto auto auto auto;
  list-style: none;
  gap:36px;
  margin-top:120px;
}
img {
  width:120px;
  height:120px;
  margin-bottom:8px;
  border-radius: 25px;
  border-width: 3px;
  border-style: solid;
  border-color:crimson;
}

li{
  display:flex;
  flex-direction: column;
  align-items: center;
  font-size:24px;
  font-weight: 800;
  cursor:pointer;
  color:indigo;
}
li:hover {
  animation: mymove 3s infinite linear;
}
@keyframes mymove {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.25);
  }
}
</style>