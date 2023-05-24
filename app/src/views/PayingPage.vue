<template>
    <div class="bg-[#eeeeee] py-5">
        <div class="container mx-auto">
            <div class="bg-white rounded-lg shadow-md p-3 flex flex-col gap-3">
                <div class="md:flex md:justify-center">
                    <div class=" mb-3 flex items-center justify-between relative md:w-1/2 "> 
                        <div class="absolute w-full bg-gray-300 h-1 top-[50%] -translate-y-[50%] "></div>
                        <div class="absolute  transition-all duration-500 rounded-full bg-violet-800 h-1 top-[50%] -translate-y-[50%] " :class=" progress==100 ? 'w-[100%]' : 'w-[0]'"></div>
                        <div class="w-[2rem] h-[2rem] text-violet-800 text-md font-medium rounded-full flex items-center justify-center border-2 border-violet-700 z-10 bg-white">1</div>
                        <div class="w-[2rem] h-[2rem] text-violet-800 text-md font-medium rounded-full flex items-center justify-center border-2 border-violet-700 z-10 bg-white">2</div>
                     </div>
                </div>
             
             
                <router-view></router-view>
                <div class="flex items-center justify-center gap-2">
        
                    <button class="bg-violet-700 py-1 px-3 rounded-lg text-white font-normal disabled:bg-gray-400 disabled:cursor-not-allowed" :disabled="active==0 ? true : false" @click="changePages($event)">Prev</button>
                    <button class="bg-violet-700 py-1 px-3 rounded-lg text-white font-normal disabled:bg-gray-400 disabled:cursor-not-allowed" :disabled="active==1 ? true : false" @click="changePages($event)">Next</button>
            </div>
                <!--Add here-->
          </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            active:0,
            disabel:true,
            progress:0
        }
    },
    created(){
    this.addCahnges(this.active)
},
watch:{
    active(newval){
        if(newval==0){
            this.$router.push('/payingpage')
        }else{
            this.$router.push('/payingpage/lastpay')

        }
    }
},
methods:{
    changePages(e){
        let name=e.target.innerText
        if(name=='Prev'){
            if(this.active==0){
                this.active=0
            }else{
                this.active--
            }
        }else{
            if(name=='Next'){
                if(this.active==1){
                    this.active=1
                }else{
                    this.active++
                }
            }
        }
        this.addCahnges(this.active)
    },
    addCahnges(active){
        this.progress= (active/1)*100
        
    }
}
}
</script>

<style>

</style>