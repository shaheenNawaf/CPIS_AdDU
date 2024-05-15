// Can add more info above table

import TableContainer from './TableProduct/TableContainer';
import Add_product from "./Add_product"

export default function Products() {
    return (
      <>
        <div id="detail">
            <TableContainer />
            <Add_product/>
        </div>
        
      </>
    );
}