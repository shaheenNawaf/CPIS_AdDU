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
                        <Button buttonName="Save Changes" buttonState="active2" />
                        <Button buttonName="Cancel" buttonState="decline2" />
                    </div>
                    {/*<Button buttonName="Remove Product" buttonState="decline" >*/}
                </div>
                <Table />
            </div>
        </>
    )
}