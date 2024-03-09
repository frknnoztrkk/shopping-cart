import { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {

  const [cart, setCart]=useState([]);
  const emtyCart = () =>{
    setCart([])
  }

  return (
   <div className='container mx-auto p-4'>
    < Header cart ={cart}/>
    <Products cart={cart} setCart={setCart}/>
    < Cart cart={cart} emtyCart={emtyCart}/>
   </div>
  )
}

export default App
