// BUTTONS HERE NEED ONCLICK
// import { useState } from 'react';
import Table from './Table';
import Button from '../../Buttons/Buttons';
import Modal from '../../Modal/sampleText';

export default function TableContainer() {
    //const [show, setShow] = useState(false);
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    return(
        <>
            <div className='bg-blue-50 rounded-xl rounded-b-3xl shadow-md overflow-hidden'>
                <div className='p-3 flex justify-between'>
                    <div>
                        <Button buttonName="Stock-in" buttonState="active" onClick={ Modal }/>
                        <Button buttonName="Stock-out" buttonState="active" onClick={ Modal }/>
                    </div>
                    {/*<Button buttonName="Remove Item" buttonState="decline"/>*/}
                </div>
                <Table />
            </div>
        </>
    )
}