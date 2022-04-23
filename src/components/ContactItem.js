import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { ContactListContext } from '../context/context'

const ContactItem = ({contact}) => {
    const {removeContact, editContactFunc}=useContext(ContactListContext)
    const{id,name,email,PhoneNumber}=contact
  return (
      <>
          <div className='row mt-3'>
        <div className='col-2 mx-auto text-center'>{id}</div>
        <div className='col-2 mx-auto text-center'>{name}</div>
        <div className='col-2 mx-auto text-center'>{email}</div>
        <div className='col-2 mx-auto text-center'>{PhoneNumber}</div>
        <div className='col-2 mx-auto text-center'><i onClick={()=>{removeContact(id)}} style={{color:'red'}} class="fa fa-trash" aria-hidden="true"></i>
</div>

<div className='col-2 mx-auto text-center'> <Link to={`/Edit/${id}`}><i    class="fa fa-edit" ></i></Link></div>



        

      
    </div>
    <hr></hr>
      </>

  )
}

export default ContactItem
