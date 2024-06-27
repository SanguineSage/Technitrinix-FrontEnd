import Card from "../shared/Card"
import { useContext } from "react"
import EcomContext from "../../context/EcomContext"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Products() {
    const {product} = useContext(EcomContext)
   
   


    const redirect = useNavigate()

    


  return (
    <div>
       <div className="my-[20px] mx-[30px]">
        <h1 className="mb-[10px] text-orange-500 font-bold text-2xl">All Products</h1>
        <div className="flex gap-12 flex-wrap">
            {product.map((item)=>(
                <Card key={item._id}>
                    <Link to={`/details/${item._id}`}><img src={ "https://technotronix-api-2.onrender.com/" + item.img} alt="" className="h-[200px]" /></Link>
                    <p className="font-bold">{item.name}</p>
                    <p>{item.price}</p>
                    <button   onClick={()=> addToCart(item._id)} className="bg-orange-500 text-white p-[10px] rounded mt-[10px]">
                        Add to cart
                    </button>
                </Card>
            ))}
        </div> 
    </div>
    </div>
  )
}

export default Products