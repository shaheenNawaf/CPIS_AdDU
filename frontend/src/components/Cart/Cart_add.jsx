import TableContainer from './TableCart/TableContainer';
import Add_cart from "./Add_cart"

export default function Products() {
    return (
      <>
        <div id="detail">
          <Add_cart />
          <TableContainer />
        </div>
      </>
    );
}