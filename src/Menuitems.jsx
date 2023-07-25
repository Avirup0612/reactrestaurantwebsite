import React from 'react'

const Menuitems = (props) => {
  return (
    <>
        <div className='menuitems-container'>
            <img src={props.photo} alt="itemimg" />
            <h3>{props.name}</h3>
              <p className='price'>{props.cost}</p>
              <button className='addtocart' type='button'>Add to cart<ion-icon name="chevron-forward-outline"></ion-icon></button>
        </div>
    </>
  )
}

export default Menuitems