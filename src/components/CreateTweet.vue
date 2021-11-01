<template>
    <div>
      <form @submit.prevent="createTweet">
        <div class="" align="left">
          <label class="my-1" align="left">New tweet</label>
          <textarea v-model="newTweetContent" class="form-control" :class="{'border-danger': hasExceededCharacterLimit}" rows="2" cols="31"></textarea>
          <font class="text-left float-right" :class="hasExceededCharacterLimit ? 'text-danger' : 'text-muted'">{{tweetCharacterCount}}/{{maxCharactersAllowed}}</font>
          <div class="mt-2">
            <label>Type</label>
            <select v-model="newTweetType" class="form-control w-100">
              <option v-for="(option, index) in tweetTypes" :key="index" :value="option.value">{{option.name}}</option>
            </select>
          </div>
          <div align="right">
              <button class="btn btn-primary my-2 btn-sm" :class="{'disabled': hasExceededCharacterLimit}">Tweet</button>
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
      newTweetContent: '',
      newTweetType: "instant",
      maxCharactersAllowed: 200,
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
  computed:{
    hasExceededCharacterLimit(){
      return this.tweetCharacterCount > this.maxCharactersAllowed;
    },
    tweetCharacterCount(){
      return this.newTweetContent.length;
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
          this.newTweetContent = '';
        }

      }
    }
  }
}
</script>

<style scoped>
.float-right{
  float: right !important;
}
</style>