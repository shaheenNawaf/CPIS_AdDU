// Add_cart.js

import { useState, useEffect } from 'react';
import Button from '../Buttons/Buttons';
import { useNavigate } from "react-router-dom";

function Add_cart() {
    const navigate = useNavigate(); 
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [stockInQuantity, setStockInQuantity] = useState('');

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
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleStockIn = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/products/update_stockin/${selectedProduct}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_id: selectedProduct,
                    stock_in_quantity: stockInQuantity
                })
            });
    
            if (!response.ok) {
                throw new Error('Failed to update stock');
            }
            navigate("/cart");
            const updatedProduct = await response.json();
            console.log('Updated Product:', updatedProduct);
    
            // Reset form after successful update
            setSelectedProduct('');
            setStockInQuantity('');
        } catch (error) {
            console.error('Error updating stock:', error);
        }
    };
    

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5 text-black bg-white px-20 py-10 items-center mx-4 rounded-xl">
                <div className='mt-3'>
                    <label className='block text-base mb-2'>Product Name</label>
                    <select
                        className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                    >
                        <option value="">Select Product</option>
                        {products.map((product, index) => (
                            <option key={index} value={product.id}>{product.name}</option>
                        ))}
                    </select>
                    <label className='block text-base mb-2'>Stock-In Quantity</label>
                    <input
                        className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                        type="text"
                        value={stockInQuantity}
                        onChange={(e) => setStockInQuantity(e.target.value)}
                        placeholder="Stock-In Quantity"
                    />
                    <div>
                        <button 
                            className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' 
                            onClick={handleStockIn}
                        >Add Stock</button>
                        <Button buttonName="Cancel" buttonState="cancelStock" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add_cart;
