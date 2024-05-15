import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../Buttons/Buttons';
import api from "../../api";

export default function Edit_product() {
    const navigate = useNavigate();
    
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        // Fetch products when the component mounts
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

        fetchProducts();
    }, []);

    const handleProductChange = (event) => {
        const selectedProductId = event.target.value;
        setSelectedProductId(selectedProductId);
        const selectedProduct = products.find(product => product.id === parseInt(selectedProductId));
        if (selectedProduct) {
            setName(selectedProduct.name);
            setPrice(selectedProduct.price);
            setDescription(selectedProduct.description);
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleEditProduct = async () => {
        try {
            const updatedProduct = {
                name: name,
                price: price,
                description: description
            };
    
            console.log({ productId: selectedProductId, updatedProduct });
    
            const res = await api.put(`/api/products/update/${selectedProductId}/`, updatedProduct);
            
            console.log("Product updated:", res.data);
            
            navigate('/products');
        } catch (error) {
            console.error("Error editing product:", error);
            alert("Failed to edit product. Please try again later.");
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5 text-black bg-white px-20 py-10 items-center mx-4 rounded-xl">
                <div className='mt-3'>
                    <label className='block text-base mb-2'>Product Name</label>
                    <select
                        className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                        value={selectedProductId}
                        onChange={handleProductChange}
                    >
                        <option value="">Select a product</option>
                        {products.map((product) => (
                            <option key={product.id} value={product.id}>{product.name}</option>
                        ))}
                    </select>
                    <label className='block text-base mb-2'>Name</label>
                    <input
                        className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <label className='block text-base mb-2'>Price</label>
                    <input
                        className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                        type="text"
                        value={price}
                        onChange={handlePriceChange}
                    />
                    <label className='block text-base mb-2'>Product Description</label>
                    <textarea
                        rows={3}
                        className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' onClick={handleEditProduct}>Edit Item</button>
                    <Button buttonName="Cancel" buttonState="cancelProduct" />
                </div>
            </div>
        </div>
    );
}
