import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';
import { LoginState } from '../../models/login.state';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Store } from '@ngrx/store';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    directives: []
})
export class LoginComponent {
    // loginForm: ControlGroup;
    @Output() isLogin: EventEmitter<LoginState> = new EventEmitter<LoginState>();
    
    onSubmit(username, password) {
        let loginSend: LoginState = {
            isLogged: false,
            username: username.value,
            password: password.value
        };
        this.isLogin.emit(loginSend);
    }

}