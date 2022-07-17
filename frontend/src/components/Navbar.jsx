import React,{ useState } from 'react'
import '../styles/navbar.scss'
import {Link} from 'react-router-dom'
import {Search,ShoppingCartOutlined} from '@mui/icons-material';
import { Avatar, Badge } from '@mui/material';
import {useSelector} from 'react-redux';
import { useEffect } from 'react';
const Navbar = () => {
  const user = true;
  const{cartItems} = useSelector(state=>state.rootReducer);
  const [openCategory,setOpenCategory] = useState(false)
  const [isScrolled,setIsScrolled] = useState(false)
  const handleOpenCategory =()=>{
    setOpenCategory(!openCategory)
  }
  
  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0 ? false :true)
    return ()=>(window.onscroll=null)
  }

  useEffect(()=>{
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  },[cartItems]);

  return (
    <>
     <div className={isScrolled ? 'navbar scrolled':'navbar'}>
      <div className="left">
      <span><span style={{cursor:'pointer'}} onClick={handleOpenCategory}>Products</span></span> 
      <span><Link to='/'>Resources</Link></span>  
      <span><Link to='/'>About</Link></span> 
      <span><Link to='/'>Inspiration</Link></span> 
      </div>
      <div className="center">
      <img src="https://www.adobe.com/express/create/logo/media_1bb512c44804fea4f690739f84932c1fb575fa317.jpeg?width=400&format=jpeg&optimize=medium" alt="cc" />
      </div>
      <div className="right">
        <span>+0536-2908</span>
        <Search />
        {user && <div className='avatar'><Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xjdkwtxQl6t5M0CSq7LtXAcqsObVn3Jh-g&usqp=CAU'/></div>}
        {
          !user ? 
          <>
          <button className='login'>Login</button>
        <button className='signup'>Sign Up </button>
        </> : <div className="cart-icon">
        <Badge badgeContent={cartItems.length} color="primary">
          <Link to='/cart'>
          <ShoppingCartOutlined/>
          </Link>
        </Badge>
          </div>
        }
      </div>
    </div>
    {
      openCategory && (
        <div className="product-cat">
      <div className="pro-cat">
      <h4>We offer you the many categories of foods</h4>
      <div className="pro-data">
      <span>
       <img src='https://img.freepik.com/free-vector/sticker-template-with-pizza-isolated_1308-62307.jpg?w=2000' alt='dd'/>
        <b>Pizza</b>
      </span>
      <span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTRsCH51_RhA0YpjD2vJOw5Bmiy5Do7wZmkA&usqp=CAU" alt="dd" />
        <b>Breakfast</b>
      </span>
      <span>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBv8EwaiztTYqwbVsvnB3FXp4WHkf7KegP9A&usqp=CAU' alt=''/>
        <b>Burger</b>
      </span>
      <span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0belEiWj1O_0zB6Xs6mvZC_-oa2Zcij2vw&usqp=CAU" alt="ss" />
        <b>Lunch</b>
      </span>
      <span>
        <img src="https://www.kindpng.com/picc/m/588-5884196_cocktail-png-image-cocktail-clipart-png-transparent-png.png" alt="cc" />
        <b>Drinks</b>
      </span>
      <span>
        <img src="https://www.saklikentrestaurant.com/img-page/thumb-s-372-spreader-breakfast.jpg" alt="jj" />
        <b>Diner</b>
      </span>
      </div>
      </div>
     
    </div>
      )
    }
    
    </>
  )
}

export default Navbar