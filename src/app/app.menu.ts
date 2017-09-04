import {MenuItem} from '../fw/services/menu.service';

export let initialMenueItems:Array<MenuItem> = [
    {
        text:'Dashboard',
        icon:'glyphicon-dashboard',
        route:'/dashboard',
        submenu:null
    },
    {
        text:'Countries',
        icon:'glyphicon-flag',
        route:'/countries',
        submenu:null
    },
    {
        text:'Settings',
        icon:'glyphicon-flag',
        route:'/settings',
        submenu:null
    }
]