import React from 'react'
import { Grid } from '@material-ui/core'
import Chef from "./Chef.png"
import Chef2 from "./Chef_2.png"

const About = () => {
  return (
    <>
        <div className='about-container' id='#about'>
            <div className='abouthead'><h2 className='aboutheading'>About Us</h2></div>
                <Grid container item lg={12} md={12} sm={12} xs={12} alignItems="center" height="80vh" justifyContent='center' className='about-inner-container'>
                    <Grid item lg={6} md={6} sm={12} xs={12} border className='about-img-container'>
                        {/* <picture>
                            <source srcSet={Chef} media='(min-width:670px)'/>
                            <img src={Chef2} alt="chefimg"/>
                        </picture> */}
                        <img src={Chef2} alt="chefimg"/>
                        <div className='socials'>
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-twitter"></ion-icon>
                            <ion-icon name="logo-youtube"></ion-icon>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} className='about-text-container' alignItems="center" justifyContent='center'>
                        <div className='aboutus'>
                            <div className='about-txtpart'>
                                <p>We started our journey at 2021 with a small ambition of making good , delicious and hygienic food at a good price. Now we are one of the fastest growing multicuisine restaurant and more than 5000 happy customers and our family is growing day by day</p>
                                <p>Our food is made out of highest quality ingredients. We we have wide range of variety with restaurant style as well as home cooked style which makes us special</p>
                            </div>
                            <div className='extra-info'>
                                <div className='inner-info'>
                                    <h4>5000+</h4>
                                    <p>Happy Customers</p>
                                </div>
                                <div className='inner-info'>
                                    <h4>4.5+</h4>
                                    <p>Rating out of 5</p>
                                </div>
                                <div className='inner-info'>
                                    <h4>90%</h4>
                                    <p>Recommendation</p>
                                </div>
                            </div>
                            <button className='carrierbtn' type='btn'>Start your carrier with us</button>
                            <div className='more-container'>
                                <button className='reviewbtn'>Customer Reviews <ion-icon name="chevron-forward-outline"></ion-icon></button>
                                <button className='morebtn'>Learn more <ion-icon name="chevron-forward-outline"></ion-icon></button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
        </div>
    </>
  )
}

export default About