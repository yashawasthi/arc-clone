import { Button, Menu, MenuList } from '@mui/material'
import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./NavBar.css"
const NavBar = () => {
  const [anchorEl,setAnchorEl]= useState(null);
  const [anchorElTwo,setAnchorElTwo]= useState(null);



  const handleOpenMenu=e=>{
    setAnchorEl(e.currentTarget);
  }
  const handleMenuClose=()=>{
    setAnchorEl(null);
  }



  const handleOpenMenuTwo=e=>{
    setAnchorElTwo(e.currentTarget);
  }
  const handleMenuCloseTwo=()=>{
    setAnchorElTwo(null);
  }



  return (
    <div className='nav'>
      <div className='title'>arc()</div>


      <Menu id='menu' anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      > 
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>How Arc Works</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Remote Jobs</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Remote Companies</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Resume Builder</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Resources</MenuList>
      </Menu>





      <Menu id='menu2' anchorEl={anchorElTwo}
      open={Boolean(anchorElTwo)}
      onClose={handleMenuCloseTwo}
      onClick={handleMenuCloseTwo }
      > 
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Why Choose Arc</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>How we vet Developers</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Top Developers</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Our Clients</MenuList>
        <MenuList style={{
          fontSize:"20px",
        padding: "10px 80px"}}>Resources</MenuList>
      </Menu>
      <div className='dev'><Button 
      aria-controls='menu'
      onClick={handleOpenMenu}
      style={{
          borderRadius: 5,
          border: "white bold 1px",
          backgroundColor: "black",
          padding: "5px 5px",
          fontSize: "15px",
          color:"white"
      }}>For developers<ArrowDropDownIcon /></Button></div>


      <div className='comp'><Button
      aria-controls='menu2'
      onClick={handleOpenMenuTwo}
      style={{
        borderRadius: 5,
        border: "white bold 1px",
        backgroundColor: "black",
        padding: "5px 5px",
        fontSize: "15px",
        color:"white"
    }}
      >For companies<ArrowDropDownIcon /></Button></div>
        <div className='login'><Button
        style={{
          borderRadius: 5,
          border: "white bold 1px",
          backgroundColor: "black",
          padding: "5px 5px",
          fontSize: "15px",
          color:"white"
      }}
        >Log In</Button></div>
        <div className='signup'><Button
        style={{
          borderRadius: 5,
          border: "white bold 1px",
          backgroundColor: "black",
          padding: "5px 5px",
          fontSize: "15px",
          color:"white"
      }}>Sign Up</Button></div>
    </div>
  )
}

export default NavBar