import React from 'react'
import { Button, Dropdown, Form} from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import './BGPForm.scss'
import { runBGPScript } from '../../../api/scripts';
import { toast } from "react-toastify";
const device_os = [
    {key: "cisco_ios", text: "cisco_ios", value: "cisco_ios"},
    {key: "cisco_wlc", text: "cisco_wlc", value: "cisco_wlc"},
    {key: "cisco_nxos", text: "cisco_nxos", value: "cisco_nxos"},
    {key: "autodetect", text: "autodetect", value: "autodetect"},
]
export function BGPForm() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            secret: "",
            ip_address: "",
            unestablished_ip_address: "",
            device_type: ""
        },
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formValue) => {
            console.log(formValue)
            try {
                const response = await runBGPScript(formValue)
                const { access } = response;
                console.log(access)
            } catch (error) {
                toast.error(error.message)
            }
        },
    });
    return(

        <Form className={"bgp-script-form"} onSubmit={formik.handleSubmit}>
            <h3>BGP Script</h3>
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
            <Form.Input
                name={"unestablished_ip_address"}
                placeholder={"Un-established IP Address"}
                value={formik.values.unestablished_ip_address}
                onChange={formik.handleChange}
                error={formik.errors.unestablished_ip_address}
            />
            <Dropdown
                placeholder='Device OS'
                fluid
                selection
                options={device_os}
                value={formik.values.device_type}
                onChange={formik.handleChange}
                error={formik.errors.device_type}
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
        unestablished_ip_addres: Yup.string().required(true),
    }
}