import React from 'react'
import '../styles/home.scss'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='home'>
     <Navbar/>
     <div className="home-product">
      <Products/>
     </div>
    </div>
  )
}

export default Home