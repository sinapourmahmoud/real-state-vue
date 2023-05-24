import { createStore } from 'vuex'


export default createStore({
  state: {
    allUsers:JSON.parse(localStorage.getItem('allUsers')) || [] ,
    currentUser:JSON.parse(localStorage.getItem('currentUser')) || null,
    openModal:false,
  
  },
  getters: {
  },
  mutations: {
    changeToggle(state){
      state.openModal=!state.openModal
    },

    loginUser(state,{email,password}){
      state.currentUser=state.allUsers.map(item=>{
        if(email==item.email && password==item.password){
          return{
            ...item
          }
        }
      })
      localStorage.setItem('currentUser',JSON.stringify(state.currentUser))

    },
    addUser(state,{phone,instagram,url,email,password}){
     state.allUsers.push({email,password,url,instagram,phone})
     state.currentUser=state.allUsers[state.allUsers.length-1]
     localStorage.setItem('allUsers',JSON.stringify(state.allUsers))
     localStorage.setItem('currentUser',JSON.stringify(state.currentUser))
    }

  },
  actions: {

    addMoreInfo({commit},infos){
      commit('addUser',infos)
    },
    loginUser({commit},{email,password}){
      commit('loginUser',{email,password})
    }
    }
  },

)
