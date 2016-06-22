import {bootstrap}    from '@angular/platform-browser-dynamic';
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
// import { FORM_PROVIDERS } from '@angular/common';
import {AppComponent} from './app.component';
import { provideStore } from '@ngrx/store';
// import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";
// reducers
import { login } from './reducers/login';

bootstrap(AppComponent, [
    // providers
    // MATERIAL_PROVIDERS,
    // FORM_PROVIDERS,
    // ROUTER_PROVIDERS,
    
    // store
    provideStore({
        // reducers
        login
    })
]);
