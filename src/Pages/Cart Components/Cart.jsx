import React, { useState } from 'react'
import CartCard from './CartCard';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { collection, doc, getDocs, getDoc, setDoc, documentId, } from 'firebase/firestore';
import { db } from '../../firebase';
import { onSnapshot } from 'firebase/firestore';


const Cart = ({ user }) => {
  const [products, setProducts] = useState([])
  const [cartList, setCartList] = useState([])
  let list = [];
  let newlist = [];

  useEffect(() => {
    console.log('rendering')
    const unsub =  onSnapshot(
      collection(db, 'users', user?.uid, 'cart'),
      (snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(user.uid)
          newlist.push({ id: doc.id, ...doc.data() })
          setCartList(newlist)
        });
        console.log(newlist)
      }, (error) => {
        console.log(error)
      }
    )

    console.log(cartList)
    const getCartProducts = () => {
      cartList.map(cartProduct => {
        console.log(cartProduct.id)
        const docRef = doc(db, 'products', cartProduct.id);

        getDoc(docRef)
          .then((doc) => {
            console.log(doc.data())
            list.push({ id: doc.id, ...doc.data() })
            setProducts(list)
          })
      });
    }

    return () => {
      unsub();
      getCartProducts();
    }
  }, [user])

  const handleClick = async (prodID) => {
    // :TODO 
    toast.warning(`Removed from cart`)
  }
  

  return (
    <>

      <div className='div-2'>
        <div className="product-container">
          {products.map((product) => {
            return (
              <CartCard key={product.id} product={product} handleClick={handleClick} />
            )
          }
          )}
        </div>
      </div>
    </>
  )
}

export default Cart