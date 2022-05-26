import Item from "./Item";

function ItemList({products}) {

    //console.log(products);
  return (
    <div className='grid grid-cols-3 gap-4 place-items-stretch '>
        {products.map(p => <Item key={p.id} products={p}/>)}
    </div>   
  )
}
export default ItemList