<template>
    <div class="tutorials-container">
                <div v-if="$store.state.showDialog"  @click="$event.stopPropagation()"  class="course-overview">
                     <RouterView></RouterView>
                </div>
            <div v-for="t in filteredList()" :key="t.id" class="tutorial-card">
                    <p class="course-id">Course Id : <span>{{ t.id }}</span></p>
                    <p class="course">{{ t.name }}</p>
                    <p class="author">Author : <span>{{ t.author }}</span></p>
                    <p class="price">Price : <span>{{ t.price }}</span></p>
                    <router-link @click="updateTutorialDialogStatus" class="view-course-btn" :to="{ path: `/tutorials/${t.id}`}">View Course</router-link>
            </div>        
        </div>
</template>

<script>

    export default{
    data() {
        return {
            tutorialsList: [
                { 
                    id: "80801",
                    name: "React Js Complete Guide 2023", 
                    desc:'React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
                    author: "Maximillian", 
                    price: "2000" 
                },
                { 
                    id: "80802", 
                    name: "Frontend Web Development Guide", 
                    desc:'All images Web developer Type of programmer Share All images A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS, and JavaScript in the client, and any general-purpose programming language in the server. HTTP is used for communications between client and server. A web developer may specialize in client-side applications, server-side applications, or both',
                    author: "Daniel", 
                    price: "650" 
                },
                { 
                    id: "80803", 
                    name: "HTML5 CSS3 JS", 
                    des:'',
                    author: "Mosh", 
                    price: "1300" 
                },
                { 
                    id: "80804", 
                    name: "Java", 
                    author: "Miller Brek", 
                    price: "600" 
                },
                { 
                    id: "80805", 
                    name: "AI with Neural Networks", 
                    author: "George Grey", 
                    price: "5000" 
                },
                { 
                    id: "80806", 
                    name: "Machine Learning With Python", 
                    author: "Andy Chris", 
                    price: "9000" 
                },
                { 
                    id: "80807", 
                    name: "Azure Cloud Computing Fundamentals", 
                    author: "Alan Rodrigue", 
                    price: "4500" 
                },
                { 
                    id: "80808", 
                    name: "Block Chain Fundamentals", 
                    author: "Stev Harvey", 
                    price: "3000" 
                },
                { 
                    id: "80809", 
                    name: "Big Data and Analytics", 
                    author: "Don Bosco", 
                    price: "7600" 
                }
            ]
        };
    },
    methods: {
        updateTutorialDialogStatus(){
            this.$store.dispatch({
                type:'tutorialDialogStatusUpdate',
                value:true
            })
        },
        filteredList() {
            return this.tutorialsList.filter((tutorial) =>{
                if(this.$store.getters.searchedTutorial === ''){
                    return tutorial
                }else{
                    if( tutorial.author.toLowerCase().includes(this.$store.getters.searchedTutorial.toLowerCase()) ||
                        tutorial.name.toLowerCase().includes(this.$store.getters.searchedTutorial.toLowerCase())
                    ){
                    return tutorial;
                }
                }
            })
         },
        },
    watch:{
            $route(){
                this.courseId = this.$route.params.id;
                this.$store.dispatch({
                    type:'courseUpdate',
                    value:this.tutorialsList.filter((item)=>{
                        return this.$route.params.id === item.id;
                    })
                })
            }
        },
    components: { }
}
</script>

<style scoped>
    .tutorials-container{
        display: flex;
        gap: 80px;
        flex-wrap: wrap;
        justify-content: center;
        position: relative;
        top: 100px;
        width: 93%;
        left: 3%;
    }
    .tutorial-card{
        position: relative;
        width: 20%;
        height: 400px;
        border-radius:10px ;
        background-color:  rgb(52 61 110);
        box-shadow: 5px 5px gainsboro;
        color: white;
        font-style: sans-serif;
        padding: 20px;
        
    }
    .course-id{
        position: relative;
        top: 1px;
        left: -30px;
    }
    .course{
        position:relative;
        overflow-wrap: break-word;
        top: 60px;
        margin: 20px;
        letter-spacing: 2px;
    }
    .author{
        position: absolute;
        top: 240px;
        left:10px;
        font-style: italic;
        font-weight: bold;
    }
    .price{
        position: absolute;;
        top: 280px;
        right: 10px;
    }
    .view-course-btn{
        position: absolute;;
        top: 320px;
        padding: 15px;
        width: 150px;
        right:40px;
        letter-spacing: 2px;
        border-radius: 30px;
        font-weight: bold;
        text-decoration: none;
        background-color: cornflowerblue;
        color: white;
    }
    .view-course-btn:hover{
        background-color: #505153;
        transition-duration: .5s;
    }
    @keyframes dialog {
            0%{width:0%;height: 0%;border-radius: 10%;}
            25%{width:5%;height: 5%;border-radius: 10%;}
            50%{width:10%;height: 10%;border-radius: 10%;}
            100%{width:25%;height: 25;border-radius: 10%;}
       }

    .course-overview{
        position: absolute;
        left: 50%;
        top:22%;
        border-radius: 10%;
        transform: translate(-50%,0%);
        height: 380px;
        width: 25%;
        padding: 20px;
        background-color: #a4abab;
        position: fixed;
        z-index: 1;
       animation-name: dialog;
       animation-duration: 1s;
       animation-timing-function: linear;
    }
   
    


    
</style>