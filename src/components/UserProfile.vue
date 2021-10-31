<template>
  <div id="app">
    @{{user.username}} - {{fullName}}
    <b>Followers: {{this.followers}}</b>
    <button @click="followUser" class="btn btn-primary pointer">Follow</button>
  </div>
</template>

<script>

export default {
  name: 'UserProfile',
  data(){
    return {
      followers: 0,
      user: {
        id: 1,
        username: "dr.scrolls",
        firstname: "Andrew",
        lastname: "Nickson",
        email: "dr.scrolls@gmail.com",
        isAdmin: true
      }
    }
  },
  watch:{
    followers(newFollowerCount, oldFollowerCount){
      if(newFollowerCount > oldFollowerCount){
        console.log(`${this.user.username} has gained a follower`);
      }
    }
  },
  computed: {
    fullName(){
      return `${this.user.firstname} ${this.user.lastname}`;
    }
  },
  methods: { 
    followUser(){
      this.followers++;
    }
  },
  mounted(){
    this.followUser();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
