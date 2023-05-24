<template>
 <div class="fixed w-[100%] h-[100%] z-50    top-0 left-0 right-0 bottom-0 md:bg-[rgba(0,0,0,0.4)]   " :class="openModal ? 'md:flex block md:items-center md:justify-center' : 'hidden relative'">
<div class="w-full h-full bg-white relative p-3 overflow-hidden md:w-[50vw] md:h-[85vh] rounded-lg transition-all duration-300" >
    <a href="#" class="absolute top-1 right-2 text-xl" @click.prevent="closeBox()"><i class='bx bx-x'></i></a>
    <h2 class="text-xl font-semibold">Filter by...</h2>
    <div class="flex items-center gap-2 mt-4 flex-wrap border-b pb-3">
        <a href="#" class="text-sm font-light bg-gray-200 px-2 py-0.5 rounded-xl transition-all duration-200 hover:bg-gray-300">Villa</a>
        <a href="#" class="text-sm font-light bg-gray-200 px-2 py-0.5 rounded-xl transition-all duration-200 hover:bg-gray-300">Appartment</a>
        <a href="#" class="text-sm font-light bg-gray-200 px-2 py-0.5 rounded-xl transition-all duration-200 hover:bg-gray-300">House</a>
    </div>
    <div class="mt-3">
      <form action="">
        <select class="border rounded-md w-full text-sm text-gray-400 outline-none">
            <option value="t">Type</option>
            <option value="t">Sale</option>
            <option value="t">Rent</option>
        </select>
       
        <input type="text" placeholder="hihjiuohyi" class="p-2 my-3 border w-full rounded-md h-10 text-sm outline-none">
        <div>
            <h5 class="text-base font-medium">From</h5>
            <div class=" h-10 flex">
                <input type="number" class="border  w-1/3 outline-none p-2" placeholder="yyyy" value="2018" min="2010" max="2022">
                <input type="number" class="border w-1/3 outline-none p-2" placeholder="mm" min="1" max="12" value="2">
                <input type="number" class="border w-1/3 outline-none p-2" placeholder="dd" min="1" max="31" value="25">
            </div>
        </div>    <div>
            <h5 class="text-base font-medium mt-3">To</h5>
            <div class=" h-10 flex">
                <input type="number" class="border  w-1/3 outline-none p-2" placeholder="yyyy" value="2018" min="2010" max="2022">
                <input type="number" class="border w-1/3 outline-none p-2" placeholder="mm" min="1" max="12" value="2">
                <input type="number" class="border w-1/3 outline-none p-2" placeholder="dd" min="1" max="31" value="25">
            </div>
        </div>
    </form>
    </div>
    <div class=" mt-4">
        <h5 class="text-base font-medium">Price Range</h5>
        <div class="flex  gap-2 mt-2">
            <div class="flex-1 flex items-center  gap-2">
                <small>min</small>
                <input type="number" name="" id="" class="border outline-none w-full p-1" min="1" max="10000"  v-model="numInputMin">
            </div>
            <div class="  flex items-end text-lg">-</div>
            <div class="flex-1 flex items-center  gap-2">
                <small>max</small>
                <input type="number" name="" id="" class="border outline-none w-full p-1" min="1"  v-model="numInputMax">
            </div>
        </div>
        <div class="h-2 bg-gray-300 mt-5 rounded-xl relative">
            <div ref="progress" class="absolute bg-violet-600 top-0 bottom-0  right-[25%] rounded-xl left-[25%] " >

            </div>
        </div>
        <div class="relative">
            <input type="range"  max="10000" min="1" class="outline-none range-box absolute -top-2 h-2 w-full min-range" v-model="minRange" @input.prevent="changeRange($event)">
            <input type="range"  max="10000" min="1" class=" outline-none range-box absolute -top-2 h-2 w-full max-range" v-model="maxRange" @input.prevent="changeRange($event)">
        </div>
    </div>
    <a href="#" class=" block mt-3 py-1 text-center rounded-md text-white bg-violet-600">Button</a>
</div>

 </div>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'

export default {
data(){
    return{
        numInputMax:'7500',
        numInputMin:'2500',
        minRange:'2500',
        maxRange:'7500',
        styleLeft:null,

    }
},
computed:{
    ...mapState(['openModal'])
},
methods:{
    changeRange(e){
if(parseInt(this.maxRange)-parseInt(this.minRange)>=1000){
    let progress=this.$refs.progress
        progress.classList.remove('left-[25%]')
        let minNum=(parseInt(this.minRange)/10000)*100
        let maxNum=100-(parseInt(this.maxRange)/10000)*100
        progress.style.left= minNum+'%'
        progress.style.right= maxNum+'%'
}else{
   if(e.target.classList.contains('min-range')){
    this.minRange=parseInt(this.maxRange)-1000
    
   }else{
    this.maxRange=parseInt(this.minRange)+1000
    console.log(this.maxRange);

   }
}
   this.numInputMax=this.maxRange
   this.numInputMin=this.minRange     
    },

    closeBox(){
        store.commit('changeToggle')
    }
},
watch:{
    numInputMax(newVal){
        this.maxRange=newVal
        this.changeRange()
    },
    numInputMin(newVal){
        this.minRange=newVal
        this.changeRange()
    },
}
}
</script>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button{
    -webkit-appearance: none;
}
.range-box{
    -webkit-appearance: none;
    background: none;
    pointer-events: none;
}
.range-box::-webkit-slider-thumb{
    pointer-events: auto;
    background:rgb(124 ,58 ,237) ;
    -webkit-appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
}
</style>