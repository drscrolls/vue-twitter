<template>
    <div>
      <form @submit.prevent="createTweet">
        <div class="" align="left">
          <label class="my-1" align="left">New tweet</label>
          <textarea v-model="newTweetContent" class="form-control" rows="2" cols="31"></textarea>
          <div class="mt-2">
            <label>Type</label>
            <select v-model="newTweetType" class="form-control w-100">
              <option v-for="(option, index) in tweetTypes" :key="index" :value="option.value">{{option.name}}</option>
            </select>
          </div>
          <div align="right">
              <button class="btn btn-primary my-2 btn-sm">Tweet</button>
          </div>
        </div>
      </form>
    </div>
</template>



<script>

export default {
  name: 'CreateTweet',
  data(){
    return {
      newTweetContent: null,
      newTweetType: "instant",
      tweetTypes: [
        {
          value:"draft", name: "Draft"
        },
        {
          value:"instant", name: "Instant"
        }
      ]
    }
  },
  methods: { 
    createTweet(){
      if(this.newTweetContent ){
        if(this.newTweetType == "instant"){
          var tweetObject = {
              content :this.newTweetContent,
              type: this.newTweetType
          };
          this.$emit("createTweet", tweetObject);
          this.newTweetContent = null;
        }

      }
    }
  }
}
</script>

