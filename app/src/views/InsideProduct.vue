<template>
  <div class="container mx-auto">
    <div class="hidden   space-x-3 lg:flex lg:items-center my-4">
        <a href="#" class="text-sm text-gray-400">Home</a> <span class="text-sm">/</span>
        <a href="#" class="text-sm text-gray-400">Category</a> <span class="text-sm">/</span>
        <a href="#" class="text-sm text-gray-400">Apartman</a> <span class="text-sm">/</span>
        <a href="#" class="text-sm text-violet-400">Name</a>
    </div>
<div class="md:flex md:flex-col lg:grid lg:grid-cols-10 lg:gap-5">
<div class="lg:col-start-1 lg:col-end-8">
    <div class="h-[50vh] relative md:rounded-lg">
        <img src="./../assets/popular4.jpg" alt="" class="w-[100%] h-[100%] object-cover md:rounded-lg">
        <div class="w-[100%] h-[100%] top-0 left-0 absolute  p-4 pb-6 bg-gradient-to-t from-[rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div class="flex items-center justify-between">
                <a href="#" class="text-white text-lg" ><i class='bx bx-chevron-left' ></i></a>
                <a href="#" class="text-white text-lg" ><i class='bx bx-bookmark' ></i></a>
            </div>
            <div class="flex justify-between items-center">
                <div>
                    <small class="bg-violet-600 px-2 py-0.5 text-white font-light text-xs rounded-sm">Villa</small>
                    <p class="text-white text-lg font-medium">Best house in village</p>
                <small class="text-white text-justify text-xs"><i class='bx bx-map' ></i> Los Angles</small>
                <small class="text-white text-justify text-xs ml-3"><i class='bx bx-square' ></i> 144 m/m</small>
                </div>
                <div class="flex flex-col gap-1 items-end">
                    <a href="#" class="bg-white w-10 h-10 rounded-full flex items-center justify-center text-xl text-violet-600"><i class='bx bxs-heart' ></i></a>
                    <small class="text-white text-xs"><i class='bx bxs-heart text-violet-600' ></i> Prevwies</small>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white -translate-y-3 rounded-tr-xl rounded-tl-xl p-4 shadow-md">
       <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
            <div class="rounded-full w-14 h-14 ">
                <img src="./../assets/97.jpg" alt="" class="rounded-full w-[100%] h-[100%] object-cover">
            </div>
          <div>
            <p class="text-base font-medium ">Jhonatan Prece</p>
            <small class="text-gray-700 text-xs">Softwere engineer</small>
          </div>
        </div>
        <div class="flex items-center gap-2">
            <a href="#" class="bg-violet-200 text-violet-900 rounded-full w-8 h-8 flex justify-center items-center"><i class='bx bxs-phone' ></i></a>
            <a href="#" class="bg-violet-200 text-violet-900 rounded-full w-8 h-8 flex justify-center items-center"><i class='bx bx-envelope'></i></a>
        </div>
       </div>
       <div class="flex items-center mt-5">
        <div class="flex flex-col w-1/4  items-center">
            <span class="text-2xl text-violet-900">
                <i class='bx bx-bed' ></i>
            </span>
            <small class="text-gray-500  font-light">4 Bedrooms</small>
        </div>
        <div class="flex flex-col w-1/4  items-center">
            <span class="text-2xl text-violet-900">
                <i class='bx bx-bath' ></i>
            </span>
            <small class="text-gray-500  font-light">2 Bathrooms</small>
        </div>
        <div class="flex flex-col w-1/4  items-center">
            <span class="text-2xl text-violet-900">
                <i class='bx bx-bowl-hot' ></i>
            </span>
            <small class="text-gray-500  font-light">2 Kitchens</small>
        </div>
        <div class="flex flex-col w-1/4  items-center">
            <span class="text-2xl text-violet-900">
                <i class='bx bxs-parking' ></i>
            </span>
            <small class="text-gray-500  font-light">1 Parking</small>
        </div>
       </div>
       <div class="mt-6">
        <p class="text-sm text-gray-500 font-light text-justify leading-6">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos corporis vero explicabo provident quidem omnis, assumenda porro, eligendi laudantium natus quibusdam sapiente minus, deserunt itaque similique est adipisci doloribus.
