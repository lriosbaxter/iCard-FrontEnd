import React from 'react'
import { Button, Form} from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import './AutomationScriptForm.scss'

export function AutomationScriptForm() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            secret: "",
            ip_address: "",
            device_type: "",
            nwa_script: "",
        },
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue) => {
            console.log("Login Enviado")
            console.log(formValue)
        },
    });
    return(

        <Form className={"automation-script-form"} onSubmit={formik.handleSubmit}>
            <h3>NW Automation Script</h3>
            <Form.Input
                name={"username"}
                placeholder={"Username"}
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.errors.username}
            />
            <Form.Input
                name={"password"}
                placeholder={"Password"}
                type={'password'}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
            />
            <Form.Input
                name={"secret"}
                placeholder={"Secret"}
                type={'password'}
                value={formik.values.secret}
                onChange={formik.handleChange}
                error={formik.errors.secret}
            />
            <Form.Input
                name={"ip_address"}
                placeholder={"IP Address"}
                value={formik.values.ip_address}
                onChange={formik.handleChange}
                error={formik.errors.ip_address}
            />            
            <Form.Select
                name={"device_type"}
                placeholder={"Device OS"}
                value={formik.values.device_type}

                onChange={formik.handleChange('device_type')}
                options={[
                    { key: 'cisco_ios', text: 'cisco_ios', value: 'cisco_ios' },
                    { key: 'cisco_nxos', text: 'cisco_nxos', value: 'cisco_nxos' },
                    { key: 'cisco_wlc', text: 'cisco_wlc', value: 'cisco_wlc' },
                    { key: 'autodetect', text: 'autodetect', value: 'autodetect' },
                ]}
            />
            {/* <Form.Select
                name={"nwa_script"}
                placeholder={"nwa_script"}
                value={formik.values.nwa_script}

                onChange={formik.handleChange('nwa_script')}
                options={[
                    { key: '1', text: '1', value: '1' },
                    { key: '2', text: '2', value: '2' },
                    { key: '3', text: '3', value: '3' },
                    { key: '4', text: '4', value: '4' },
                ]}
            /> */}
            <Button type={"submit"} content={"Correr script"} primary fluid/>
        </Form>
    )
}

function validationSchema() {
    return {
        username: Yup.string().required(true),
        password: Yup.string().required(true),
        secret: Yup.string().required(true),
        ip_address: Yup.string().required(true),
        un_ip_address: Yup.string().required(true),
        device_type: Yup.string().required(true),
    }
}