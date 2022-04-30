import ItemCount from "./ItemCount"


function Item(props) {

    const {name, description, precio, img} = props.productos

    const onAdd = (cantidad) => {
        console.log("se agrego un producto", cantidad)
    }

  return (
      <div className="card w-max h-max shadow-xl flex space-x-4">
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="jabones" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <strong>{precio}</strong>
                <div className="card-actions">
                </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
        </div>

    </div>


  )
}
export default Item