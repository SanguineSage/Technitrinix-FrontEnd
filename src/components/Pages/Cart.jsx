import EcomContext from "../../context/EcomContext"
import { useContext } from "react";
import {MdDelete} from "react-icons/md"
import { Link } from "react-router-dom";

function Cart() {
    const {cartItems, updateQuantity, totalAmount, deleteItems} = useContext(EcomContext);
    const cartTable = (
        <>
        <table className="w-[90%] mx-auto h-[30vh]">
            <thead className="border-4">
                <th>Action</th>
                <th>Item</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                
            </thead>
            <tbody className="text-center">
                {cartItems.map((item)=> (
                    <tr key={item.id} className="border-b-2">
                        <td>
                            <div>
                                <button onClick={()=> deleteItems(item.id)} >
                                <MdDelete className="text-2xl text-orange-500"/>
                                </button>
                            </div>
                        </td>
                        <td>{item.name}</td>
                        <td>
                            <div className="flex justify-center">
                                <img src={item.img} alt="" className="h-[50px]" />
                            </div>
                        </td>
                        <td>{item.price}</td>
                        <td>
                            <input type="number" className="outline outline-1" value={item.quantity} min="1"  onChange={(e)=> updateQuantity(item.id, e.target.value)}/>
                        </td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div>
            <h1 className="text-4xl font-bold border-8 mt-3">Total = {totalAmount()}</h1>
        </div>
          
        <div>
            <Link to="/checkout"><button className=" text-black font-bold mt-3 bg-orange-600 px-4">Checkout</button></Link>
        </div>
        
        </>
    )

  return (
    <div className="m-[5%]">
        <h1 className="text-3xl font-bold text-center mb-10">Your shop cart</h1>
        {cartItems.length > 0 ? cartTable : <h1 className="text-center font-bold">No Items</h1> }
    </div>
  )
}

export default Cart