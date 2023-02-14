import React, { useState } from 'react'
import { useEffect } from 'react';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Cart = ({ user }) => {
    const [cartProduct,setCartProduct] = useState([]);
    const fetchData = async() => {
      let array=[];
      const docRef = collection(db,"users",user?.uid,"cart")
      const response = await getDocs(docRef)
      response.forEach((document)=>{
        array.push(document.data())
      })
      setCartProduct(array);
};
    useEffect(() => {
      console.log("rendering")
      fetchData();

  }, [fetchData]);

  



  return (
    <>
      {/* <div className='div-2'>
        <div className="product-container">
          {products.map((product) => {
            return (
              <CartCard key={product.id} product={product} handleClick={handleClick} />
            )
          }
          )}
        </div>
      </div> */}
    </>
  )
}

export default Cart
