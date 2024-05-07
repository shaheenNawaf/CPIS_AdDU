// BUTTONS HERE NEED ONCLICK
// YES

import Table from './Table';
import Button from '../../Buttons/Buttons';

export default function TableContainer() {
    return(
        <>
            <div className='bg-blue-50 rounded-xl rounded-b-3xl shadow-md overflow-hidden'>
                <div className='p-3 flex justify-between'>
                    <div>
                        <Button buttonName="New" buttonState="active" />
                    </div>
                </div>
                <Table />
            </div>
        </>
    )
}