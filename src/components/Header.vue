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
    
    <form class="form-inline navbar-brand m-0 p-0">
      <font class="text-white my-4 mx-2">Andy</font>
      <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg" width="30" height="30" class="d-inline-block align-top rounded-circle" alt="">
    </form>
  </nav>
  
</template>

<script>
export default {
  name: 'Header',
  methods: {
    favouriteTweet(id){
      // console.log("tweet id = ", id);
      this.$emit("favourite", id);
    }
  }
}
</script>

<style scoped>

</style>