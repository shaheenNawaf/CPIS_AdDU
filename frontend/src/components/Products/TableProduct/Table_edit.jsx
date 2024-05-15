// ISSUES:
// - if too many products it wont scroll down (can make page scroll down and make header and sidebar sticky)
// - navigation is not per page
import { useState, useEffect } from 'react';
import Button from '../../Buttons/Buttons';

export default function Table() {

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

    const headerStyle = 'font-semibold py-6 text-left pl-4';
    const rowStyle = 'hover:bg-gray-200';
    const dataStyle = 'p-4';
    
    return(
        <div className="overflow-x-auto"> 
            <table className= 'table-auto min-w-full bg-white rounded-b-3xl'>
                <thead className="">
                    <tr>
                        <th className={headerStyle}>Product ID</th>
                        <th className={headerStyle}>Product Name</th>
                        <th className={headerStyle}>Price</th>
                        <th className={headerStyle}>Description</th>
                        <th className={headerStyle}>Date Created</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        const createdAtDate = new Date(product.created_at);
                        const formattedDate = `${createdAtDate.getMonth() + 1}/${createdAtDate.getDate()}/${createdAtDate.getFullYear()}`;
                        return (
                            <tr className={rowStyle} key={index}>
                                <td className={dataStyle}>{product.id}</td>
                                <td className={dataStyle}>
                                    <input
                                        className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                        type="text"
                                        value={product.name}
                                    />
                                </td>
                                <td className={dataStyle}>
                                    <input
                                        className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                        type="text"
                                        value={product.price}
                                    />
                                </td>
                                <td className={dataStyle}>
                                    <input
                                        className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                                        type="text"
                                        value={product.description}
                                    />
                                </td>
                                <td className={dataStyle}>{formattedDate}</td>
                                <td><Button buttonName="Remove Product" buttonState="removeProduct" productId={product.id}/></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}


                        {/*<tr className={rowStyle}>
                            <td className={dataStyle}>{"1"}</td>
                            <td className={dataStyle}>{<input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            type="text"
                            />}</td>
                            <td className={dataStyle}>{<input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            type="text"
                            value={"350"}/>}</td>
                            <td className={dataStyle}>{<input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            type="text"
                            value={"Oil stuff"}/>}</td>
                            <td className={dataStyle}>{"2024-05-09T04:00:06.643313Z"}</td>
                        </tr>
                        <tr className={rowStyle}>
                            <td className={dataStyle}>{"2"}</td>
                            <td className={dataStyle}>{<input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            type="text"
                            value={"Tires"}
                            />}</td>
                            <td className={dataStyle}>{<input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            type="text"
                            value={"560"}/>}</td>
                            <td className={dataStyle}>{<input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            type="text"
                            value={"1 Piece of Tire"}/>}</td>
                            <td className={dataStyle}>{"2024-05-09T04:00:30.806496Z"}</td>
                            </tr>*/}