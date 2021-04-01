import React, { useContext } from 'react';
import { Modal, Form, Button } from 'antd';
import HospitalForm from '../../components/hospital/HospitalForm'
import { HospitalContext } from '../ContextProvider';
import { observer } from 'mobx-react-lite';

const AddHospital = observer(({ modal }) => {

    const store = useContext(HospitalContext)
    const [form] = Form.useForm();

    const onSubmit = async () => {
        var a = await form.validateFields();
        console.log(a)
    }

    return (
        <>
            {
                modal ? <>
                    <Modal visible={store.addModal} onCancel={() => store.modalClose()} title="Hastane Ekle">
                        <HospitalForm form={form} />
                    </Modal>
                </>
                    : <>
                        <HospitalForm form={form} />
                        <Button onClick={() => onSubmit()} >Kaydet</Button>
                    </>
            }
            
        </>
    )
})

export default AddHospital;