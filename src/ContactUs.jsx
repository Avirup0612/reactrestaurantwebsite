import React from 'react'
import { Grid } from '@material-ui/core'

const ContactUs = () => {
  return (
    <>
        <Grid container item lg={12} md={12} sm={12} xs={12} className='contact-container' id='contact'>
            <Grid item lg={4} md={4} sm={12} xs={12} className='contact-heading'>
                <p className='mainheadcontact'>We are happy to help you</p>
                <div className='address'>4,Purbachal 2nd Lane, Old Calcutta Road, P.O.- Talpukur, Barrackpore, Dist.- 24 Pgs. North, Kolkata- 700123, West Bengal, India</div>
                <p className='phoneno'><ion-icon name="logo-whatsapp"></ion-icon>1234567890</p>
                <p className='email'><ion-icon name="mail-outline"></ion-icon>abc@email.com</p>
                <div className='socialmedia'>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                </div>
            </Grid> 
            <Grid item lg={8} md={8} sm={12} xs={12}>
                <div className='allcontactinfo'>
                <h4>Write your Query to us</h4>
                <div className='contact-details1'>
                    <div className='innerchild-contact'>
                        <label htmlFor='Name'>Your First Name :</label>
                        <input type="text" id='Name' className='name'/>
                    </div>
                    <div className='innerchild-contact'>
                        <label htmlFor='Name'>Your Last Name :</label>
                        <input type="text" id='Name' className='name'/>
                    </div>
                </div>
                <div className='contact-details2'>
                    <div className='innerchild-contact'>
                        <label htmlFor='Email'>Your Email :</label>
                        <input type="email" id='Email' className='name'/>
                    </div>
                    <div className='innerchild-contact'>
                        <label htmlFor='Phone'>Your Phone Number :</label>
                        <input type="text" id='Phone' className='phone'/>
                    </div>    
                </div>
                <div className='contact-details3'>
                <div className='innerchild-contact'>
                        <label htmlFor='Name'>Enter your query here :</label>
                        <textarea type="text" id='Name' className='name'/>
                </div>
                <button type='button'>Submit</button>
                </div>
                </div>
            </Grid>  
        </Grid>
    </>
  )
}

export default ContactUs