<span v-if="pDisplay">
    
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos corporis vero explicabo provident quidem omnis, assumenda porro, eligendi laudantium natus quibusdam sapiente minus, deserunt itaque similique est adipisci doloribus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos corporis vero explicabo provident quidem omnis, assumenda porro, eligendi laudantium natus quibusdam sapiente minus, deserunt itaque similique est adipisci doloribus.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos corporis vero explicabo provident quidem omnis, assumenda porro, eligendi laudantium natus quibusdam sapiente minus, deserunt itaque similique est adipisci doloribus.
</span>
<a href="#" class="text-blue-500" @click.prevent="pDisplay=!pDisplay">{{pDisplay ? 'Show less' : 'Show more'}}</a>
        </p>
       </div>
       <div class="">
        <h4 class="text-lg font-semibold my-3">Photos</h4>
        <div class="grid grid-cols-3 gap-3">
            <div class="h-[12rem] rounded-md ">
                <img src="./../assets/home.jpg" alt="" class=" rounded-md w-[100%] h-[100%] object-cover">
            </div>
            <div class="h-[12rem] rounded-md ">
                <img src="./../assets/home.jpg" alt="" class=" rounded-md w-[100%] h-[100%] object-cover">
            </div>
            <div class="h-[12rem] rounded-md ">
                <img src="./../assets/home.jpg" alt="" class=" rounded-md w-[100%] h-[100%] object-cover">
            </div>
        </div>
       </div>
       <div>
        <h4 class="text-lg font-semibold my-3">Add Comments</h4>
        <div>
            <form>
                <div class="bg-gray-200 p-2 rounded-lg flex gap-2">
                    <input type="text" class="border flex-1 rounded-xl px-2 py-1 text-sm font-light outline-none" placeholder="Add Comment" >
                    <a href="#" class="w-9 text-white  bg-mainorange shadow-md shadow-mainorange
       rounded-md h-[1.8rem] flex items-center justify-center"><i class='bx bxs-comment'></i></a>
                </div>
            </form>
        </div>
       </div>
       <div>
        <h4 class="text-lg font-semibold my-3">Comments</h4>
        <div class="flex flex-col mt-10 gap-12">

            <main-comment-box></main-comment-box>
            <main-comment-box></main-comment-box>
            <main-comment-box v-if="openComment"></main-comment-box>
            <main-comment-box v-if="openComment"></main-comment-box>
            <main-comment-box v-if="openComment"></main-comment-box>
            <a v-else href="#" class="text-blue-500" @click.prevent="openComment=!openComment">{{openComment ? 'Show less' : 'Show More...'}}</a>
        </div>
       </div>
       <div class="mt-5 p-3 border rounded-md">
        <div class="flex items-start justify-between pb-5">
            <p class="text-base font-medium">Last Price</p>
            <div>
                <h5 class="text-lg text-violet-600 font-bold">$120000</h5>
               <small class="block text-right">$2100 m&#xB2;</small>
            </div>
        </div>
        <hr>
        <div class="pt-4">
            <p class="text-base font-sm">Other Options</p>
            <ul class="space-y-1">
                <li class="text-gray-400 text-sm font-light">Best Location</li>
                <li class="text-gray-400 text-sm font-light">2 minutes away from supermarket</li>
                <li class="text-gray-400 text-sm font-light">5 minutes away from supermarket</li>
                <li class="text-gray-400 text-sm font-light">Good neighbers</li>
            </ul>
        </div>
        <div class="mt-3">
            <button class="bg-violet-500 text-white w-full py-2 rounded-lg transition-all duration-300 hover:scale-[1.005]">Add to cart <i class='bx bxs-cart'></i></button>
        </div>
       </div>
    </div>
</div>
<div class=" hidden md:block lg:col-start-8 lg:col-end-11">
    <div>
        <h4 class="text-lg font-semibold my-3">About Saler</h4>
        <div class="mt-3 shadow-lg p-3 rounded-lg mb-4">
                    <div class="flex items-center gap-2">
                        <div class="rounded-full w-14 h-14 ">
                            <img src="./../assets/97.jpg" alt="" class="rounded-full w-[100%] h-[100%] object-cover">
                        </div>
                      <div>
                        <p class="text-base font-medium ">Jhonatan Prece</p>
                        <small class="text-gray-700 text-xs">Softwere engineer</small>
                      </div>
                    </div>
                    <a href="#" class=" text-blue-500 text-sm font-light">View Profile</a>
                <div class="mt-3">
                    <p class="text-sm text-gray-500 font-light text-justify leading-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos corporis vero explicabo provident quidem omnis, assumenda porro, eligendi laudantium natus quibusdam sapiente minus, deserunt itaque similique est adipisci doloribus.
                            
                                </p>
                </div>
                <div class="mt-3 space-y-3">
                    <div class="flex items-center gap-4 ">
                        <p class="text-medium font-medium ">Language : </p>
                        <small class="text-gray-500 font-light text-small">English</small>
                    </div>
                    <div class="flex items-center gap-4 ">
                        <p class="text-medium font-medium ">Responsive rate : </p>
                        <small class="text-gray-500 font-light text-small">100%</small>
                    </div>
                    <div class="flex items-center gap-4 ">
                        <p class="text-medium font-medium ">Responsive time : </p>
                        <small class="text-gray-500 font-light text-small">Night</small>
                    </div>
                </div>
        </div>

    </div>
    <div class=" flex flex-wrap gap-5 lg:flex-col lg:gap:4">
       <MainHomeCard class="basis-[48%] lg:basis-0"></MainHomeCard>
       <MainHomeCard class="basis-[48%] lg:basis-0"></MainHomeCard>
       <MainHomeCard class="basis-[48%] lg:basis-0"></MainHomeCard>
       <MainHomeCard class="basis-[48%] lg:basis-0"></MainHomeCard>
    </div>
</div>
</div>
  </div>
</template>

<script>
import MainHomeCard from '@/components/MainHomeCard.vue';
import MainCommentBox from '../components/MainCommentBox.vue'
export default {
  components: { MainCommentBox, MainHomeCard },
data(){
    return{
        pDisplay:false,
        openComment:false
    }
},

}
</script>

<style>

</style>