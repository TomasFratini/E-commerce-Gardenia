import { useEffect, useState } from "react";
import { productList } from "../Data/productList";
import Item from "./Item";

function ItemList({products}) {

    
  return (
    <div className='grid grid-cols-3 gap-4 place-items-stretch h-56 mt-8'>
        {products.map(p => <Item key={p.id} productos={p}/>)}
    </div>
  )
}
export default ItemList