import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '../components/Navbar';
import '../styles/cart.scss'
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { AddOutlined, Delete, Edit, RemoveOutlined } from '@mui/icons-material';
import {Link} from 'react-router-dom';
let image_url='http://localhost:5000'
const columns = [
  { field: 'id', headerName: 'ID', width: 250 },
  { field: 'title', headerName: 'Food Title', width: 190 },
  {
    field: 'image',
    headerName: 'Image',
    width: 170,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={`${image_url}/${params.value}`} />
        </>
      );
    }
  },
  {
    field: 'price',
    headerName: 'Price ($)',
    width: 120,
  }
]

const handleDelete =(id)=>{
  console.log(id)
}

const actionColumn =[
  {field:'action',headerName:'Action',width:140,
  renderCell:(params)=>{
      return(
          <div className="cellAction">
            <Link to='/users/test'>
            <div className="viewBtn"><Edit/></div>
            </Link>
              <div className="deleteBtn" onClick={()=>handleDelete(params.row.id)}><Delete/></div>
          </div>
      )
  }}
]

const qtyColumn =[
  {field:'_id',headerName:'Quantity',width:140,
  renderCell:(params)=>{
    console.log(params)
      return(
          <div className="cellAction">
            <div className="viewBtn"><AddOutlined/></div>
            <strong>{params.quantity}</strong>
              <div className="deleteBtn" ><RemoveOutlined/></div>
          </div>
      )
  }}
]


const Cart =()=> {
    const {cartItems} = useSelector(state=>state.rootReducer)
    const rows = cartItems?.map(data=>{
        return{
            title:data?.title,
            image:data?.image,
            price:data?.price,
            id:data?._id,
        }
    })
  return (
    <div className='cart'>
        <Navbar/>
      <div style={{ height: 500, width: '100%' }} className='data-grid'>
      <DataGrid
        rows={rows} 
        columns={columns.concat(qtyColumn,actionColumn)}
        pageSize={5}
      />
    </div>
    </div>
  );
}

export default Cart