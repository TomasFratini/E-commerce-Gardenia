import ItemCount from "./ItemCount"

function ItemDetail( props ) {

    const {id, name, description, precio, img} = props.detalle

    const onAdd = (cantidad) => {
      console.log("se agrego un producto", cantidad)
  }

  return (
    
    <div className="card card-side bg-base-100 shadow-xl max-w-3xl max-h-full ">
      <figure><img src={img} alt="img"/></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="max-h-60">{description}</p>
        <div className="card-actions justify-end">
        </div>
          <ItemCount className="" stock={5} initial={1} onAdd={onAdd}/>
          <strong className="max-h-60 text-xl">{precio}</strong>
        </div>
    </div>

  )
}
export default ItemDetail