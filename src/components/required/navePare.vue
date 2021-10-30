<template>
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Twitter</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Add_post">Add Post</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           My Acount
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/profile">profile</a></li>
            <li><a class="dropdown-item" href="/Edit">Edit Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li v-if="isAuth()"><a class="dropdown-item" href="logout">logout</a></li>
            <li v-if="!isAuth()"><a class="dropdown-item" href="login">login</a></li>
            <li v-if="!isAuth()"><a class="dropdown-item" href="register">register</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">{{name.age}}</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </div>
</nav>
</template>


<style scoped>
    nav {
        background:#4F5467 !important;
    }
    nav ul > a , nav > li {
        color:white !important
    }
</style>

<script>
export default {
  data() {
    return {
      name : ""
    }
  },
    created() {
      this.name = window.localStorage.user
    },
  methods : {

    isAuth() {
      if(window.localStorage.getItem("tocken")) {
        return true
      }
      return false
    }
  }
}
</script>