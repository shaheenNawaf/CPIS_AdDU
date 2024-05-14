// BUTTONS HERE NEED ONCLICK
// YES

import Table from './Table';
import Button from '../../Buttons/Buttons';
import { useNavigate } from "react-router-dom";

export default function TableContainer() {
    const navigate = useNavigate();
    return(
        <>
            <div className='bg-blue-50 rounded-xl rounded-b-3xl shadow-md overflow-hidden'>
                <div className='p-3 flex justify-between'>
                    <div>
                        <Button buttonName="Create Product" buttonState="active" />
                        <Button buttonName="Edit Products" buttonState="active"/>
                    </div>
                    {/*<Button buttonName="Remove Product" buttonState="decline" >*/}
                </div>
                <Table />
            </div>
        </>
    )
}