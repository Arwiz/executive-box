import {MCSFormControl} from "../app-component/MCSFormTypes";

const required = function (ctrl: MCSFormControl) {
    ctrl.errors = ctrl?.errors?.filter(o => o.key !== 'required')!;
    if (!ctrl?.value || !ctrl?.value.trim()) {
        if (ctrl?.errors) {
            ctrl.errors.push({key: 'required', message: 'Please Insert value'});
        }
     }
    ctrl.isInvalid =  (ctrl?.errors?.length>0)? true : false;
    console.log(ctrl.isInvalid);
}

const maxValue = function (ctrl: MCSFormControl, maxValue: number) {
    console.log('function call of over loaded', ctrl);
    return ctrl;
}


const Validation = {required, maxValue};

export default Validation;
