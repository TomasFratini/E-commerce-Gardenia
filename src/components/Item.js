import ItemCount from "./ItemCount"


function Item(props) {

    const {name, description, precio, img} = props.productos

  return (
      <div className="card w-max h-max shadow-xl flex space-x-4">
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <strong>{precio}</strong>
                <div className="card-actions">
                <button className="btn btn-primary">Agregar al carrito</button>
                </div>
                <ItemCount/>
            </div>
        </div>

    </div>


  )
}
export default Item