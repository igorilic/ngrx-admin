import {Component, OnInit} from '@angular/core';
// import { RouteConfig, Router } from '@angular/router-deprecated';
import { Store } from '@ngrx/store';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LoginState } from './models/login.state';
@Component({
    selector: 'my-app',
    template: `
    <login
        (isLogin)="login($event)">
    </login>
    <dashboard [prikazi]="isRedirected"></dashboard>
    `,
    directives: [DashboardComponent, LoginComponent]
})
// @RouteConfig([
//     {path: '/dashboard', component: DashboardComponent, name: 'Dashboard'}
// ])
export class AppComponent implements OnInit {

    isRedirected: boolean;

    constructor(private _store: Store<any>) {
        this._store.select('login')
            .subscribe(
                (lg: LoginState) => {
                    this.isRedirected = lg.isLogged;
                                    } 
            )
    }

    ngOnInit() {
        // if (this.isRedirected) {
        //     this._router.navigate(['Dashboard'])
        // }
    }

    login($login: LoginState) {
       this._store.dispatch({type: 'LOGIN', payload: $login});
    }

    
}
