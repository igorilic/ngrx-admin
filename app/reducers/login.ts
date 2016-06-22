import { Action } from '@ngrx/store';
import { LoginState } from '../models/login.state';

export const login = (state: LoginState = {isLogged:false, username: '685', password: '685'}, action: Action) => {
    switch(action.type) {
        case 'LOGIN':
            if (state.username === action.payload.username
                && state.password === action.payload.password) {
                return Object.assign({}, state, {isLogged: true});
            }
            return state;
        case 'LOGOUT':
            return state;

        default:
            return state;
    }
}