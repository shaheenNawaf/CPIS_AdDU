// ISSUES:
// - if too many products it wont scroll down
// - navigation is not per page

import Modal from "../../Modal/Modal";

export default function Table() {

    const headerStyle = 'font-semibold py-6 text-left pl-4';
    const rowStyle = 'hover:bg-gray-200';
    const dataStyle = 'p-4';
    
    return(
        <div className="overflow-x-auto"> 
            <table className= 'table-auto min-w-full bg-white rounded-b-3xl'>
                <thead className="">
                    <tr onClick= { Modal }>
                        <th className={headerStyle}>Product Name</th>
                        <th className={headerStyle}>Quantity</th>
                        <th className={headerStyle}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={rowStyle} onClick={ Modal }>
                        <td className={dataStyle}>Item 1</td>
                        <td className={dataStyle}>Item 2</td>
                        <td className={dataStyle}>Item 3</td>
                    </tr>
                    <tr className={rowStyle} onClick={ Modal }>
                        <td className={dataStyle}>Item 1</td>
                        <td className={dataStyle}>Item 2</td>
                        <td className={dataStyle}>Item 3</td>
                    </tr>
                    <tr className={rowStyle} onClick={ Modal }>
                        <td className={dataStyle}>Item 1</td>
                        <td className={dataStyle}>Item 2</td>
                        <td className={dataStyle}>Item 3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}