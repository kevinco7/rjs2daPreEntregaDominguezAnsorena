import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export const Carrito = () => {
    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);
  
  const vaciar =()=>{
    vaciarCarrito();
  }
    return (
    <div className='container '>
        
       <h1>
       Carrito
        </h1> 
        
        {
         carrito.map((prod)=>(
            <div key={prod.id}>
            <h3>
                {prod.titulo}
            </h3>
            <p>Precio: u$d {prod.precio}</p>
            <p>Precio total: u$d {prod.precio * prod.cantidad}</p>
            <p>Cantidad: {prod.cantidad}</p>
            </div>
         ))
        }
      {
        carrito.length > 0 ?
        <>
          <h2> Precio Total: u$d {precioTotal()}</h2>
           <button onClick={vaciar}>Vaciar Carrito</button>
        </>:
        <h3>El carrito esta vacio</h3>

      }
        </div>
  )
}
