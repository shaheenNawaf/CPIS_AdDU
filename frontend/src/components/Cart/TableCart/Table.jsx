// ISSUES:
// - if too many products it wont scroll down
// - navigation is not per page

import Modal from "../../Modal/Modal";
import React, { useState, useEffect } from 'react';


export default function Table() {

    const headerStyle = 'font-semibold py-6 text-left pl-4';
    const rowStyle = 'hover:bg-gray-200';
    const dataStyle = 'p-4';
    

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProductsInventory();
    }, []);

    const fetchProductsInventory = async () => {
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
    
    return(
        <div className="overflow-x-auto"> 
            <table className= 'table-auto min-w-full bg-white rounded-b-3xl'>
                <thead className="">
                    <tr onClick= { Modal }>
                        <th className={headerStyle}>Product Name</th>
                        <th className={headerStyle}>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr className={rowStyle} key={index}>
                                <td className={dataStyle}>{product.name}</td>
                                <td className={dataStyle}>{product.stock}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}