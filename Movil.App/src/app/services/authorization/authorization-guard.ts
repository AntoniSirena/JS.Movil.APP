import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router';


@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {

    constructor(private router : Router) {
        
    }

    canActivate() {

        let sectionData = JSON.parse(localStorage.getItem("sectionData")) || '';

        if(this.router.url.match('defaul') && !sectionData){
            return false;
        }

        if (sectionData) {
            return true;
        }else{
            return false;
        }
    }

}