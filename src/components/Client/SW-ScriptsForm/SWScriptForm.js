import React from 'react'
import { Button, Form} from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import './SWScriptForm.scss'

export function SWScriptForm() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            ip_address: "",
        },
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue) => {
            console.log("Login Enviado")
            console.log(formValue)
        },
    });
    return(

        <Form className={"sw-script-form"} onSubmit={formik.handleSubmit}>
            <h3>SW Script</h3>
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
                name={"ip_address"}
                placeholder={"NPM server IP Address"}
                value={formik.values.ip_address}
                onChange={formik.handleChange}
                error={formik.errors.ip_address}
            />            
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