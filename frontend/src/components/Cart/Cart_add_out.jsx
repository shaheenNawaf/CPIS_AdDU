import TableContainer from './TableCart/TableContainer';
import Add_cart_out from "./Add_cart_out"

export default function Products() {
    return (
      <>
        <div id="detail">
          <Add_cart_out />
          <TableContainer />
        </div>
      </>
    );
}