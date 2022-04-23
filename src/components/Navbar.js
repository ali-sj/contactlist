import React, { useContext, useEffect, useState } from 'react'
import { ContactListContext } from '../context/context'

import { Link } from 'react-router-dom'

const Navbar = () => {
  const {contactList, editContact, searchHandler,search}=useContext(ContactListContext)
  

  
  const serchItemHandler=(e)=>{
    
    searchHandler(e.target.value)

  }
  
  useEffect(()=>{
    
    
  },[search])
  return (
    <header className=' header'>
      <Link to='/'>
        <div className='mx-3'><img style={{width:'40px'}} src='/assets/contactList.png'/></div>

        </Link>

      <div className='container-nav'>
        
      <div class="search-box">
    <button class="btn-search"><i class="fa fa-search"></i></button>
    <input onChange={serchItemHandler} value={search} type="text" class="input-search" placeholder="serach contact..."/>
  </div>
      <Link to='/AddContact'>
      <img  src='/assets/icon.png'/>

      </Link>
      </div>
     
      

      
    </header>
  )
}

export default Navbar
