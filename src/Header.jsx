import React, { useEffect, useState } from 'react'

const Header = () => {

  const [changebg, setChangebg] = useState(false);
  const [displayNav, setDisplayNav] = useState(false);
  const [changeLink, setChangeLink] = useState();

  useEffect(()=>{
    const Navchange = () => {
      if (window.scrollY <100){
        setChangebg(false)
      }else if (window.scrollY >=100){
        setChangebg(true)
      }
    }

    const Linkchange = () =>{
      if (window.scrollY <500){
        setChangeLink(null)
      }if (window.scrollY >=633){
        setChangeLink("menu")
      }if (window.scrollY >=1290){
        setChangeLink("services")
      }if (window.scrollY >=2100){
        setChangeLink("contact")
      }if (window.scrollY >=3100){
        setChangeLink(null)
      }
    }

    window.addEventListener('scroll', ()=>{
      Navchange();
      Linkchange()
      console.log(window.scrollY)
    });
  },[])

  const scrollToTop = () =>{
    window.scrollTo({
      top : 0,
      behavior : 'smooth'
    })
  }

  const handleNav = () => {
    setDisplayNav(!displayNav)
  }

  return (
    <>
      <div className={changebg ? "new-header" : 'header-container'}>
        <h1 className='logo'>Big Bites</h1>
        <div className='navbar'>
          <a href="#menu" className={changeLink==="menu" ? "active": "navlink"}>Menu</a>
          <a href="#service" className={changeLink==="services" ? "active": "navlink"}>Services</a>
          <a href="#contact" className={changeLink==="contact" ? "active": "navlink"}>Contact</a>
        </div>
        <button className="menubtn" onClick={handleNav}><ion-icon name="menu-outline" onClick={handleNav}></ion-icon></button>
        {changebg ? <button className="gototop" onClick={scrollToTop}><ion-icon name="arrow-up-outline"></ion-icon></button> : null}
      </div>
      <div className='responsive-nav' style={{transform: displayNav ? "translateY(0px)" : "translateY(-300px)"}}>
        <a href="#menu" className={changeLink==="menu" ? "active": "navlink"} onClick={handleNav}>Menu</a>
        <a href="#service" className={changeLink==="services" ? "active": "navlink"} onClick={handleNav}>Services</a>
        <a href="#contact" className={changeLink==="contact" ? "active": "navlink"} onClick={handleNav}>Contact</a>
        <button className="newmenubtn" onClick={handleNav}><ion-icon name="close-outline"></ion-icon></button>
      </div>
    </>
  )
}

export default Header