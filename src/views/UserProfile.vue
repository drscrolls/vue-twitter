<template>
  <Header/>
  <div class="container">
    <div class="row mt-4" v-if="this.user">
      <!-- <h2>{{this.userId}}</h2> -->
      <!-- <p>{{this.allUsers[this.userId]}}</p> -->
      <div fluid="lg" class="col-4">
        <h5 align="left">Profile</h5>

        <div class="card card-body text-center">
          @{{user.username}} - {{fullName}}
          <b>Followers: {{this.followers}}</b>
          <div class="mt-2 w-25 align-self-center" align="center">
            <span class="bg-light small rounded d-flex mb-2" v-if="this.user.isAdmin">
              <center class="text-muted w-100">Admin</center>
            </span>
            <button @click="followUser" class="btn btn-primary pointer btn-sm text-center">Follow
              <span class="fa fa-user"></span>
            </button>
          </div>
        </div>

        <div class="mt-4 card card-body">
        <CreateTweet @createTweet="createTweet"/> 
        </div>
      </div>


      <div class="col-8">
        <h5 align="left">Tweets</h5>
      <Tweet v-for="(tweet, index) in this.user.tweets" 
          v-bind:key="index" 
          :username="this.user.username" 
          :tweet="tweet" 
          :index="index" 
          @favourite="toggleFavourite"/> 
      </div>

    </div>
    <div class="row mt-4" v-else>
      <center>No user found</center>
    </div>
  </div>
</template>

<script>
import Tweet from "../components/Tweet.vue"
import Header from "../components/Header.vue"
import CreateTweet from "../components/CreateTweet.vue"
import { users } from "../assets/users"

export default {
  name: 'UserProfile',
  components:{
    Tweet,
    Header,
    CreateTweet
  },
  data(){
    return {
      followers: 0,
      user: null
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
    },
    userId(){
      return this.$route.params.userId;
    }
  },
  methods: { 
    followUser(){
      this.followers++;
    },
    toggleFavourite(id){
      console.log("Favourited tweet ", id);
    },
    createTweet(tweet){
      // console.log("created tweet: ", tweet);
      if(tweet){
        if(tweet.type == "instant"){
          this.user.tweets.unshift({
            content: tweet.content
          });
        }
      }
    }
  },
  mounted(){
    this.followUser();
    const allUsers = users.users;
    this.user = allUsers[this.userId];
  }
}
</script>

