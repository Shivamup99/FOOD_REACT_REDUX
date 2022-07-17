import React from 'react'
import { useDispatch } from 'react-redux'
import '../styles/product.scss'
const Product = ({data}) => {
    let image_url='http://localhost:5000'
    const dispatch = useDispatch()
    const addToCart =()=>{
       dispatch ({
        type:'ADD_TO_CART',
        payload:{...data,quantity:1}
       })
    }
  return (
    <div className='product'>
        <img src={`${image_url}/${data?.image}`} alt={data?.title} />
        <div className="product-data">
        <p>{data?.title}</p>
        <b>$ {data?.price}</b>
        </div>
        <button onClick={()=>addToCart()} className='add-cart'>Add to cart</button>
    </div>
  )
}

export default Product