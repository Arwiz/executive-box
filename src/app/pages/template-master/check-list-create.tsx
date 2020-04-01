import React, {ChangeEvent, useState} from 'react';
import {MCSInput, MCSCheckbox, MCSMultiChecklist, MCSRadio, MCSButton} from '../app-component/mcs-input'
import {Button} from "react-bootstrap";

import {Handler, MCSFormControl} from '../app-component/MCSFormTypes'
import Validation from './MCSValidation'


const CheckListCreate = () => {

    const formInitialData = {
        'firstName': null,
        'lastName': null
    }

    const [formBuilder, setFormBuilder] = useState(
        {
            'firstName': new MCSFormControl('firstName',
                'av', [Validation.required]),
            'lastName': new MCSFormControl('lastName',
                null,[])
        });

    const mergeBuilder= (event: ChangeEvent, formControl: MCSFormControl)=> {
        event.preventDefault();
        const builder = {...formBuilder, formControl}
        setFormBuilder(builder);
    }
    const mergeOnBlurBuilder= (event: Event, formControl: MCSFormControl)=> {
        event.preventDefault();
        const builder = {...formBuilder, formControl}
        setFormBuilder(builder);
    }

    return (<div>
        <MCSInput key={'firstName'} formControlName={'First Name'} isRequired={true}
                  form={formBuilder['firstName']} onBlur={mergeOnBlurBuilder} onChange={mergeBuilder}/>
        <MCSInput key={'lastName'} formControlName={'Last Name'} isRequired={true}
                  form={formBuilder['lastName']} onBlur={mergeOnBlurBuilder} onChange={mergeBuilder}/>

        <Button title={'Hello'} onClick={(event:any) => {
            event.preventDefault();
            console.log("hello me !");
            // console.log(formState);
            console.log(formBuilder);

        }}> ARV</Button>
    </div>)
};


export default CheckListCreate;
