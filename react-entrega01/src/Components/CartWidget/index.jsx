import {BsCart2} from "react-icons/bs";
function CartWidget({cant}) {
    return(
        <li className="nav-item mt-2">                      
            <button type="button" className="btn btn-body position-relative">
            <BsCart2 size={25}/>                 
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
            {cant}
            </span>
            </button>
        </li>
    
    )
}
export default CartWidget