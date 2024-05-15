// BUTTONS HERE NEED ONCLICK
// YES

import Table from './Table';
import Buttons from '../../Buttons/Buttons';

export default function TableContainer() {

    return(
        <>
            <div className='bg-blue-50 rounded-xl rounded-b-3xl shadow-md overflow-hidden'>
                <div className='p-3 flex justify-between'>
                    <div>
                        <Buttons buttonName="Create Product" buttonState="createProduct" />
                        <Buttons buttonName="Edit Products" buttonState="editProduct"/>
                    </div>
                    {/*<Button buttonName="Remove Product" buttonState="decline" >*/}
                </div>
                <Table />
            </div>
        </>
    )
}