import { createStore } from "vuex";


let appStore = createStore({
    actions:{
        delistTutorial(context,payload){
            context.commit('delistTutorial',payload)
        },
        enrolledCourse(context,payload){
            context.commit('enrolledCourse',payload)
        },
        courseUpdate(context,payload){
            context.commit('courseUpdate',payload)
        },
        tutorialDialogStatusUpdate(context,payload){
            context.commit('tutorialDialogStatusUpdate',payload)
        }
    },
    getters:{
        getTutorial(state){
            return state.tutorial;
        },
        tutorialDialogStatus(state){
            return state.showDialog;
        }
    },
    mutations:{
        delistTutorial(state,payload){
           state.enrolledCourse.splice(payload.value,1)
        },
        enrolledCourse(state,payload){
            state.enrolledCourse.push(payload.value)
        },
        courseUpdate(state,payload){
            state.tutorial=payload.value[0];
        },
        tutorialDialogStatusUpdate(state,payload){
            state.showDialog = payload.value;
        }
    },
    state(){
        return{
            tutorial:{},
            showDialog:false,
            enrolledCourse:[]
        }
    }
})

export default appStore;