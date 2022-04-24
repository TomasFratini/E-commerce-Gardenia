import ItemCount from "./ItemCount"

function ItemListContainer({name, description}) {
  return (
        
            <div class="card w-96 h-48 bg-green-300 shadow-xl flex space-x-4 ">
                <div class="card-body">
                    <h2 class="card-title">{name}!</h2>
                    <p>{description}</p>
                  <ItemCount/>
                </div>
                {/* <figure><img src="#" alt="Shoes" /></figure> */}
            </div>
        
  )
}
export default ItemListContainer