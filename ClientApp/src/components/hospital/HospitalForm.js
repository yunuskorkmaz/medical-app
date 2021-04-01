import React, { useContext } from 'react';
import { Form, Input } from 'antd';
import { HospitalContext } from '../ContextProvider';


const HospitalForm = ({form}) => {

    const store = useContext(HospitalContext)

    return (
        <>
            <Form form={form} 
                
            >
                <Form.Item
                    label="Hastane Adı"
                    name="name"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </>
    )
}

export default HospitalForm;