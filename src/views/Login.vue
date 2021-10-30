<template>
  <div class="login">
    <div class="container">
        <ul class="list-unstyled">
            <li v-for="error in login_data.errors" :key="error.id">{{error}}</li>
        </ul>
      <form action="" method="post">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            v-model="login_data.email"
            name="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            v-model="login_data.password"
            name="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input
            v-model="login_data.expired"
            value="1"
            name="expired"
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button v-on:click.prevent="login()" type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login {
  padding: 50px 0;
}

.login form label {
  text-align: center !important;
  display: block;
}
.container ul {
    margin-bottom:20px;
}
.container ul li {
    background:rgb(231, 108, 108);
    padding:7px;
    font-size:15px;
    color:white;
    margin:5px 0
}
</style>

<script>
import axios from 'axios';
export default {
  data() {
    return {
        login_data : {
            email : null,
            password : null,
            expired : false,
            errors : [],
        }
    };
  },
  created() {
    this.isAuthontiat();
  },
  methods: {
    isAuthontiat() {
      if (window.localStorage.getItem("tocken")) {
        this.$router.push("Home");
      }
    },
    async login() {
        this.login_data.errors = []
        axios.post("http://localhost:5000/auth/signIn" , this.login_data).then(res => {
            if(res.data.type == "error") {
                this.login_data.errors.push(res.data.message)
            } else {
                window.localStorage.setItem("tocken" , res.data.tocken)
                window.localStorage.setItem("id" , res.data.id)
                window.location = window.location.origin + "/Home"
            }
        }).catch(error => {
            this.login_data.errors = error.response.data.message
        })
    }
  },
};
</script>
