import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { Storage } from '@ionic/storage';
@Injectable({
    providedIn: "root"
})
export class LoginGuardService implements CanActivate {
    constructor(public router: Router, ) { }
    canActivate(): boolean {
        // let jwt = this.storage.get("jwt");
        // if (!jwt || "") {
        //     this.router.navigate(['sign-in']);
        //     return false;
        // }
        return true;
    }
}