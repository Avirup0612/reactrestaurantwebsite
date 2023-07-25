import React from 'react'
import { Grid } from '@material-ui/core'

const Footer = () => {

    const d = new Date().getFullYear();
  return (
    <>
        <Grid container item lg={12} md={12} sm={12} xs={12} justifyContent='center' className='footer-container' direction='row'>
            <Grid item lg={3} md={3} sm={6} xs={6} className='innerfooter'>
                <div style={{display:"flex", justifyContent:"center", flexDirection:"column", gap:"20px"}}>
                    <h1>Big Bites</h1>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"20px"}}>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-youtube"></ion-icon>
                </div>
            </Grid>

            <Grid item lg={3} md={3} sm={6} xs={6} className='innerfooter'>
                <div style={{display:"flex", justifyContent:"center", flexDirection:"column", gap:"20px", alignItems:"center"}}>
                    <h3>Collaboration</h3>
                    <a href="#">Invest</a>
                    <a href="#">Suggestions</a>
                    <a href="#">Franchise</a>
                </div>
            </Grid>

            <Grid item lg={3} md={3} sm={6} xs={6} className='innerfooter'>
                <div style={{display:"flex", justifyContent:"center", flexDirection:"column", gap:"20px", alignItems:"center"}}>
                    <h3>Important Links</h3>
                    <a href="#">Track Orders</a>
                    <a href="#">Refund/Cancellation Policy</a>
                    <a href="#">Shipping Policy</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>FAQ</a>
                </div>
            </Grid>
            
            <Grid lg={3} md={3} sm={6} xs={6} className='innerfooter'>
                <div style={{display:"flex", justifyContent:"center", flexDirection:"column", gap:"20px", alignItems:"center"}}>
                    <h3>NewsLetter</h3>
                    <input type="email" placeholder='enter your email' />
                    <button type='button'>Subscribe</button>
                </div>
            </Grid>

            <Grid lg={12} md={12} sm={12} xs={12} className='endfooter'>
                <div>
                    Made for Big Bites | ©{d} All rights reserved
                </div>
            </Grid>

        </Grid>
    </>
  )
}

export default Footer