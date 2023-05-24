<template>
<div class="bg-[#f1f1f1]" @click="changeRoute()">
    <div class="container mx-auto py-4 lg:grid lg:grid-cols-7 lg:gap-5">
        <div class="lg:col-start-1 lg:col-end-5">
           
                <form>
                    <div class="bg-white flex p-1 rounded-md gap-2 h-9 shadow-sm ">
                        <input type="text" class="flex-1 outline-none p-2 text-sm placeholder:text-sm" placeholder="Enter Location">
                        <a href="#" class="bg-violet-600 shadow-md shadow-violet-600 text-white flex items-center justify-center w-[2rem] rounded-md"><i class='bx bx-search-alt-2' ></i></a>
                    </div>
                </form>
                <div class="flex items-center my-5 gap-4">
                    <h4 class="text-xl font-normal">12223 Resuls</h4>
                    <div class="flex items-center gap-2 flex-1">
                        <div class=" cursor-pointer w-[40px] h-[20px] bg-violet-100 rounded-[160px] shadow-lg relative">
                            <i class="absolute bg-violet-600 top-0 left-0 w-[20px] h-[20px] rounded-full scale-105"></i>
                        </div>
                        <small class="text-gray-500">Show Map</small>
                    </div>
                    <div>
                        <small class="text-gray-400 text-xs font-light">Sort by</small>
                   <a href="#" class="text-sm ml-2">Recent <i class='bx bx-chevron-down'></i></a>
                    </div>
                </div>
                <div class="flex items-center gap-1 flex-wrap">
                    <div class="bg-white shadow-md px-3 py-1 rounded-md ">
                        <a href="#" class="text-gray-500 text-sm"><i class='bx bxs-bed mr-1' ></i>   Rooms count <i class='bx bx-chevron-down'></i></a>
                    </div>
               
                    
                    <div class="bg-white shadow-md px-3 py-1 rounded-md ">
                        <a href="#" class="text-gray-500 text-sm"><i class='bx bxs-bath' ></i>   Bathroom count <i class='bx bx-chevron-down'></i></a>
                    </div>
                    <div class="bg-white shadow-md px-3 py-1 rounded-md ">
                        <a href="#" class="text-gray-500 text-sm"><i class='bx bxs-parking' ></i>   Parking count <i class='bx bx-chevron-down'></i></a>
                    </div>
                    <div class="bg-white shadow-md px-3 py-1 rounded-md ">
                        <a href="#" class="text-gray-500 text-sm"><i class='bx bx-filter' ></i>    More filter <i class='bx bx-chevron-down'></i></a>
                    </div>
                </div>
           <div class="flex flex-col mt-5 gap-2">
           
            <search-cards></search-cards>
            <search-cards></search-cards>
            <search-cards></search-cards>
            <search-cards></search-cards>
           </div>
       
        </div>   
         <div class="hidden lg:block lg:col-start-5 col-end-8 bg-yellow-300">
<p>sasa</p>
           </div>
    </div>
</div>
</template>

<script>
import SearchCards from '../components/SearchCards.vue'
export default {
  components: { SearchCards },
    methods:{
        changeRoute(){
            this.$router.push('/product/8')
        }
    }
}
</script>

<style>

</style>