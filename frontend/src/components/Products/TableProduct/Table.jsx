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
                    {products.map((product, index) => (
                        <tr className={rowStyle} key={index}>
                            <td className={dataStyle}>{product.id}</td>
                            <td className={dataStyle}>{product.name}</td>
                            <td className={dataStyle}>{product.price}</td>
                            <td className={dataStyle}>{product.description}</td>
                            <td className={dataStyle}>{product.created_at}</td>
                            <td><Button buttonName="Remove Product" buttonState="decline"/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}