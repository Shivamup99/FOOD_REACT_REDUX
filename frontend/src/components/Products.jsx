import React, { useState } from 'react'
import { useEffect } from 'react';
import { publicRequest } from '../apis/apiCell';
import Product from './Product';
import '../styles/products.scss'
import Pagination from '@mui/material/Pagination';
const Products = () => {
    const [productsData,setProductsData] = useState([]);
    let [page, setPage] = useState(1);

    useEffect(()=>{
      const getAllProducts = async()=>{
       const response = await publicRequest.get(`/products?page=${page}`)
       setProductsData(response.data)
      }
      getAllProducts();
    },[page])

    const handlePagination =(page)=>{
        setPage(page)
        window.scroll(0,0);
    }
  return (
    <>
     <div className='products'>
        {
            productsData && productsData.map((item,i)=>(
                <Product data={item} key={i}/>
            ))
        }
    </div>
    <div className="pagination">
    <Pagination count={Math.ceil(productsData.length/page)} 
    variant='outlined' onChange={(e)=>handlePagination(e.target.textContent)}/>
    </div>
    </>
  )
}

export default Products