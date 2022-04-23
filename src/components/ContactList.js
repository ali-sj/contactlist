import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ContactListContext } from "../context/context";
import Columns from "./Columns";
import ContactItem from "./ContactItem";
import { Link } from "react-router-dom";

const ContactList = () => {
  const ContactLists = useContext(ContactListContext);

  const { contactList,search } = ContactLists;
  
  const serschFilter=contactList.filter((contact=>{return contact.name.includes(search) || contact.email.includes(search)}))

useEffect(()=>{

},[])
  return <>
  <div className="container mt-5">
    
    <Columns/>
    {serschFilter.map(contact=>(<ContactItem contact={contact}/>))}
    <Link to='/AddContact'>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center', height:'400px'}}>
        <button style={{width:'100%'}} className="btn btn-primary" >Add contact</button>
      </div>
    </Link>
    
  </div>;
  </> 
};

export default ContactList;
