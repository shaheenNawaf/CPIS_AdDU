// Can add more info above table

import TableContainer from './TableProduct/TableContainer';
import Edit_product from "./Edit_product"

export default function Products_edit() {
    return (
      <>
        <div id="detail">
            <TableContainer />
            <Edit_product />
        </div>
      </>
    );
}