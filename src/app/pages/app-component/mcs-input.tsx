import React, {ChangeEvent, SyntheticEvent} from 'react';
import {Button, FormControl, InputGroup} from "react-bootstrap";

import {MCSFormControl, MCSError} from "./MCSFormTypes";

interface MCSInputProps {
    formControlName: string;
    key: string;
    form: MCSFormControl;
    isRequired: boolean;
    onBlur: (event:Event, formControl: MCSFormControl)=>void;
    onChange: (event:ChangeEvent, formControl: MCSFormControl)=>void;
}


const MCSInput: React.FC<MCSInputProps> = (props) => {
    const ctrl = props.form;
    let onblur: (event: any) => void;
    onblur = (event: Event) => {
        event.preventDefault();
        ctrl.value = (event.target as HTMLInputElement).value;
        ctrl?.validation?.forEach(o => o(ctrl));
        props.onBlur(event, ctrl);
    };

    const onchange = (event: ChangeEvent) => {
        event.preventDefault();
        ctrl.value = (event.target as HTMLInputElement).value;
        ctrl?.validation?.forEach(o => o(ctrl));
        ctrl.setTouched(true);
        props.onChange(event, ctrl);
    }

    return (
            <div className="col-md-6 mb-3">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text  aria-label="Checkbox for following text input"  className={ ctrl.isInvalid ? "form-control is-invalid" : "form-control"}
                                         id={props.key}  onBlur={onblur}/>
                        {ctrl?.errors.length > 0 ? (<div className="invalid-feedback">{ctrl?.errors[0].message}</div>) : null}
                    </InputGroup.Prepend>
                    <FormControl aria-label={props.formControlName} />
                </InputGroup>


                {/*<label htmlFor={props.key}>{props.formControlName}</label>*/}
                {/*<input type="text" className={ ctrl.isInvalid ? "form-control is-invalid" : "form-control"}*/}
                {/*       id={props.key} onChange={onchange} onBlur={onblur}/>*/}
                {/*{ctrl?.errors.length > 0 ? (<div className="invalid-feedback">{ctrl?.errors[0].message}</div>) : null}*/}
            </div>);
};

const MCSCheckbox = ({...props}) => {
    return (<div>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" />
        </InputGroup>
        <div></div>
    </div>);
};

const MCSMultiChecklist = ({...props}) => {
    return (<div>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" />
        </InputGroup>
        <div></div>
    </div>);
};

const MCSRadio = ({...props}) => {
    return (<div>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="Text input with checkbox" />
        </InputGroup>
        <div></div>
    </div>);
};

const MCSButton = ({...props}) => {
    const clickEvent = (event: any) => {
        event.preventDefault();
        console.log("Button clicked..!");
        if (props?.onClick) {
            props.onClick(event);
        }
    }
    return (<div>
        <Button onClick={clickEvent}>{props.title || 'Button'}</Button>
        <div></div>
    </div>);
};


export {MCSInput, MCSCheckbox, MCSMultiChecklist, MCSRadio, MCSButton};
