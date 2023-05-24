<template>
    <div class="container mx-auto">
        <div class="bg-white rounded-lg shadow-md my-5 border flex flex-col gap-4 p-2 md:flex-row md:p-0 md:gap-0 md:w-2/3 md:mx-auto" >
        <div class="w-[100%] h-[22rem] rounded-md  md:order-2 md:flex-1 md:w-1/2 p-2" :class="!forms ? 'md:h-[23rem]' : ''" >
            <img src="./../assets/jonathan-roger-LY1eyQMFeyo-unsplash.jpg" alt="" class="rounded-md   w-full h-full object-cover" >
        </div>
        <div class="md:flex-1 p-2 pt-8 md:flex md:flex-col md:gap-3" v-if="forms">
            <h2 class="text-center text-xl font-semibold text-violet-600 ">SignUp</h2>
            <form @submit.prevent="SignUpUser()">
                <div>
                    <span class="text-gray-500 text-sm ">Email</span>
                    <input type="email" v-model="email" class=" w-full h-8 mt-1 text-md rounded-sm p-2 outline-none border placeholder:text-sm" placeholder="Enter Your Email...">
                </div>
                <div class="mt-2">
                    <span class="text-gray-500 text-sm ">Password</span>
                    <input type="password" v-model="password" class=" w-full h-8 mt-1 text-md rounded-sm p-2 outline-none border placeholder:text-sm" placeholder="Enter Your Email...">
                </div>
                <p class="text-sm font-normal my-2 text-center text-gray-500">You have  signin? <a href="#" class="text-violet-500">LogIn</a></p>
                <button class="block text-center py-1 rounded-md text-white bg-violet-500 w-full" type="submit">SignUp</button>
            </form>
        </div>
        <div v-else class="md:flex-1 p-2">
           
                <h1 class="text-blue-800 text-xl font-medium">Hi {{email.split('@')[0]}}</h1>
                <p class="text-blue-800  text-sm">Chose your avatar</p>
                <div class="flex justify-center mt-4">
                    <div class="w-[6rem] h-[6rem] rounded-full relative">
                        <div class="absolute w-[2rem] h-[2rem] rounded-full bg-gray-300 -right-3 bottom-2 flex items-center justify-center cursor-pointer" @click.prevent="addPhoto()"><i class='bx bxs-camera'></i></div>
                        <input type="file" accept="image.png , image.jpg" hidden ref="fileInput" @change.prevent="addFile($event)">
                        <img src="./../assets/images.png" alt="" class="w-full h-full rounded-full object-cover" v-if="url==null">
                        <img v-else :src="url" alt="" class="w-full h-full rounded-full object-cover">
                    </div>

           
           
           
            </div>
            <div class="mt-3">
                <form >
                    <div>
                        <small class="text-sm font-normal">Phone Num</small>
                        <input v-model="phone" type="number" min="1" max="99999999999" class="w-full outline-none border p-1 rounded-md">
                    </div>
                    <div class="mt-2">
                        <small class="text-sm font-normal"> Instagram ID </small>
                        <input type="text" v-model="instagram" class="w-full outline-none border p-1 rounded-md">
                    </div>
                    <button @click.prevent="submitBtn()" class="mt-3 bg-violet-500 w-full py-2 rounded-md text-white ">Submit</button>
                </form>
            </div>
       <img src="" alt="">
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
        forms:true,
        url:null,
        phone:'',
        instagram:'',
        allInfos:{}
    }
   },
   methods:{
    SignUpUser(){
        if(this.email!=null && this.email!='' && this.password!='' && this.password!=null){
            this.forms=false
            console.log('hi');

        }
    },
   addPhoto(){
    
    this.$refs.fileInput.click()
   },
   addFile(e){
    console.log(e);
    let reader =new FileReader()
    reader.addEventListener('load',()=>{
        this.url=reader.result
        this.allInfos.url=this.url
        console.log(this.url);
    })
    reader.readAsDataURL(e.target.files[0])
   },
   submitBtn(){
    if(this.url!=null && this.phone!=null && this.phone!='' && this.instagram!=null && this.instagram!=''){
        this.allInfos.phone=this.phone
        this.allInfos.instagram=this.instagram
        this.allInfos.email=this.email
        this.allInfos.password=this.password
        this.$store.dispatch('addMoreInfo',this.allInfos)
        this.allInfos={}
        this.phone=''
        this.instagram=''
        this.email=''
        this.password=''
        this.$router.push('/panel')
    }
   }
   },

}
</script>

<style>

</style>