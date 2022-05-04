import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router';


@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {

    sectionData = JSON.parse(localStorage.getItem("sectionData")) || '';

    constructor() {}

    canActivate() {

        if (this.sectionData) {
            return true;
        }else{
            return false;
        }
    }

}