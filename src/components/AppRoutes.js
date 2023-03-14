import { createRouter, createWebHistory } from "vue-router";
import TheLanding from './TheLanding'
import TheTutorial from './TheTutorial'
import RequestLists from './RequestLists'
import PageNotFound from './PageNotFound'
import TutorialLists from './TutorialLists'
import ContactForm from './ContactForm'
import TheFeedback from './TheFeedback'
let route = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'',redirect:'/tutorials'},
        {path:'/landing',component:TheLanding},
        {path:'/mycourses',component:RequestLists},
        {path:'/contact',component:ContactForm},
        {path:'/feedback',component:TheFeedback},
        {path:'/tutorials',component:TutorialLists,children:[
            {path:':id',component:TheTutorial
            }
        ]},
        {path:'/:notFound(.*)',component:PageNotFound}

    ],
    linkActiveClass:'active',
    linkExactActiveClass: "active"
})

export default route