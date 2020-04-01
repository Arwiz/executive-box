export interface MCSError {
    key: string;
    message: string;
}

export class MCSFormControl {
    name: string;
    value?: any;
    validation?: any[];
    errors: MCSError[] = [];
    touched?: boolean;
    pristine?: boolean;
    isInvalid?: boolean;

    constructor(name: string, value: any,  validation?: any[]) {
        this.name = name;
        this.validation = validation;
        this.value = value;
    }

    getTouched() {
        return this.touched;
    }

    getPristine() {
        return this.pristine;
    }

    setTouched(flag: boolean) {
        this.touched = flag;
    }

    setPristine(flag: boolean) {
        this.pristine = flag;
    }
}

// export class Handler {
//     _formControl: MCSFormControl;
//     constructor(formControl: MCSFormControl) {
//         this._formControl = formControl;
//         this.validate();
//     }
//
//     validate() {
//         console.log('do some Validation inner');
//         return this._formControl;
//     }
// }

export function Handler(_formControl: MCSFormControl) {
        console.log('do some Validation inner');
        return _formControl;
}




export default interface FormBuilder {
    formControls: MCSFormControl[];
    touched: boolean;
    pristine: boolean;
    isValid: boolean;
}