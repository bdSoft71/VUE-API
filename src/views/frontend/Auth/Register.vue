<template>
 <div class="card m-auto w-50">
<div class="card-header">
  <h2>User Register</h2>
</div>
<div class="card-body">
   <div>
   
  <div class="form-group">
     {{user.name}}
    <label for="name">Name</label>
    <input type="text" v-model="user.name" class="form-control" id="name" >
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" v-model="user.email" class="form-control" id="email" >
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="pass">Password</label>
    <input type="password" v-model="user.password" class="form-control" id="pass">
  </div>
  <!-- <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> -->
  <button type="submit" @click="userRegister" class="btn btn-primary">Register</button>
  <router-link :to="{name:'login'}" >Login</router-link>
</div>
</div>
</div> 
</template>
<script>
export default {
 data(){
  return{
    user:{
      name:null,
      email:null,
      password:null 
    }
  }
 },
 methods:{
  userRegister(){
    axios.post('/register', {
    name: this.user.name,
    email: this.user.email,
    password:this.user.password
  })
  .then(function (response) {
    let AccessToken=response.data.access_token
    localStorage.setItem('AToken',AccessToken)
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  }
 }
}
</script>