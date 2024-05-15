// BUTTONS HERE NEED ONCLICK
// YES

import Table from './Table';
import Button from '../../Buttons/Buttons';
import { useNavigate } from "react-router-dom";

export default function TableContainer() {
    const navigate = useNavigate();

    const createProduct = () => {
        navigate('/products/add');
    }
    const editProduct = () => {
        navigate('/products/edit');
    }

    return(
        <>
            <div className='bg-blue-50 rounded-xl rounded-b-3xl shadow-md overflow-hidden'>
                <div className='p-3 flex justify-between'>
                    <div>
                        <button type="button" onClick={createProduct}
                            className='border-2 border-neutral-700 bg-neutral-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-neutral-600 mt-2'>
                            {"Create Product"}
                        </button> 
                        <button type="button" onClick={editProduct}
                            className='border-2 border-neutral-700 bg-neutral-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-neutral-600 mt-2'>
                            {"Edit Products"}
                        </button> 
                        
                        <Button onClick={createProduct} buttonName="Create Product" buttonState="active" />
                        <Button buttonName="Edit Products" buttonState="active"/>
                    </div>
                    {/*<Button buttonName="Remove Product" buttonState="decline" >*/}
                </div>
                <Table />
            </div>
        </>
    )
}