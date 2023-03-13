import { createRouter, createWebHistory } from "vue-router";
import TheLanding from './TheLanding'
import TheTutorial from './TheTutorial'
import RequestLists from './RequestLists'
import PageNotFound from './PageNotFound'
import TutorialLists from './TutorialLists'
let route = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'',redirect:'/landing'},
        {path:'/landing',component:TheLanding},
        {path:'/requests',component:RequestLists},
        {path:'/enroll',component:RequestLists},
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