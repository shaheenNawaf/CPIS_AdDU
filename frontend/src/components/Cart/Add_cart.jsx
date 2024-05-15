import { useState, useEffect } from 'react';
import Button from '../Buttons/Buttons';

function Add_cart(){
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/products/list?format=json');
            
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const today = new Date();
    const date = today.setDate(today.getDate()); 
    const defaultDate = new Date(date).toISOString().split('T')[0]

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5 text-black bg-white px-20 py-10 items-center mx-4 rounded-xl">
                <div className='mt-3'>
                        <label className='block text-base mb-2'>Product Name</label>
                        <select className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'>
                            {products.map((product, index) => (
                                <option key={index} value={product.id}>{product.name}</option>
                            ))}
                        </select>
                        <label className='block text-base mb-2'>Stock-In Quantity</label>
                        <input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            type="text"
                            placeholder="Quantity"
                        />
                        <label className='block text-base mb-2'>Stock-In Date</label>
                        <input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 mb-3'
                            type="date"
                            defaultValue={defaultDate}
                        />
                        <Button buttonName="Add Stock-In" buttonState="createProductConfirm" />
                        <Button buttonName="Cancel" buttonState="cancelStock" />
                </div>
            </div>
        </div>
    )
}
export default Add_cart