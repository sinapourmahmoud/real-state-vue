<template>
<div class="container mx-auto px-3 mt-4">
  <div class="bg-[url('./../assets/jonathan-roger-LY1eyQMFeyo-unsplash.jpg')] bg-cover  h-[60vh] rounded-xl px-6 flex flex-col justify-center gap-3  animate-startAn">
<h2 class="text-2xl font-bold leading-8">We help you find <br>
  your dream home</h2>
  <form>
    <div class="flex items-center bg-white h-10 p-1 rounded-md gap-2 lg:w-[40%]">
      <input type="text" class=" h-full rounded-md flex-1 border-0 outline-none text-sm px-2 " placeholder="Enter what you want...">
      <a href="#" @click.prevent="opentoggle()" class="w-9 text-white  bg-mainorange shadow-md shadow-mainorange
       rounded-md h-full flex items-center justify-center"><i class='bx bx-filter'></i></a>
    </div>
  </form>
  </div>
  
  <div class="my-5 flex flex-col lg:grid lg:grid-cols-6">
<div class=" lg:col-span-4" ref="contentCard">
  <h2 class="text-xl font-semibold">
    Bests for you
  </h2>
  
  <small class="text-gray-400 font-light">Lorem ipsum dolor sit amet comoaoko</small>

  <div class="sm:flex sm:flex-wrap  sm:gap-[0.5rem] sm:mx-auto ">
    <main-home-card class="sm:w-[48%]"></main-home-card>
    <main-home-card class="sm:w-[48%]"></main-home-card>
    <main-home-card class="sm:w-[48%]"></main-home-card>
    <main-home-card class="sm:w-[48%]"></main-home-card>
    <main-home-card class="sm:w-[48%]"></main-home-card>
    <main-home-card class="sm:w-[48%]"></main-home-card>
  </div>
</div>
<div class="lg:col-span-2">
  <h2 class="text-xl font-semibold mt-3">
    Bests for you
  </h2>
  
  <small class="text-gray-400 font-light">Lorem ipsum dolor sit amet comoaoko</small>
<div>
  <main-second-card></main-second-card>
  <main-second-card></main-second-card>
  <main-second-card></main-second-card>
  <main-second-card></main-second-card>
  <main-second-card></main-second-card>

</div>
</div>
  </div>
  <div class=" flex justify-center">
    <router-link class="bg-violet-600 text-white text-sm py-2 px-3 rounded-md flex items-center group" to="/category">View category <i class='bx bx-chevron-right group-hover:translate-x-1 transition-all duration-300'></i></router-link>
  </div>
  <div class="flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:my-16">
<div class="">
  <h2 class="text-2xl font-semibold">Our Surprise</h2>
  <small class="text-gray-400 font-light">Lorem ipsum dolor sit amet comoaoko for school of greate time of your life</small>
<div class="flex flex-col gap-4 lg:gap-8">
  <div class="flex items-center gap-3">
    <span class="bg-teal-200  rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center text-xl text-blue-800 "><i class='bx bx-swim drop-shadow-lg' ></i></span>
    <p class="text-lg font-medium text-gray-500">Free swiming</p>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-teal-200  rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center text-xl text-blue-800 "><i class='bx bx-swim drop-shadow-lg' ></i></span>
    <p class="text-lg font-medium text-gray-500">Free swiming</p>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-teal-200  rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center text-xl text-blue-800 "><i class='bx bx-swim drop-shadow-lg' ></i></span>
    <p class="text-lg font-medium text-gray-500">Free swiming</p>
  </div>
  <div class="flex items-center gap-3">
    <span class="bg-teal-200  rounded-full w-[2.5rem] h-[2.5rem] flex items-center justify-center text-xl text-blue-800 "><i class='bx bx-swim drop-shadow-lg' ></i></span>
    <p class="text-lg font-medium text-gray-500">Free swiming</p>
  </div>
</div>
</div>
<div>
<div class="w-full h-[15rem]  relative ">
  <div class="bg-blue-100 w-[95%] h-[5rem] absolute -bottom-12 left-50 -z-10 rounded-md hidden lg:block"></div>
<video src="./../assets/351-weatheMap-docs.mp4" class="w-full h-full"  ref="video"></video>
<a href="#" class="absolute top-[50%] left-[50%] translate-x-[-50%] text-2xl"><i class='bx bx-play' ></i></a>


