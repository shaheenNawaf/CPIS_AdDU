/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { HiOutlinePlus, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

export default function Buttons(props){
    //Three different states of the buttons
    const active = 'bg-blue-500 p-1 px-3 rounded-md text-white hover:bg-blue-600 mx-1';

    const accept = 'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800';
    
    const decline = 'bg-red-500 p-1 px-3 rounded-md text-white hover:bg-red-600';

    const add = 'bg-green-500 p-1 px-3 rounded-md text-white hover:bg-green-600';

    if(props.buttonState == "active"){
        return(
            <>
            <button type='button' className={active}> <div className='flex items-center'>  <HiOutlinePlus className='mr-2'/>{props.buttonName} </div> </button>
            </>       
        );
    }else if(props.buttonState == "decline"){
        return(
            <>
            <button type='button' className={decline}> {props.buttonName} </button>
            </>       
        );
    }else if(props.buttonState == "add"){
        return(
            <>
            <button type='button' className={add}>  <div className='flex items-center'>  <HiOutlinePlus className='mr-2'/>{props.buttonName} </div> </button>
            </>       
        );
    }else if(props.buttonState == "edit"){
        return(
            <>
            <button type='button' className={active}> <div className='flex items-center'>  <HiOutlinePencil className='mr-2'/>{props.buttonName} </div>  </button>
            </>       
        );
    }else if(props.buttonState == "delete"){
        return(
            <>
            <button type='button' className={decline}> <div className='flex items-center'>  <HiOutlineTrash className='mr-2'/>{props.buttonName} </div>  </button>
            </>       
        );        
    }else{
        return(
            <>
            <button type='button' className={accept}> {props.buttonName} </button>
            </>       
        );
    }
}

Buttons.propTypes = {
buttonName: PropTypes.string.isrequired,
buttonState: PropTypes.string.isRequired
}