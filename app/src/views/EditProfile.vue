<template>
  <div class="bg-white shadow-lg rounded-xl p-2">
    <div class="w-full h-[10rem] rounded-xl relative">
        <img class="w-full h-full object-cover rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf6k0foOkCfM1rlin7aJ0nx6vcIyGSGzK_b2yx6EpFoIFbObO75U3ya38R83YSmEEwI7s&usqp=CAU" />
        <div class="absolute -bottom-[3.5rem] left-5 flex  gap-2 items-end">
            <div class="w-[6rem] h-[6rem] rounded-lg ">
                <img src="./../assets/97.jpg" alt="" class="rounded-lg w-full h-full object-cover">
                
            </div>
            <div>
                <h2 class="text-xl font-bold">Sina Pourmahmoud</h2>
                <small class="text-gray-500 font-light">Real estate worker</small>
            </div>
        </div>
    </div>
    <div class="mt-20 lg:grid lg:grid-cols-8 lg:gap-5">
        <div class="flex flex-col lg:col-start-1 lg:col-end-6">

        
        <form>
            <div class="flex gap-5 border-b pb-4 items-center ">
                <div class="basis-[20%]">
                    <p>UserName</p>
                </div>
                <div class="grow">
                    <input type="text" class=" w-full rounded-md border  p-1 text-sm outline-none transition-all duration-300 focus:scale-[1.02]" value="sina4000">

                </div>
            </div>
            <div class="flex gap-5 border-b pb-4 items-center mt-4">
                <div class="basis-[20%]">
                    <p>Email</p>
                </div>
                <div class="grow">
                    <input type="email" class=" w-full rounded-md border  p-1 text-sm outline-none transition-all duration-300 focus:scale-[1.02]" value="sina4000">

                </div>
            </div>
            <div class="flex gap-5 border-b pb-4 items-center mt-4">
                <div class="basis-[20%]">
                    <p>Password</p>
                </div>
                <div class="grow">
                    <input type="text" class=" w-full rounded-md border  p-1 text-sm outline-none transition-all duration-300 focus:scale-[1.02]" value="sina4000">

                </div>
            </div>
            
            <div class="flex gap-5 border-b pb-4 items-center mt-4">
                <div class="basis-[20%]">
                    <p>Generate</p>
                </div>
                <div class="grow">
                    <select class="w-full rounded-md border  p-1 text-sm outline-none ">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>
            <div class="flex gap-5 border-b pb-4 items-center mt-4">
                <div class="basis-[20%]">
                    <p>Langauge</p>
                </div>
                <div class="grow">
                    <select class="w-full rounded-md border  p-1 text-sm outline-none ">
                        <option value="Male">English</option>
                        <option value="Female">Other</option>
                    </select>
                </div>
            </div>
            <div class="flex gap-5 border-b pb-4 items-center mt-4">
                <div class="basis-[20%]">
                    <p>Date of birth</p>
                </div>
                <div class="grow">
                    <div class="grow flex items-center gap-2">
                        <select class=" w-1/2 rounded-md border  p-1 text-sm outline-none ">
                            <option value="year">year</option>
                            <option value="">Other</option>
                        </select>
                        <select class=" w-1/3 rounded-md border  p-1 text-sm outline-none ">
                            <option value="month">month</option>
                            <option value="Female">Other</option>
                        </select>
                        <select class=" w-1/3 rounded-md border  p-1 text-sm outline-none ">
                            <option value="date">date</option>
                            <option value="Female">Other</option>
                        </select>
    
                    </div>
                </div>
            </div>
            <div class="flex gap-5 border-b pb-4 items-center mt-4">
                <div class="basis-[20%]">
                    <p>Linkden</p>
                </div>
                <div class="grow">
                    <input type="email" class=" w-full rounded-md border  p-1 text-sm outline-none transition-all duration-300 focus:scale-[1.02]" value="sina4000">

                </div>
            </div>
            <div class="flex gap-5 border-b pb-4 items-center mt-4">
                <div class="basis-[20%]">
                    <p>Telegram</p>
                </div>
                <div class="grow">
                    <input type="email" class=" w-full rounded-md border  p-1 text-sm outline-none transition-all duration-300 focus:scale-[1.02]" value="sina4000">

                </div>
            </div>
            <div class="flex gap-5  pb-4 items-center mt-4">
                <div class="basis-[20%]">
                    <p>Instagram</p>
                </div>
                <div class="grow">
                    <input type="email" class=" w-full rounded-md border  p-1 text-sm outline-none transition-all duration-300 focus:scale-[1.02]" value="sina4000">

                </div>
            </div>
        </form>
    </div>
        <div class="lg:col-start-6 lg:col-end-9">
            <h3 class="my-3 text-lg font-semibold md:my-0 md:mb-2">Credit Cards</h3>
            <div class="w-full h-[15rem] bg-sky-800 rounded-lg relative flex justify-center items-center">
                <div class="absolute bg-sky-700 right-10 w-[5rem] h-[5rem] rounded-full top-5 "></div>
                <div class="absolute bg-sky-700 w-[6rem] h-[6rem] rounded-full bottom-5 left-10"></div>
                <div class="w-[80%] bg-blurblack h-[90%] rounded-lg z-10 p-3 flex flex-col justify-between">
                    <div>
                        <h3 class="font-medium text-white">VISA CARD</h3>
                    </div>
                    <div>
                        <span class="text-xs text-white font-semibold">Card Owner</span>
                        <div class="mt-1 relative">
                            <input type="number" placeholder="123654698745" class="w-full p-2 outline-none bg-transparent border-0 text-xl text-white" @focus="focus=true" @blur="focus=false" max="999999999999" min="1">
                            <div class="absolute bottom-0 left-0  h-[1px] transition-all duration-1000   bg-white " :class="focus ? 'w-[100%] ' : 'w-0'"></div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-1/2">
                          <span class="text-xs text-white font-semibold">Owner Name</span>
                          <div class="mt-1 relative">
                              <input type="text" placeholder="Sina" class="w-full p-2 outline-none bg-transparent border-0 text-sm text-white" @focus="nameFocus=true" @blur="nameFocus=false">
                              <div class="absolute bottom-0 left-0  h-[1px] transition-all duration-1000   bg-white " :class="nameFocus ? 'w-[100%] ' : 'w-0'"></div>
                          </div>
                        </div>
                        <div class="w-1/4">
                          <span class="text-xs text-white font-semibold">Date</span>
                          <div class="mt-1 relative">
                              <input type="number" placeholder="yyyy/mm" class="w-full p-2 outline-none bg-transparent border-0 text-sm text-white" @focus="dateFocus=true" @blur="dateFocus=false" >
                              <div class="absolute bottom-0 left-0  h-[1px] transition-all duration-1000   bg-white " :class="dateFocus ? 'w-[100%] ' : 'w-0'"></div>
                          </div>
                        </div>
                        <div class="w-1/4">
                          <span class="text-xs text-white font-semibold">CVV</span>
                          <div class="mt-1 relative">
                              <input type="number" placeholder="123" class="w-full p-2 outline-none bg-transparent border-0 text-sm text-white" @focus="cvvFocus=true" @blur="cvvFocus=false" max="9999" min="1">
                              <div class="absolute bottom-0 left-0  h-[1px] transition-all duration-1000   bg-white " :class="cvvFocus ? 'w-[100%] ' : 'w-0'"></div>
                          </div>
                        </div>

                    </div>
                </div>
            </div>
            <button class="mt-3 bg-violet-700 rounded-md text-white py-1 px-5 md:w-full">Save</button>
            <button class="mt-3 bg-red-700 rounded-md text-white py-1 px-5 md:w-full">Sign out</button>
            <button class="mt-3 bg-sky-700 rounded-md text-white py-1 px-5 md:w-full">Add Home</button>
        </div>
    
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        focus:false,
        nameFocus:false,
        dateFocus:false,
        cvvFocus:false
    }
}
}
</script>

<style>

</style>