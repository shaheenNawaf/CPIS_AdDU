import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import Button from '../Buttons/Buttons';

function Add_product(){
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
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="mt-10 flex flex-col gap-5 text-black bg-white px-20 py-10 items-center mx-4 rounded-xl">
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
                            <label className='block text-base mb-2'>Price</label>
                            <input
                                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                                type="text"
                                value={prodPrice}
                                onChange={(e) => setProdPrice(e.target.value)}
                                placeholder="Price"
                                required
                            />
                            <label className='block text-base mb-2'>Product Description</label>
                            <textarea rows={3}
                                className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                value={prodDescription}
                                onChange={(e) => setProdDescription(e.target.value)}
                                placeholder="Description"
                            />
                            <Button type="submit" buttonName="Create Product" buttonState="createProductConfirm" />
                            <Button buttonName="Cancel" buttonState="cancelProduct" />
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Add_product