</div>
<div class="flex justify-center items-center my-5 gap-4">
  <div class="w-[2.8rem] h-[2.8rem] rounded-full cursor-pointer">
    <img src="./../assets/1.jpg" alt="" class="object-cover w-full h-full rounded-full">
  </div>
  <div class="w-[2.8rem] h-[2.8rem] rounded-full cursor-pointer">
    <img src="./../assets/2.jpg" alt="" class="object-cover w-full h-full rounded-full">
  </div>
  <div class="w-[2.8rem] h-[2.8rem] rounded-full cursor-pointer">
    <img src="./../assets/3.jpg" alt="" class="object-cover w-full h-full rounded-full">
  </div>
</div>
</div>
  </div>
  <div class="flex flex-col  gap-9 lg:grid lg:grid-cols-2 lg:gap-16">

<div class="grid grid-cols-3 grid-rows-1 h-[15rem] rounded-lg gap-6 order-2 lg:order-1">
  <div class="h-full transition-all duration-300 lg:hover:-translate-y-4">
    <img src="./../assets/pexels-nout-gons-378570.jpg" alt="" class="rounded-lg w-full h-full object-cover">
  </div>
  <div class="h-full transition-all duration-300 lg:hover:-translate-y-4">
    <img src="./../assets/4.jpg" alt="" class="rounded-lg w-full h-full object-cover">
  </div>
  <div class="h-full transition-all duration-300 lg:hover:-translate-y-4">
    <img src="./../assets/pexels-peng-liu-169647.jpg" alt="" class="rounded-lg w-full h-full object-cover">
  </div>
</div>
<div class="order-1 lg:order-2">
  <p class="text-red-400 text-sm font-medium">Wellcome to to website</p>
  <h2 class="text-xl font-semibold">
    Bests for you
  </h2>
  <p class="mt-4 text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aperiam sit rerum deserunt hic beatae asperiores ex eos. Quia eligendi veniam necessitatibus porro earum cum saepe deserunt odit delectus nisi!</p>

</div>
  </div>
  <div class="flex flex-col gap-20 my-6 lg:flex-row lg:my-11 items-start">
    <div class="flex justify-center relative lg:flex-1">
      <div class="w-[64%] h-[25rem] bg-blue-200 opacity-75 rounded-t-[130px]"></div>
      <div class="w-[62%] h-[25rem] absolute -bottom-3 rounded-t-[120px] shadow-lg">
        <img src="./../assets/contact.png" alt="" class="w-full h-full object-cover rounded-t-[120px] shadow-lg">
      </div>
    </div>
    <div class="lg:flex-1">

      <h2 class="text-xl font-semibold">
        Bests for you
      </h2>
  <small class="text-gray-400 font-light">Lorem ipsum dolor sit amet comoaoko</small>
  <div class=" my-5 shadow-md rounded-md" v-for="item in acordingList" :key="item">
    <div class="flex items-center  py-4 px-3 gap-2 cursor-pointer " @click.prevent="item.opened=!item.opened">
      <small class="text-blue-800 bg-blue-200  rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center"><i class='bx bx-plus-medical'></i></small>
      <p class="flex-1 text-gray-900">{{item.title}}</p>
      <a href="#" class="text-blue-800 bg-blue-200  rounded-full w-[1.5rem] h-[1.5rem] flex items-center justify-center"><i class='bx bx-chevron-down'></i></a>
    </div>
    <div class="  h-0 overflow-hidden " :class="item.opened ? ' min-h-[4rem] ' : 'h-0'">
      <p class="text-sm font-medium text-gray-800 p-3">
       {{item.content}}
      </p>
    </div>
  </div>

    </div>
  </div>
  <MainModal></MainModal>
</div>

</template>

<script>
import MainModal from '@/components/MainModal.vue'
import store from '@/store'
import MainHomeCard from '../components/MainHomeCard.vue'
import MainSecondCard from '../components/MainSecondCard.vue'


export default {
  components: { MainHomeCard, MainSecondCard, MainModal },
  name: 'HomeView',
  data(){
    return{
      acordingList:[
        {
          title:'acording Title',
          content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus maiores ea, nostrum dolorum, tempora do",
          opened:false

        },
        {
          title:'acording Title',
          content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus maiores ea, nostrum dolorum, tempora do",
          opened:false

        },
        {
          title:'acording Title',
          content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus maiores ea, nostrum dolorum, tempora do",
          opened:false

        },
        {
          title:'acording Title',
          content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatibus maiores ea, nostrum dolorum, tempora do",
          opened:false

        }
      ]
    }
  },
mounted() {

},
methods:{
  opentoggle(){
    store.commit('changeToggle')
  }
}
}
</script>
