import { Component } from '@angular/core';

@Component({
    selector: 'ct-navbar',
    templateUrl: 'app/core/navbar.component.html'
})
export class NavbarComponent { 
    isIn = false;
    toggleState() {
        this.isIn = this.isIn === false ? true : false;
    }
}