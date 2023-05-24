<template>
    <h3 class="text-lg font-semibold">My Dashboard Saves <span class="ml-3 text-gray-400 text-sm ">23 Results</span></h3>
   
   
   
    <div class="flex flex-col md:flex-row md:flex-wrap md:gap-1 md:justify-between">
     <MainHomeCardVue class="md:basis-[32%] lg:basis-[23%]"></MainHomeCardVue>   
     <MainHomeCardVue class="md:basis-[32%] lg:basis-[23%]"></MainHomeCardVue>   
     <MainHomeCardVue class="md:basis-[32%] lg:basis-[23%]"></MainHomeCardVue>   
     <MainHomeCardVue class="md:basis-[32%] lg:basis-[23%]"></MainHomeCardVue>   
     <MainHomeCardVue class="md:basis-[32%] lg:basis-[23%]"></MainHomeCardVue>   
     <MainHomeCardVue class="md:basis-[32%] lg:basis-[23%]"></MainHomeCardVue>   
     <MainHomeCardVue class="md:basis-[32%] lg:basis-[23%]"></MainHomeCardVue>   
     <MainHomeCardVue class="md:basis-[32%] lg:basis-[23%]"></MainHomeCardVue>   
    </div>
</template>

<script>
import MainHomeCardVue from '@/components/MainHomeCard.vue';
export default {
components:{MainHomeCardVue}
}
</script>

<style>

</style>