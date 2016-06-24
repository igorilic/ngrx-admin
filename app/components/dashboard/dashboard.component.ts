import { Component, OnInit, Input } from '@angular/core';
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
        
    }

}