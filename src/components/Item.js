import { Link } from "react-router-dom"

function Item(props) {

    const {id, name, description, precio, img} = props.productos

    
  return (
      <div className="card w-max h-max shadow-xl flex space-x-4">
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="jabones" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <strong>${precio}</strong>
                <div className="card-actions">
                </div>
                <Link to={`/productos/${id}`} className="btn btn-outline">Ver producto</Link>
            </div>
        </div>

    </div>


  )
}
export default Item