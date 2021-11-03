<template>
  <div>
    <Header/>
    <h3>Home</h3>
    <div>
      <ul>
        <li v-for="user in allUsers" :key="user.id">
          <router-link :to="{ name: 'UserProfile', params: { userId: user.id }}">
            {{user.username}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import { users } from "../assets/users"

export default {
  name: 'Home',
  components:{
    Header
  },
  data(){
    return { 
      allUsers: []
    }
  },
  mounted(){
    this.allUsers = users.users;
  }
}
</script>
