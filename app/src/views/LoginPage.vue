<template>
<div class="container mx-auto">
<div class="bg-white rounded-lg shadow-md my-5 border flex flex-col gap-4 p-2 md:flex-row md:p-0 md:gap-0 md:w-2/3 md:mx-auto">
<div class="w-[100%] h-[20rem] rounded-md  md:order-2 md:flex-1 md:w-1/2">
    <img src="./../assets/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="" class="rounded-md   w-full h-full object-cover">
</div>
<div class="md:flex-1 p-2 pt-8 md:flex md:flex-col md:gap-3">
    <h2 class="text-center text-xl font-semibold text-violet-600 ">Login</h2>
    <form @submit.prevent="login()">
        <div>
            <span class="text-gray-500 text-sm ">Email</span>
            <input type="email" v-model="email" class=" w-full h-8 mt-1 text-md rounded-sm p-2 outline-none border placeholder:text-sm" placeholder="Enter Your Email...">
        </div>
        <div class="mt-2">
            <span class="text-gray-500 text-sm ">Password</span>
            <input type="password" v-model="password" class=" w-full h-8 mt-1 text-md rounded-sm p-2 outline-none border placeholder:text-sm" placeholder="Enter Your Email...">
        </div>
        <p class="text-sm font-normal my-2 text-center text-gray-500">You have not signin? <a href="#" class="text-violet-500">SignIn</a></p>
        <button type="submit" class="block text-center py-1 rounded-md text-white bg-violet-500 w-full">Login</button>
    </form>
</div>
</div>
</div>
</template>

<script>
export default {
data(){
    return{
        email:'',
        password:'',
    }
},
methods:{
    login(){
        if(this.email!=null && this.email!='' && this.password!='' && this.password!=null){
            this.$store.dispatch('loginUser',{email:this.email,password:this.password})
            this.$router.push('/')
        }
    }
   }
}
</script>

<style>

</style>