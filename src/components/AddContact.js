
import React, { useState,useContext } from 'react'
import { ContactListContext } from '../context/context';
import { Link } from 'react-router-dom';

const AddContact = () => {
  const ContactLists = useContext(ContactListContext);

  const { contactList, updateContactListHandler } = ContactLists;

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[PhoneNumber,setPhoneNumder]=useState('')
  const data={name,email,PhoneNumber:parseInt(PhoneNumber),id:contactList.length+1}
  const addButtonHandler=(data)=>{
    updateContactListHandler(data)
    setEmail('')
    setName('')
    setPhoneNumder('')
  }
  return (
    <div className='total-container'>
   <div className='Add-contact'>
        <h1 className='Add-contact-header'>Add new contact</h1>
        <div className='div-container'>
           <div className='div-input'>
          <input className='input' type='text' name='name' placeholder='Name Contact' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
            
        <div className='div-input'>
        <input className='input' type='text' name="email" placeholder='Email Contact' value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>

        </div>
        
        <div className='div-input'  >
                      < input className='input' type='number' name='PhoneNumber' placeholder='PhoneNumber Contact' value={PhoneNumber} onChange={(e)=>{setPhoneNumder(e.target.value)}}/>

        </div>
         <Link to='/'>
        <div className='button' >
         
                            <button disabled={name===""|| email==="" || PhoneNumber===""?true:false} className='btn btn-primary mt-5 add-button' onClick={()=>{addButtonHandler(data)}}>Add contact</button>

        

        </div>
          </Link>
        </div>
       
        
        


      
    </div>


    </div>
 
  )
}

export default AddContact
