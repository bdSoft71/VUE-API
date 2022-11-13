<template>
 <div class="card m-auto w-50">
<div class="card-header">
  <h2>User Login</h2>
</div>
<div class="card-body">
   <div>
  <div class="form-group">
    <label for="userEmail">Email </label>
    <input type="email" v-model="user.email" class="form-control" id="userEmail">
    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
  <div class="form-group">
    <label for="userpass">Password</label>
    <input type="password" v-model="user.password" class="form-control" id="userpass">
  </div>
  <button type="submit" @click="userLogin()" class="btn btn-primary">Login</button>
  <router-link :to="{name:'register'}" >Register</router-link>
</div>
</div>
</div> 
</template>
<script>
export default {
 data(){
  return{
    user:{
      email:null,
      password:null 
    }
  }
 },
 methods:{
  userLogin(){
    axios.post('/login', {
    email: this.user.email,
    password:this.user.password
  })
  .then(response=> {
     console.log(response);
    localStorage.setItem('AToken',response.data.access_token)
    this.$router.push({name:'dashboard'})
   
  })
  .catch(error=> {
    console.log(error);
  });

  }
 }
}
</script>