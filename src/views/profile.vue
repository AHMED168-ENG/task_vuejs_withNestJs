<template>
    <div class="profile">
        <div class="img">
            <img src="../assets/home/banner.jpg" alt="">
        </div>
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Last Posts</button>
                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Chat</button>
            </div>
        </nav>
        <div class="containers">
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <ul class="list-unstyled">
                        <li><span>first name</span> : {{user_data.userName}}</li>
                        <li><span>last name</span> : {{user_data.lastName}}</li>
                        <li><span>email</span> : {{user_data.email}}</li>
                        <li><span>age</span> : {{user_data.age}}</li>
                        <li><span>addres</span> : {{user_data.addres}}</li>
                        <li><span>createdAt</span> : {{user_data.createdAt}}</li>
                    </ul>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
            </div>
        </div>
    </div>
</template>




<style scoped>
    .profile {
        width:100%;
        background:#EDF1F5
    }
    .profile .img {
        height:300px;
    }
    .profile .img img {
        width:100%;
        height:100%;
    }
    .profile nav {
        padding-left:60px;
        background:#EDF1F5
    }
    .profile nav div button {
        outline: 0;
    }
    .profile .containers {
        background:#EDF1F5
    }
    .profile .containers div {
        background:white;
        width:80%;
        margin:auto;
    }
</style>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            user_data : {},
            errors : []
        }
    },
    created() {
        this.errors = []
        axios({
            method : "get",
            url : "http://localhost:5000/user/find/" + window.localStorage.id,
        }).then(res => {
            this.user_data = res.data
        }).catch(error => {
            this.errors = error.response.data.message
        })
    },
    methods:{

    }
}
</script>