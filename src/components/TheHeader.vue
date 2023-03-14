<template>
    <div class="header-container">
        <input v-if="$router.currentRoute.value.path==='/tutorials'" autocomplete="Off" class="searchBox" type="text" placeholder="Search Courses or Authors here..." @input="searchedTutorial">
        <RouterLink  to="/tutorials" class="header-btn " exact-active-class="exact-active" >Tutorials</RouterLink>
        <RouterLink  to="/mycourses" class="header-btn " exact-active-class="exact-active" >My Courses</RouterLink>
        <RouterLink  to="/contact" class="header-btn " exact-active-class="exact-active" >Contact Form</RouterLink>
        <RouterLink  to="/feedback" class="header-btn" exact-active-class="exact-active">Feedbacks</RouterLink>
    </div>
    
</template>

<script>
    export default{
        methods:{
            searchedTutorial(e){
                if(e.target.value.length>2){
                    this.$store.dispatch({
                        type:'searchedTutorial',
                        value:e.target.value
                    })
                }else{
                    this.$store.dispatch({
                        type:'searchedTutorial',
                        value:''
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .header-container{
        position: absolute;
        display: flex;
        padding: 30px;
        gap:20px;
        background-color: black;
        justify-content: center;
        width:100%;
        top: 0px;
        margin: 0px;
        position: fixed;
        z-index: 1;
    }
    .header-btn{
    padding: 10px;
    width: 250px;
    letter-spacing: 2px;
    border-radius: 30px;
    font-weight: bold;
    text-decoration: none;
    background-color: rgb(52 61 110);
    color: white;
    }
    .searchBox{
        border-radius: 20px;
        width: 450px;
        text-align: center;
        margin-right: 150px;
    }
    .exact-active{
        background-color: #008000d6
    }
</style>