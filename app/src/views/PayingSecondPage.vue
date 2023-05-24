<template>
 <div class="md:flex md:justify-center">
  <div class="flex flex-col gap-5 md:flex-row md:w-full md:justify-center md:items-center">
    <div class="bg-[#eeeeee] p-2 rounded-xl md:w-1/3">
        <div class="flex items-center gap-7 border-b pb-2 last:border-0 last:pb-0   ">
            <h4 class="text-gray-800 text-md font-semibold basis-16">Price</h4>
            <p class="text-green-500 grow">2000$</p>
        </div>
        <div class="flex items-center gap-7 border-b pb-2 last:border-0 last:p-0 mt-2">
            <h4 class="text-gray-800 text-md font-semibold basis-16">Price</h4>
            <p class="text-red-500 grow">2000$</p>
        </div>
    </div>
    <div>
        
    </div>
    <div>
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
    cvvFocus:false,
    dateFocus:false
  }
}
}
</script>

<style>

</style>