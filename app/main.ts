import {bootstrap}    from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
// import { FORM_PROVIDERS } from '@angular/common';
import {AppComponent} from './app.component';
import { provideStore } from '@ngrx/store';
// import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";
// reducers
import { login } from './reducers/login';
import { routes } from './routes/index';

bootstrap(AppComponent, [
    // providers
    // MATERIAL_PROVIDERS,
    // FORM_PROVIDERS,
    provideRouter(routes),
    
    // store
    provideStore({
        // reducers
        login
    })
]);
