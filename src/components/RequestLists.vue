<template>
<div class="requestlist-container">
    <div v-for="(tutorial,index) in $store.state.enrolledCourse" :key="tutorial.id" class="requestlist">
        <p class="enrolledTutorialID">{{ tutorial.id }}</p><span class="enrolledTutorial">{{ tutorial.name }}</span>
        <button class="delist-btn" type="button" @click="delistTutorial(index)">Delist</button>
    </div>
    <div v-if="$store.state.enrolledCourse.length<1" class="requestlist">
        No  Courses Enrolled
    </div>
</div>
</template>

<script>
    export default{
        methods:{
            delistTutorial(index){
                this.$store.dispatch({
                    type:'delistTutorial',
                    value:index
            })
        },
    }
}
</script>

<style scoped>
.requestlist-container{
    position: absolute;
    display: flex;
    top: 150px;
    width: 90%;
    gap: 20px;
    left:50px;
    flex-direction: column;
    
}
.requestlist{
    height: 100px;
    background-color: #fafafa00;
    background-image: linear-gradient(45deg, #00000033, transparent);
    position: relative;
    border-radius: 10px;
    box-shadow: 1px 2px #80808052;
}
.delist-btn{
    padding: 10px;
    width: 100px;
    position: relative;
    left: 40%;
    top: 29px;
    letter-spacing: 2px;
    font-weight: bold;
    background-color:rgb(52 61 110);
    color: white;
    border-radius: 20px;
    border: 1px;
}
.delist-btn:hover{
    background-color: red;
}
.enrolledTutorialID{
    position: absolute;
    top: 43px;
    left: 15%;
    letter-spacing: 2px;
}
.enrolledTutorial{
    position: absolute;
    top: 42px;
    left: 35%;
    letter-spacing: 2px;
}
</style>