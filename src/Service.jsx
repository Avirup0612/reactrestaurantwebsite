import React from 'react'
import Onlineorder from "./onlineorder.png"
import Occasionorder from "./occasionorder.png"
import Hireus from "./hireus.png"
import Tutorial from "./tutorial.png"
import Customfood from "./customfood.png"
import Reservation from "./reservation.png"
import { Grid } from '@material-ui/core'

const Service = () => {
  return (
    <>
        <div className='service-container' id='service'>
            <div className='service-inner-container'>
                <h1 className='mainservicetxt'>Our Services</h1>
            </div>
            <div className='service-inner-container2'>
                <Grid container item lg={12} md={12} sm={12} xs={12} height="80vh" spacing={8} className= 'servicelist'>

                    <Grid item lg={4} md={4} sm={6} xs={12} style={{display: "flex", alignItems: "center" , justifyContent: "center"}}>
                        <div className='servicecard'>
                            <div><img src={Onlineorder} alt="onlineorderimg" /></div>
                            <div><h5>Order online</h5></div>
                            <div><p>Enjoy the deliciousness of your food at the comfort of your home. Order your food online and get your food delivered at your doorstep quickly with our superfast delivery</p></div>
                            <button type='button'>Order</button>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12} style={{display: "flex", alignItems: "center" , justifyContent: "center"}}>
                        <div className='servicecard'>
                            <div><img src={Reservation} alt="reservationimg" /></div>
                            <div><h5>Reserve Table</h5></div>
                            <div><p>Have a plan to eat out ? Enjoy our excellent ambience while enjoying the deliciousness of your food. Prereserve your table for you and your close ones so that you don't have to wait.</p></div>
                            <button type='button'>Reserve</button>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12} style={{display: "flex", alignItems: "center" , justifyContent: "center"}}>
                        <div className='servicecard'>
                            <div><img src={Occasionorder} alt="occasionorderimg" /></div>
                            <div><h5>Order for events</h5></div>
                            <div><p>Want food for occasion or gatherings but don't want the hassle of cooking while enjoying the company ? You can order food in advance and get the food delivered fresh right on time at your doorstep.</p></div>
                            <button type='button'>Order</button>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12} style={{display: "flex", alignItems: "center" , justifyContent: "center"}}>
                        <div className='servicecard'>
                            <div><img src={Customfood} alt="customfoodimg" /></div>
                            <div><h5>Customised Food</h5></div>
                            <div><p>Get your favourite dish specially made for you or your loved ones. We have lot of customization option available and you can choose what you like the most and we also decorate it as per your wish.</p></div>
                            <button type='button'>Explore</button>
                        </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12} style={{display: "flex", alignItems: "center" , justifyContent: "center"}}>
                        <div className='servicecard'>
                            <div><img src={Tutorial} alt="tutorialimg" /></div>
                            <div><h5>Recipe Tutorial</h5></div>
                            <div><p>Want to learn to cook delicious food like us. We have tutorials made by our world class chefs to guide you step by step process of the recipies. Just register and start learning.</p></div>
                            <button type='button'>Learn</button>
                            </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={6} xs={12} style={{display: "flex", alignItems: "center" , justifyContent: "center"}}>
                        <div className='servicecard'>
                            <div><img src={Hireus} alt="sponsorimg"/></div>
                            <div><h5>Hire us</h5></div>
                            <div><p>Have big occasion planned and need to cook plenty of food ? Hire us and we will take all the responsibility of cooking for your occasion at very reasonable price</p></div>
                            <button type='button'>Hire Us</button>
                        </div>    
                    </Grid>
                </Grid>
            </div>
        </div>
    </>
  )
}

export default Service