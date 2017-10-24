import {Injectable} from '@angular/core';

import {Router,CanActivate,CanActivateChild} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {

    constructor(private userService:UserService,private router:Router){}
    
    canActivateChild(): boolean  {
        return this.canActivate();
    }

    canActivate(): boolean  {
        console.log("Can activate auth guard called",this.userService.isAuthenticated);
        if(!this.userService.isAuthenticated){
            console.log("not auth");
            this.router.navigate(['/signin'])
        }
        
        return this.userService.isAuthenticated;
    }
    
}