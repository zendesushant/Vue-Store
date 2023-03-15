import { createRouter, createWebHistory } from "vue-router";
// import TheLanding from './TheLanding'
// import TheTutorial from './TheTutorial'
// import RequestLists from './RequestLists'
// import PageNotFound from './PageNotFound'
// import TutorialLists from './TutorialLists'
// import ContactForm from './ContactForm'
//import TheFeedback from './TheFeedback'
import { defineAsyncComponent } from "vue";
/*Lazy Loading in Vue*/
let lazyTheLanding = defineAsyncComponent(()=>import('../components/TheLanding'))
let lazyTheTutorial = defineAsyncComponent(()=>import('../components/TheTutorial'))
let lazyRequestLists = defineAsyncComponent(()=>import('../components/RequestLists'))
let lazyPageNotFound = defineAsyncComponent(()=>import('../components/PageNotFound'))
let lazyTutorialLists = defineAsyncComponent(()=>import('../components/TutorialLists'))
let lazyContactForm = defineAsyncComponent(()=>import('../components/ContactForm'))
let lazyTheFeedback = defineAsyncComponent(()=>import('../components/TheFeedback'))
let route = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'',redirect:'/tutorials'},
        {path:'/landing',component:lazyTheLanding},
        {path:'/mycourses',component:lazyRequestLists},
        {path:'/contact',component:lazyContactForm},
        {path:'/feedback',component:lazyTheFeedback},
        {path:'/tutorials',component:lazyTutorialLists,children:[
            {path:':id',component:lazyTheTutorial
            }
        ]},
        {path:'/:notFound(.*)',component:lazyPageNotFound}

    ],
    linkActiveClass:'active',
    linkExactActiveClass: "active"
})

export default route