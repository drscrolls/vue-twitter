<template>
  <Header/>
  <div class="container">
    <div class="row mt-4">
      
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
        <div class="mt-4 card card-body ">
        <CreateTweet @createTweet="createTweet"/> 
        </div>
      </div>


      <div class="col-8">
        <h5 align="left">Tweets</h5>
      <Tweet v-for="(tweet, index) in this.tweets" 
          v-bind:key="index" 
          :username="this.user.username" 
          :tweet="tweet" 
          :index="index" 
          @favourite="toggleFavourite"/> 
      </div>

    </div>

  </div>
</template>

<script>
import Tweet from "./Tweet.vue"
import Header from "./Header.vue"
import CreateTweet from "./CreateTweet.vue"


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
      tweets: [
        {
          content: "twitter is amazing"
        },
        {
          content: "vue is fun"
        }
      ],
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
    },
    toggleFavourite(id){
      console.log("Favourited tweet ", id);
    },
    createTweet(tweet){
      // console.log("created tweet: ", tweet);
      if(tweet){
        if(tweet.type == "instant"){
          this.tweets.unshift({
            content: tweet.content
          });
        }
      }
    }
  },
  mounted(){
    this.followUser();
  }
}
</script>

