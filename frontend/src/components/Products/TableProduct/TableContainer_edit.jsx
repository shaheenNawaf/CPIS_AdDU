// BUTTONS HERE NEED ONCLICK
// YES

import Table from './Table_edit';
import Button from '../../Buttons/Buttons';

export default function TableContainer() {
    return(
        <>
            <div className='bg-blue-50 rounded-xl rounded-b-3xl shadow-md overflow-hidden'>
                <div className='p-3 flex justify-between'>
                    <div>
                        {/* still need one for save changes */}
                        <Button buttonName="Save Changes" buttonState="createProduct" />
                        <Button buttonName="Cancel" buttonState="cancelProduct" />
                    </div>
                </div>
                <Table />
            </div>
        </>
    )
}