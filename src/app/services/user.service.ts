import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs/Rx';
import {UserApi} from '../../fw/users/user-api';

@Injectable()
export class UserService implements UserApi{
    isAuthenticated = true;

    constructor(private router:Router){}

    signIn(username: String, password: String, rememberMe: boolean) : Observable<any>{
        console.log("sign in "+username+" pass:"+password);
        this.isAuthenticated = true;
        return Observable.of({}).delay(2000);
    }

    signOut():Observable<any>{
        this.isAuthenticated = false;
        this.router.navigate(['/signin']);
        return Observable.of({});
    }
    
    
}