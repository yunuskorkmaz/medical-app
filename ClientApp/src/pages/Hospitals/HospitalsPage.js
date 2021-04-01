import React, { useState, useContext } from 'react';
import { Card, Button, Modal } from 'antd';
import { observer } from 'mobx-react-lite'
import AddHospital from '../../components/hospital/AddHospital';
import { HospitalContext } from '../../components/ContextProvider';

const HospitalsPage = observer(() => {
    const store = useContext(HospitalContext)

    return (
        <>
            <div style={{ padding: '20px' }}>
                <Card
                    title="Hastaneler"
                    extra={<>
                        <Button size="small" onClick={() => store.modalOpen()}>Ekle</Button>
                    </>}>
                    <AddHospital modal={true} />
                </Card>

            </div>
        </>
    )
})

export default HospitalsPage;