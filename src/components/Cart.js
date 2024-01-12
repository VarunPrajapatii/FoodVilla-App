import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div>
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
            
            <button className="bg-green-100 p-2 m-5" onClick={() => handleClearCart()}>Clear Cart</button>
            
            <div>
                <ul className="flex p-5">
                {cartItems.map((item) => (
                    <li className="p-5">{item}</li>
                ))}
                </ul>
            </div>
        </div>
    )
};

export default Cart;