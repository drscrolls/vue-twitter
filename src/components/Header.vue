<template>
 <!-- Image and text -->
  <nav class="navbar px-3 navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/">
      <img src="../assets/twitter-128.png" width="30" height="30" class="d-inline-block align-top" alt="">
      Twitter
    </router-link>
    <ul class="nav w-75">
      <li class="nav-item">
        <router-link class="nav-link active text-white" to="/">Home</router-link>
      </li>
    </ul>
    
    <div class="form-inline navbar-brand m-0 p-0" v-if="this.user">
      <font class="text-white my-4 mx-2">{{username}}</font>
      <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg" width="30" height="30" class="d-inline-block align-top rounded-circle" alt="">
    </div>
  </nav>
  
</template>

<script>
import { useStore } from 'vuex';


export default {
  name: 'Header',
  data(){
    return{
      user: null,
    }
  },
  methods: {
    favouriteTweet(id){
      this.$emit("favourite", id);
    }
  },
  computed:{
    username(){
      return this.user ? this.user.username : "could not get username";
    }
  },
  mounted(){
      const store = useStore();
      console.log("store",store);
      this.user = store.state.User.user;
  }
}
</script>

<style scoped>

</style>