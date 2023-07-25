import React, { useState } from 'react'
import Menuitems from './Menuitems'
import { Grid } from '@material-ui/core'
import Foods from './Menuitemlist'
import Select from 'react-select'

const Menu = () => {

    const [item, setItem] = useState();

    const options = [
        { value: 'All', label: 'All' },
        { value: 'Veg', label: 'Veg' },
        { value: 'Egg', label: 'Egg' },
        { value: 'Chicken', label: 'Chicken' },
        { value: 'Mutton', label: 'Mutton' },
        { value: 'Fish', label: 'Fish' },
        { value: 'Rice', label: 'Rice' },
        { value: 'Noodles', label: 'Noodles' },
        { value: 'Naan', label: 'Naan' },
        { value: 'Biriyani', label: 'Biriyani' },
        { value: 'Soup', label: 'Soup' }
    ]

    return (
        <>
            <div className='menu-container' id='menu'>
                <div className='menu-inner-container'>
                    <h1 className='mainmenutxt'>Our Menu</h1>
                    <div className='selection'>
                        <Select onChange={(e)=>setItem(e.value)} className="basic-single" name="category" options={options} defaultValue={options[0].value} styles={{control: (baseStyles, state) => ({ ...baseStyles, borderRadius:"20px",borderWidth:"2px",boxShadow:"none",borderColor: state.isFocused ? "grey !important": state.isSelected ? "grey !important" : "grey !important", outline:state.isFocused ? "none":state.isSelected?"none":"none"}), menu: (baseStyles, state) => ({...baseStyles,backgroundColor:"#c3c3c3",borderRadius: "20px"}), menuList: (baseStyles,state)=>({...baseStyles,borderRadius:"20px"}), option: (baseStyles,state)=>({...baseStyles, backgroundColor:state.isSelected ? "rgb(105, 76, 3)" : state.isFocused ? "white" : "none"})}} placeholder="Select a category"/>
                    </div>
                </div>
                <div className='menu-inner-container2'>
                    <Grid container item lg={12} md={12} sm={12} xs={12} direction="row" height="80vh" spacing={5} className='listofitems'>
                        {!item ? Foods.map((currElem) => {
                            return <Grid item lg={3} md={4} sm={6} xs={12} alignItems="center" justifyContent='center'><Menuitems name={currElem.name} key={currElem.id} photo={currElem.image} cost={currElem.price} /></Grid>
                        }) : item==="All" ? Foods.map((currElem) => {
                            return <Grid item lg={3} md={4} sm={6} xs={12} alignItems="center" justifyContent='center'><Menuitems name={currElem.name} key={currElem.id} photo={currElem.image} cost={currElem.price} /></Grid>
                        }) : Foods.filter((currentElem)=>{return (currentElem.category===item)}).map((currElem) => {
                            return <Grid item lg={3} md={4} sm={6} xs={12} alignItems="center" justifyContent='center'><Menuitems name={currElem.name} key={currElem.id} photo={currElem.image} cost={currElem.price} /></Grid>
                        })}
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Menu