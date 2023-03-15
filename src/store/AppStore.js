import { createStore } from "vuex";


let appStore = createStore({
    actions:{
        searchedTutorial(context,payload){
            context.commit('searchedTutorial',payload)
        },
        updateFeedbackData(context,payload){
            context.commit('updateFeedbackData',payload)
        },
        delistTutorial(context,payload){
            context.commit('delistTutorial',payload)
        },
        spinnerStatus(context,payload){
            context.commit('spinnerStatus',payload)
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
        searchedTutorial(state){
            return state.searchedTutorial;
        },
        getTutorial(state){
            return state.tutorial;
        },
        tutorialDialogStatus(state){
            return state.showDialog;
        },
        spinnerStatus(state){
            return state.spinnerStatus;
        },
        enrolledCourses(state){
            return state.enrolledCourse
        },
        updateFeedbackData(state){
           return state.updateFeedbackData;
        },
    },
    mutations:{
        updateFeedbackData(state,payload){
            state.updateFeedbackData.push(payload.value)
        },
        searchedTutorial(state,payload){
            state.searchedTutorial=payload.value;
        },
        delistTutorial(state,payload){
           state.enrolledCourse.splice(payload.value,1)
        },
        spinnerStatus(state,payload){
            state.spinnerStatus = payload.value;
        },
        enrolledCourse(state,payload){
                        console.log(payload.value)
                        state.enrolledCourse.push(payload.value)
                   

               }
            ,
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
            enrolledCourse:[],
            spinnerStatus:false,
            isCourseEnrolled:false,
            searchedTutorial:'',
            updateFeedbackData:[]
        }
    }
})

export default appStore;