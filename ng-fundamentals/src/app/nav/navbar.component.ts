import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
    constructor(private auth: AuthService) {

    }

}