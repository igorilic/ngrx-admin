import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Store } from '@ngrx/store';

import { LoginComponent, DashboardComponent } from '../index';
import { LoginState } from '../../models/index';
@Component({
    moduleId: module.id,
    selector: 'container',
    templateUrl: 'container.component.html',
    directives: [LoginComponent, DashboardComponent, ROUTER_DIRECTIVES]
})
export class ContainerComponent implements OnInit {
     isRedirected: boolean;

    constructor(private _store: Store<any>,
                private _router: Router) {
        this._store.select('login')
            .subscribe(
                (lg: LoginState) => {
                    this.isRedirected = lg.isLogged;
                                    } 
            )
    }
// 
    ngOnInit() {
        
    }

    login($login: LoginState) {
       this._store.dispatch({type: 'LOGIN', payload: $login});
    //    if (this.isRedirected) {
    //         this._router.navigate(['dashboard']);
            
    //     }
    }


}