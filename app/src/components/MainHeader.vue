<template>
 <header class="px-3 py-2">

    <div class="container mx-auto">
        <nav class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-gray-800">Real <span class="text-violet-600">State</span></h3>
          <div class="flex items-center gap-3">
            <div class="fixed z-50 bg-violet-100 h-[100vh] w-[40%] top-0 right-0 bottom-0 flex items-center justify-center duration-300 transition-all lg:relative lg:grow lg:h-full lg:bg-transparent" :class="openToggle ? '' : 'translate-x-[100%] lg:translate-x-0'">
                 <a href="#" @click.prevent="openToggle=!openToggle" class="absolute top-4 right-2 text-xl lg:hidden z-50"><i class='bx bx-x'></i></a>
                    <ul class=" flex flex-col gap-10 lg:flex-row lg:gap-3">
                        <li><router-link to="/" class="transition-all px-4 py-3 rounded-3xl hover:bg-violet-600 hover:text-white duration-300 lg:hover:bg-transparent lg:hover:text-inherit lg:text-sm">Home</router-link></li>
                        <li><router-link to="/category" class="transition-all px-4 py-3 rounded-3xl hover:bg-violet-600 hover:text-white duration-300 lg:hover:bg-transparent lg:hover:text-inherit lg:text-sm">Category</router-link></li>
                        <li><router-link to="/" class="transition-all px-4 py-3 rounded-3xl hover:bg-violet-600 hover:text-white duration-300 lg:hover:bg-transparent lg:hover:text-inherit lg:text-sm">Rent</router-link></li>
                        <li><router-link to="/" class="transition-all px-4 py-3 rounded-3xl hover:bg-violet-600 hover:text-white duration-300 lg:hover:bg-transparent lg:hover:text-inherit lg:text-sm">Connect</router-link></li>
                    </ul>
                </div>
                <div class="w-[2rem] h-[2rem] rounded-full cursor-pointer" @click.prevent="goToPanel()" v-if="currentUser!=null">
                    <img src="./../assets/97.jpg" alt="" class="w-full h-full rounded-full">
                </div>
                <div v-else>

                    <router-link to="/login" class="bg-white py-1 px-3 rounded-md text-violet-500 text-sm border border-violet-500 transition-all duration-300 hover:text-violet-900 ">Login / Signup</router-link>
                </div>
                <a href="#" class="text-lg lg:hidden" @click.prevent="openToggle=!openToggle"><i class='bx bxs-grid' ></i></a>
           </div>
        </nav>
    </div>
 </header>
</template>

<script>
import { mapState } from 'vuex';
export default {
data(){
    return{
        openToggle:false
    }
},
methods:{
    goToPanel(){
        this.$router.push('/panel')
    }
},
computed:{
    ...mapState(['currentUser'])
}
}
</script>

<style>

</style>