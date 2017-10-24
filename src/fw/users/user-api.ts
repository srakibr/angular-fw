import {Observable} from 'rxjs/Observable';

export abstract class UserApi {
    signIn:(username:String,password:String,rememberMe:boolean)=>Observable<any>;
    signOut:()=>Observable<any>;
    //change password
}