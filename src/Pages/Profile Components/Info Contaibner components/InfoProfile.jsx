import React, { useRef, useState } from 'react'
import './InfoProfile.scss'
const InfoProfile = ({ user }) => {

  // const ref = useRef(null);
  // const refClose = useRef(null);
  // const [product, setProduct] = useState({ etitle: "", edescription: "", eprice: "" })


  // const handleClick = () => {
  //   console.log('clicked');
  // }
  // const onChange = () => {
  //   console.log('clicked');
  // }
  return (
    <div className='infoProfile-container'>
      <p>Profile Settings</p>
      <h1>{user?.name}</h1>

      <div>
        <section class="form-section">
        </section>
      </div>
    </div>
  )
}

export default InfoProfile