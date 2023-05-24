<template>
<div class="flex flex-col gap-5 md:grid md:grid-cols-8 md:gap-1">
  <div class="md:col-start-1 md:col-end-7">
    <h3 class="text-lg font-semibold">My Onprogress Saves <span class="ml-3 text-gray-400 text-sm ">23 Results</span></h3>
  <div class="mt-5 md:flex md:flex-wrap  lg:gap-2">
    <PanelCard class="md:basis-[48%]"></PanelCard>
    <PanelCard class="md:basis-[48%]"></PanelCard>
    <PanelCard class="md:basis-[48%]"></PanelCard>
    <PanelCard class="md:basis-[48%]"></PanelCard>
    <PanelCard class="md:basis-[48%]"></PanelCard>
  </div>
   </div>
<div class=" md:col-start-7 md:col-end-9 ">
  <div class="bg-white p-2 shadow-lg rounded-lg md:h-[100vh]">
    <div class="w-[6rem] h-[6rem] bg-gray-200 p-1 mx-auto rounded-full relative">
      <div class="bg-violet-600 absolute w-[50%] h-[100%] top-0 right-0 rounded-tr-full rounded-br-full "></div>
      <img src="./../assets/97.jpg" alt="" class="w-[100%] h-[100%] object-cover rounded-full absolute top-0 left-0 scale-95">
    </div>
    <div class="flex flex-col items-center my-3">
      <h3 class="text-lg font-semibold text-violet-800">Sina Pourmahmoud</h3>
      <p class="text-gray-500 text-sm">Engineer</p>
    </div>
    <div class="flex justify-center my-3">
      <div class=" w-full flex justify-center ">
        <a href="#" class="bg-violet-200 w-[4rem] h-[4rem] flex items-center justify-center text-2xl rounded-full text-violet-900 "><i class='bx bxs-comment'></i> </a>
      </div>
      
      <div class="w-full  flex justify-center border-l-2">
        <a href="#" class="bg-yellow-200 w-[4rem] h-[4rem] flex items-center justify-center text-2xl rounded-full text-yellow-600 "><i class='bx bxs-bookmark-star'></i> </a>
      </div>
    </div>
    <div class="mt-5">
      <div>
        <h4 class="text-md font-medium">Instagram</h4>
        <div class="w-full bg-slate-300 h-1.5 rounded-full mt-3 relative">
          <div class="absolute left-0 top-0 h-[100%] w-[40%] bg-violet-800 rounded-full"></div>
        </div>
      </div>
      <div class="my-3">
        <h4 class="text-md font-medium">Telegram</h4>
        <div class="w-full bg-slate-300 h-1.5 rounded-full mt-3 relative">
          <div class="absolute left-0 top-0 h-[100%] w-[10%] bg-violet-800 rounded-full"></div>
        </div>
      </div>
      <div>
        <h4 class="text-md font-medium">Whatsapp</h4>
        <div class="w-full bg-slate-300 h-1.5 rounded-full mt-3 relative">
          <div class="absolute left-0 top-0 h-[100%] w-[60%] bg-violet-800 rounded-full"></div>
        </div>
      </div>
    </div>
    <button class="bg-violet-800 w-full my-6 text-white font-light py-2 rounded-md text-md">Edit Profile</button>
  </div>
</div>
</div>
</template>

<script>
import PanelCard from '../components/PanelCard.vue'
export default {
components:{PanelCard}
}
</script>

<style>


</style>