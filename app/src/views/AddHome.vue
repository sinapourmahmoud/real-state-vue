<template>
 <div class="bg-[#eeeeee] py-5">
<div class="container mx-auto ">
    <div class="bg-white p-3 rounded-xl">
        <h2 class="text-blue-900 text-xl font-bold">Add New Home</h2>
        <div class="flex flex-col gap-5 md:grid md:grid-cols-7 ">
            <div class="md:col-start-1 md:col-end-4">
                <form>
                    <div class="flex flex-col gap-3">
                    <div>
                        <p class="text-gray-800">Title</p>
                        <input type="text" class="p-1 mt-2 outline-none border w-full rounded-md text-md text-gray-800">
                    </div>
                    <div class="flex items-center gap-2">
                        <input type="file" accept="image/png , image/jpg" hidden  ref="file" @change.prevent="choseFile($event)">
                        <div class="flex items-center gap-3 " @click.prevent="clicked()">
                            <div class="w-[7rem] h-[7rem]  rounded-lg border-4 border-dotted flex items-center justify-center cursor-pointer">
                                <a href="#" class="text-4xl text-gray-400"><i class='bx bxs-cloud-upload'></i></a>
                            </div>
                        </div>
                        <div :class="!src ? 'hidden' : ''  ">
                            <div class="w-[7rem] h-[7rem]  rounded-lg border-4 border-dotted flex items-center justify-center cursor-pointer">
                                <img :src="src" alt=" " class="w-full h-full object-cover border-0 rounded-lg" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-lg font-normal text-blue-800">Options</h4>
                        <div class="mt-2">
                            <p class="text-gray-800">Bedrooms</p>
                            <input type="number" class="p-1 mt-2 outline-none border w-full rounded-md text-md text-gray-800">
                        </div>  
                        <div class="mt-2">
                            <p class="text-gray-800">Bathrooms</p>
                            <input type="number" class="p-1 mt-2 outline-none border w-full rounded-md text-md text-gray-800">
                        </div>  
                        <div class="my-2">
                            <input type="checkbox" id="check" v-model="parking">
                            <label for="check" class="text-sm"> It has parkings</label>
                        </div>
                        <div class="mt-2">
                            <p class="text-gray-800">Parkings</p>
                            <input type="number" class="p-1 mt-2 outline-none border w-full rounded-md text-md text-gray-800 disabled:bg-[#eeeeee]" :disabled="parking ? false : true">
                        </div>  
                   
                        <div class="mt-2">
                            <p class="text-gray-800">Price</p>
                           
                            <input type="number" v-model="price" class="p-1 mt-2 outline-none border w-full rounded-md text-md text-gray-800" min="0">
                            <p>{{price}} $</p>
                        </div>  
                        <div class="mt-2">
                            <p class="text-gray-800">Description</p>
                            <textarea type="number" class="p-1 mt-2 outline-none border w-full rounded-md text-md text-gray-800"></textarea>
                        </div> 
                        <div class="mt-2">
                            <input type="checkbox" id="rules" v-model="rules">
                            <label for="rules" class="text-sm"> I Accept All the rules</label>

                        </div> 
                   <div class="mt-3">
                    <button :disabled="rules ? false : true" class="bg-violet-700 w-full py-1 rounded-lg text-white disabled:bg-violet-300 disabled:cursor-not-allowed">Add</button>
                   </div>
                   
                   
                    </div>
                    </div>
                </form>
            </div>
            <div class=" md:col-end-8 md:col-start-5 ">

                <div class="bg-[#eeeeee] p-2 rounded-md">
                    <h4 class="text-lg font-medium text-gray-800">Rules</h4>
                    <p class="mt-4 text-gray-900 text-md leading-7 font-normal">
                        Lorem ipsum dolor sit amet, consectetur <span class="text-green-500 font-medium">adipisicing</span> elit. Ipsa velit ea blanditiis laudantium, et architecto! Impedit quas, eius, labore itaque reprehenderit incidunt enim rem nulla veniam laborum quam suscipit mollitia.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
 </div>

</template>

<script>
export default {
    data(){
        return{
            src:null,
            parking:false,
            price:0,
            rules:false
        }
    },
methods:{
    clicked(){
        this.$refs.file.click()
        
    },
    choseFile(e){
        console.log(e.target.files[0]);
        
        let reader=new FileReader()
        reader.addEventListener('load',()=>{
            this.src=reader.result
          
            
        })
        reader.readAsDataURL(e.target.files[0])
    }
}
}
</script>

<style>

</style>