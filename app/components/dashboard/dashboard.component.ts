import { Component, OnInit, Input } from '@angular/core';
// import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    // directives: [MD_SIDENAV_DIRECTIVES],
    // styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    title: string = 'Login Successful';
    @Input() prikazi: boolean;
    constructor() { }

    ngOnInit() {
        // console.log(this.isRedirected);
        // if (this.isRedirected) {
        //     this.title = 'Login succesfull';
        // } else {
        //     this.title = 'Not good';
        // }
    }

}