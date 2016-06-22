import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { MATERIAL_DIRECTIVES } from 'ng2-material';
// import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators } from '@angular/common';
import { LoginState } from '../../models/login.state';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    directives: []
})
export class LoginComponent {
    // loginForm: ControlGroup;
    @Output() isLogin: EventEmitter<LoginState> = new EventEmitter<LoginState>();


    // constructor(private fb: FormBuilder) {
    //     this.loginForm = fb.group({
    //         'username': ['', Validators.required],
    //         'password': ['', Validators.required]
    //     });
    // }

    ngOnInit() { }

    onSubmit(username, password) {
        let loginSend: LoginState = {
            isLogged: false,
            username: username.value,
            password: password.value
        };
        this.isLogin.emit(loginSend);
    }

}