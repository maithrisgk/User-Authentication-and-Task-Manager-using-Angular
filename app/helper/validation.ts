import {AbstractControl, FormGroup } from '@angular/forms';

export function symbolValidator (el : AbstractControl){
    if(el.hasError('required'))
    return null;
    if(el.value.indexOf('@')=== -1){
        return{
            symbol:true
        }
    }
    return null;
}

export function passwordMatch(form : FormGroup){
const password= form.get('password');
const confirmPassword=form.get('confirmPassword');
if(password.value === confirmPassword.value){
    confirmPassword.setErrors(null);
}else{
    confirmPassword.setErrors({
        passwordMatch:true
    });
}
}