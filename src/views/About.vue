<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul v-for="post in posts" v-bind:key="post.id">
      <li>email : {{post.email}}</li>
      <li>userName : {{post.userName}}</li>
      <li>lastName : {{post.lastName}}</li>
      <li>age : {{post.age}}</li>
      <li>isActive : {{post.isActive}}</li>
      <li>isAdmin : {{post.isAdmin}}</li>
    </ul>
  </div>
</template>






<script>
import axios from "axios";
export default {
  data() {
    return {
      posts : ["ddd"]
    }
  },
    created() {
    console.log(this)
    console.log(this.$data)
    axios.get("http://localhost:5000/user").then((res) => {
      this.posts = res.data
    })
  },
}
</script>