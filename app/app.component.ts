import {Component, OnInit} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Store } from '@ngrx/store';

import { ContainerComponent } from './components/index';
// import { LoginState } from './models/index';
@Component({
    selector: 'my-app',
    template: `
    <router-outlet></router-outlet>
    `,
    directives: [ContainerComponent,ROUTER_DIRECTIVES]
})

export class AppComponent{}