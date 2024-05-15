// PLACEHOLDER LANG

import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function FormCreateProduct() {
    const [prodName, setProdName] = useState("");
    const [prodPrice, setProdPrice] = useState("");
    const [prodDescription, setProdDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await api.post("/api/products/create", {
                name: prodName,
                price: prodPrice,
                description: prodDescription
            });
            console.log("Product created:", res.data);
            navigate("/products");
        } catch (error) {
            console.error("Error creating product:", error);
            alert("Failed to create product. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className='flex justify-center items-center h-screen bg-neutral-300'>
                <div className='w-96 p-6 mb-10 shadow-lg bg-white rounded-md'>
                    <h1 className='text-3xl block text-center font-semibold'>Create Product</h1>
                    <hr className='mt-3'></hr>
                    <div className='mt-3'>
                        <label className='block text-base mb-2'>Product Name</label>
                        <input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            type="text"
                            value={prodName}
                            onChange={(e) => setProdName(e.target.value)}
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='block text-base mb-2'>Price</label>
                        <input
                            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                            type="text"
                            value={prodPrice}
                            onChange={(e) => setProdPrice(e.target.value)}
                            placeholder="Price"
                            required
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='block text-base mb-2'>Description</label>
                        <input
                            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                            type="text"
                            value={prodDescription}
                            onChange={(e) => setProdDescription(e.target.value)}
                            placeholder="Description"
                        />
                    </div>
                    <div className='mt-5'>
                        <button type="submit" className='border-2 border-neutral-700 bg-neutral-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-neutral-600'>
                            Create Product
                        </button> 
                    </div>
                </div>
            </div>
        </form>
    );
}

export default FormCreateProduct;
