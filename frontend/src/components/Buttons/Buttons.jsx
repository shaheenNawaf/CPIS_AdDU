/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function Buttons(props){
    const navigate = useNavigate();
    
    //Three different states of the buttons
    const active = 'bg-blue-500 p-2 rounded-xl text-white hover:bg-blue-600 mx-1';
    const accept = 'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800';
    const decline = 'bg-red-500 p-2 rounded-xl text-white hover:bg-red-600';

    // ONCLICK NAVIGATION FUNCTIONS
    const cancelProduct = () => {
        navigate('/products');
    }
    const createProduct = () => {
        navigate('/products/add');
    }
    const editProduct = () => {
        navigate('/products/edit');
    }

    // BACKEND
    const handleRemoveProduct = async() => {
        console.log({productId: props.productId});
        try {
            const res = await api.delete(`/api/products/${props.productId}/`);
            console.log("Product deleted:", res.data);
            navigate('/products/edit');
        } catch (error) {
            console.error("Error removing product:", error);
            alert("Failed to remove product. Please try again later.");
        } finally {
            
        }
      };

    if(props.buttonState == "active"){
        return(
            <>
            <button type='button' className={active}> {props.buttonName} </button>
            </>       
        );
    }else if(props.buttonState == "active2"){
        return(
            <>
            <button type='button' className={active} onClick={() => window.confirm("Are you sure")}> {props.buttonName} </button>
            </>       
        );
    }else if(props.buttonState == "decline"){
        return(
            <>
            <button type='button' className={decline} onClick={() => window.confirm("Are you sure")}> {props.buttonName} </button>
            </>       
        );
    }else if(props.buttonState == "decline2"){
        return(
            <>
            <button type='button' className={decline}> {props.buttonName} </button>
            </>       
        );
    }else if(props.buttonState === "createProduct") {
        return (
            <button type='button' className={active} onClick={createProduct}> {props.buttonName} </button>
        );
    }else if(props.buttonState === "editProduct") {
        return (
            <button type='button' className={active} onClick={editProduct}> {props.buttonName} </button>
        );
    }else if(props.buttonState === "cancelProduct") {
        return (
            <button type='decline' className={decline} onClick={cancelProduct}> {props.buttonName} </button>
        );
    }else if(props.buttonState === "createProductConfirm") {
        return (
            <button type='accept' className={accept}> {props.buttonName} </button>
        );
    }else if(props.buttonState === "removeProduct") {
        return (
            <button type='decline' className={decline} onClick={handleRemoveProduct}> {props.buttonName} </button>
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
buttonName: PropTypes.string.isRequired,
buttonState: PropTypes.string.isRequired,
productId: PropTypes.number
}