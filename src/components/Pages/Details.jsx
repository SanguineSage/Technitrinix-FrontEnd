import { useParams } from "react-router-dom"
import { useContext } from "react"
import EcomContext from "../../context/EcomContext"

function Details() {
    const params = useParams()
    const carid = params.id
    const {product} = useContext(EcomContext)
    const caritem = product.find((item)=> item._id === carid)
    console.log(caritem)

  return (
    <div className='flex m-[5%] gap-4'>
      <div className='w-[50%]'>
        <img src={"http://localhost:5000/" + caritem?.img} alt="" />
      </div>
      <div className='w-[50%]'>
        <h1 className='text 2-xl font-bold border-b-2 mb-5'> {caritem?.name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim at excepturi fugit quae veritatis sit aperiam, quod autem fuga dignissimos provident maiores? Voluptates quod hic minus quas enim? Ea, accusamus!</p>
        <p className='text-xl font-bold mb-5 mt-5'>{caritem?.price}</p>
      </div>
    </div>
  )
}

export default Details