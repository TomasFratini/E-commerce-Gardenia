import Item from "./Item";

function ItemList({products}) {

  return (
    <div className='flex flex-wrap gap-20 justify-center'>
      {products.map(p => <Item key={p.id} products={p}/>)}
    </div>
  )
}
export default ItemList