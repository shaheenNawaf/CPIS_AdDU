// ISSUES:
// - if too many products it wont scroll down (can make page scroll down and make header and sidebar sticky)
// - navigation is not per page


export default function Table() {

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
                        <th className={headerStyle}>Stock</th>
                        <th className={headerStyle}>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={rowStyle}>
                        <td className={dataStyle}>Data 1</td>
                        <td className={dataStyle}>Data 2</td>
                        <td className={dataStyle}>Data 3</td>
                        <td className={dataStyle}>Data 3</td>
                        <td className={dataStyle}>Data 3</td>
                    </tr>
                    <tr className={rowStyle}>
                        <td className={dataStyle}>Data 1</td>
                        <td className={dataStyle}>Data 2</td>
                        <td className={dataStyle}>Data 3</td>
                        <td className={dataStyle}>Data 3</td>
                        <td className={dataStyle}>Data 3</td>
                    </tr>
                    <tr className={rowStyle}>
                        <td className={dataStyle}>Data 1</td>
                        <td className={dataStyle}>Data 2</td>
                        <td className={dataStyle}>Data 3</td>
                        <td className={dataStyle}>Data 3</td>
                        <td className={dataStyle}>Data 3</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}