import React from 'react'

const Home = () => {
  return (
    <>
        <div className='home-container' id='home'>
            <h1 className='homemaintxt'>A pinch of passion<br/> in every dish</h1>
            <p className='homepara1'>Exceptional flavors, unparalleled service</p>
            <p className='homepara2'>Come for the food, stay for the experience</p>
            <div className='btndiv'>
                <button className="loginbtn" type='button'>Log In/Sign Up</button>
                <button className='cartbtn'><ion-icon name="cart-outline"></ion-icon></button>
            </div> 
        </div>
    </>
  )
}

export default Home