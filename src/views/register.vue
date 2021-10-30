<template>
  <div class="login">
    <div class="container">
        <ul class="list-unstyled">
            <li v-for="error in login_data.errors" :key="error.id">{{error}}</li>
        </ul>
        <div class="alert alert-success" v-if="login_data.success">{{login_data.success}}</div>
            <form class="row g-3 needs-validation" novalidate enctype="multipart/form-data">
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">email</label>
                <input v-model="login_data.email" name="email" type="email" class="form-control" id="validationCustom01" required>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">first name</label>
                <input v-model="login_data.fName" name="userName" type="text" class="form-control" id="validationCustom02" required>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustomUsername" class="form-label">last name</label>
                <div class="input-group has-validation">
                <input v-model="login_data.lName" type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                <div class="invalid-feedback">
                    enter last name
                </div>
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationCustom03" class="form-label">password</label>
                <input v-model="login_data.password" name="password" type="password" class="form-control" id="validationCustom03" required>
                <div class="invalid-feedback">
                enter your password
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">age</label>
                <input v-model="login_data.age" type="number" name="age" class="form-control">
                <div class="invalid-feedback">
                enter age
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">addres</label>
                <input v-model="login_data.addres" type="text" name="addres" class="form-control">
                <div class="invalid-feedback">
                enter addres
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom05" class="form-label">photo</label>
                <input ref="file" @change="getPhoto()" type="file" name="photo" class="form-control photo" id="validationCustom05" required>
                <div class="invalid-feedback">
                enter photo
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" v-on:click.prevent="register()">Submit form</button>
            </div>
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
            email : "",
            password : "",
            age : "",
            fName : "",
            lName :"",
            photo : "",
            addres : "",
            final : {},
            errors : [],
            success : ""
        },
        valid : false
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
    getPhoto() {
        var img  = document.querySelector(".photo").files[0];
        var fd = new FormData();
        fd.append("photo" , img ? img : "")
        fd.append("userName" , this.login_data.fName)  
        fd.append("lastName" , this.login_data.lName)
        fd.append("age" , this.login_data.age)
        fd.append("addres" , this.login_data.addres)
        fd.append("password" , this.login_data.password)
        fd.append("email" , this.login_data.email)
            
        this.login_data.final = fd
    },
     async register() {
        await this.getPhoto()
        this.valid = true
        this.login_data.errors = []
        axios({
            url : "http://localhost:5000/auth/signUp",
            method : "post",
            data : this.login_data.final,
           
            }).catch(error => {
            this.valid = false
            if(typeof error.response.data.message == 'object') {
                this.login_data.errors = error.response.data.message
            } else {
                this.login_data.errors = [error.response.data.message]
            }
        })
        if(this.valid) {
            window.location = window.location.origin + "/login"
        }
    }
  },
};
</script>
