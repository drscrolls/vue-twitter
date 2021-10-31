<template>
  <div id="app" align="left">
    
      <div class="text-left card card-body p-2 my-2">
        <div class="p-1" align="left">
            <p class="font-weight-bold my-1"><b>@{{username}}</b></p>
            <p class="my-1">{{tweet.content}}</p>
        </div>
      </div>

  </div>
</template>

<script>

export default {
  name: 'Tweet',
  props:{
    username: {
      type: String,
      required: true
    },
    tweet: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      tweets: [
        {
          content: "twitter is amazing"
        },
        {
          content: "vue is fun"
        }
      ]
    }
  },
}
</script>

