<template>
        <p>{{ getTutorialDescription }}</p>
        <router-link to="/mycourses" class="enroll-btn" type="button" @click="enroll">Enroll Now</router-link>
</template>

<script>
    export default{
        data(){
            return{
                dis:true
            }
        },
        computed:{
            getTutorialDescription(){
             return   (this.$store.getters.getTutorial.desc=='' || this.$store.getters.getTutorial.desc=='undefined' || this.$store.getters.getTutorial.desc==null)?  'Not Available' : this.$store.getters.getTutorial.desc ;
            }
        },
        methods:{
            enroll(){
                setTimeout(()=>{
                        this.$store.dispatch({
                        type:'tutorialDialogStatusUpdate',
                        value:false
                        })
                        this.$store.dispatch({
                            type:'enrolledCourse',
                            value:this.$store.getters.getTutorial
                     })                
                },3000)
               
            }
        }
        }
</script>

<style scoped>
    .course-dialog{
        
    }

    .enroll-btn{
        padding: 10px;
    width: 125px;
    background-color: black;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    box-shadow: 3px 3px grey;
    position: absolute;
    top: 70%;
    }
    .enroll-btn:hover{
        transition-duration: 1s;
        background-color: #505153;
    }
</style>