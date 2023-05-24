<template>
  <div class="bg-[#eeeeee] pt-5 pb-2 ">
<div class="container mx-auto">
    <div class="z-20 fixed bg-white shadow-lg bottom-9 left-[50%] -translate-x-[50%] py-2 w-[40%] rounded-md  px-3 md:left-0 md:translate-x-0 md:bottom-[70%] md:w-[5%] md:h-[30%] md:translate-y-[50%]">
        <ul class=" flex justify-between items-center md:flex-col md:justify-between md:h-[100%] ">
            <li :class="`  flex items-center justify-center  w-[40px] h-[40px] rounded-md ${$route.path=='/panel' ? 'bg-white shadow-xl shadow-violet-300' : ''}`">
                <router-link to="/panel" :class="`text-xl  ${$route.path=='/panel' ? 'text-violet-800' : ''}`"><i class='bx bx-home'></i></router-link>
            </li>
            <li :class="`  flex items-center justify-center  w-[40px] h-[40px] rounded-md ${$route.path=='/panel/progress' ? 'bg-white shadow-xl shadow-violet-300' : ''}`">
                <router-link to="/panel/progress" :class="`text-xl  ${$route.path=='/panel/progress' ? 'text-violet-800' : ''}`"><i class='bx bxs-shopping-bag'></i></router-link>

            </li>
            <li :class="`  flex items-center justify-center  w-[40px] h-[40px] rounded-md ${$route.path=='/panel/editprofile' ? 'bg-white shadow-xl shadow-violet-300' : ''}`">
                <router-link to="/panel/editprofile" :class="`text-xl  ${$route.path=='/panel/editprofile' ? 'text-violet-800' : ''}`"><i class='bx bxs-user'></i></router-link>

            </li>
        </ul>
    </div>
    <div class="md:relative md:left-[4%] md:w-[96%]">
        <router-view></router-view>
    </div>
</div>
  </div>
</template>

<script>
export default{
    created(){
        console.log(this.$route.path);
    }
}
</script>

<style>

</style>