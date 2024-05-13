import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import Header from './Sidebar/Header';

export default function Layout() {
    return (
      <>
        <div id="detail" className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar />
            <div className='flex-1'>
                <Header />
                <div className='p-4'><Outlet /></div>
            </div>
        </div>
      </>
    );
  }