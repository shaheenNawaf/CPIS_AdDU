import { FcMindMap } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineCube, HiShoppingCart, HiOutlineLogout } from "react-icons/hi";

export default function Sidebar() {
  const location = useLocation();

  return (
      <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
        
        <div className='flex items-center gap-2 px-1 py-3'>
          <FcMindMap fontSize={25}/>
          <span className='text-neutral-100 text-lg'>Inventory System</span>
        </div>
        
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
          <Link
            to="/products"
            className={`flex items-center gap-2 font-light px-3 py-3 hover:bg-neutral-700 hover:no-underline ${location.pathname === "/products" ? 'bg-neutral-600' : ''} rounded-sm text-base`}
          >
            <HiOutlineCube fontSize={18} />Products
          </Link>
          <Link
            to="/cart"
            className={`flex items-center gap-2 font-light px-3 py-3 hover:bg-neutral-700 hover:no-underline ${location.pathname === "/cart" ? 'bg-neutral-600' : ''} rounded-sm text-base`}
          >
            <HiShoppingCart fontSize={18} />Inventory(will need renaming in code)
          </Link>
        </div>

        <div className=' flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
          <Link
            to="/logout"
            className={`flex items-center gap-2 font-light px-3 py-3 hover:bg-neutral-700 hover:no-underline rounded-sm text-base text-red-500`}
          >
            <HiOutlineLogout fontSize={18} />Log Out
          </Link>
        </div>
      </div>
  );}