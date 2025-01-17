import Card from "./shared/Card"
import { useContext } from "react"
import EcomContext from "../context/EcomContext"
import { Link } from "react-router-dom"

function TopSelling() {
    const {topSelling, addToCart} = useContext(EcomContext)


  return (
    <div>
        <div className="my-[20px] mx-[75px]">
        <h1 className="mb-[10px] text-orange-500 font-bold text-2xl">Top Selling Products</h1>
        <div className="flex gap-6 flex-wrap">
            {topSelling.map((item)=>(
                <Card key={item.id}>
                    <Link to={`/detail/${item._id}`} ><img src={item.img} alt="" className="h-[200px]" /></Link>
                    <p className="font-bold">{item.name}</p>
                    <p>{item.price}</p>
                    <button onClick={()=> addToCart(item._id)} className="bg-orange-500 text-white p-[10px] rounded mt-[10px]">
                        Add to cart
                    </button>
                </Card>
            ))}
        </div>
    </div>
    </div>
  )
} 

export default TopSelling