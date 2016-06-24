import { RouterConfig } from '@angular/router';
import {DashboardComponent, LoginComponent, ContainerComponent} from '../components/index';
export const routes: RouterConfig = [
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', component: ContainerComponent, children: []}
];