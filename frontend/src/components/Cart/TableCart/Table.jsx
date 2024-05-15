// ISSUES:
// - if too many products it wont scroll down
// - navigation is not per page

import Modal from "../../Modal/Modal";
import Button from '../../Buttons/Buttons';

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
                        <th className={headerStyle}>Current Stock</th>
                        <th className={headerStyle}>Stock Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={rowStyle} onClick={ Modal }>
                        <td className={dataStyle}>Oil</td>
                        <td className={dataStyle}>1</td>
                        <td className={dataStyle}>12/05/2024</td>
                    </tr>
                    <tr className={rowStyle} onClick={ Modal }>
                        <td className={dataStyle}>Oil</td>
                        <td className={dataStyle}>2</td>
                        <td className={dataStyle}>10/05/2024</td>
                    </tr>
                    <tr className={rowStyle} onClick={ Modal }>
                        <td className={dataStyle}>Tires</td>
                        <td className={dataStyle}>1</td>
                        <td className={dataStyle}>06/05/2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}