import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ContactListContext } from "../context/context";
import { Link } from "react-router-dom";
import toast,{Toaster} from "react-hot-toast";


const EditContact = () => {
  const { contactList, editContact} = useContext(ContactListContext);

  console.log(contactList);
  

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[PhoneNumber,setPhoneNumder]=useState('')
  
  


  const { id } = useParams();
  //const find=contactList.find(contact=>{return parseInt(contact.id)===parseInt(id)})
  
  const finded=contactList.find(contact=>{return parseInt(contact.id)===parseInt(id)})

  useEffect(() => {
console.log(id);

    setPhoneNumder(finded? parseInt(finded.PhoneNumber):'')
    setEmail(finded? finded.email:'')
    setName(finded? finded.name:'')
    
  }, [id]);
 const data={name,email,PhoneNumber:parseInt(PhoneNumber),id:parseInt(id)}

const editHandler=(data)=>{
  const checkName=contactList.find(contact=>{return contact.id!==parseInt(id) && contact.name===data.name})
  const checkEmail=contactList.find(contact=>{return contact.id!==parseInt(id) && contact.email===data.email})
  const checkPhoneNumber=contactList.find(contact=>{return contact.id!==parseInt(id) && contact.PhoneNumber===data.PhoneNumber})
  if(checkName){
    toast.error('this name is already exist!')

  }else if(checkEmail){
    toast.error('this email is already exist!')
  }else if(checkPhoneNumber){
    toast.error('this number already exist!')
  }else{
    const mapContact=contactList.map(contact=>{return contact.id===parseInt(data.id)?data:contact})
    editContact(mapContact)
    
  }

  

}
const content=finded?   (<div className="total-container">
<div className="Add-contact">
  <h1 className="Add-contact-header">Edit contact</h1>
  <div className="div-container">
    <div className="div-input">
      <input
      className="input"
        type="text"
        name="name"
        placeholder="Name Contact"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
    </div>

    <div className="div-input">
      <input
      className="input"
        type="text"
        name="email"
        placeholder="Email Contact"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        
        }}
      />
    </div>

    <div className="div-input">
      <input
      className="input"
        type="number"
        name="PhoneNumber"
        placeholder="PhoneNumber Contact"
        value={PhoneNumber}
        onChange={(e) => {
          setPhoneNumder(e.target.value)
          
        }}
      />
    </div>
    <Link to="/">
      <div className="button">
        <button
          disabled={
            name === "" || email === "" || PhoneNumber === ""
              ? true
              : false
          }
          className="btn btn-primary mt-5 add-button"
          onClick={() => {
          editHandler(data)
          }}
        >
        Edit Contact
        </button>
      </div>
    </Link>
  </div>
</div>
<Toaster/>
</div>):<p className="text-center text-muted">contact with id:{id} not exist!</p>

  return (
    // <div className="total-container">
    //   <div className="Add-contact">
    //     <h1 className="Add-contact-header">Edit contact</h1>
    //     <div className="div-container">
    //       <div className="div-input">
    //         <input
    //           type="text"
    //           name="name"
    //           placeholder="Name Contact"
    //           value={name}
    //           onChange={(e) => {
    //             setName(e.target.value)
    //           }}
    //         />
    //       </div>

    //       <div className="div-input">
    //         <input
    //           type="text"
    //           name="email"
    //           placeholder="Email Contact"
    //           value={email}
    //           onChange={(e) => {
    //             setEmail(e.target.value)
              
    //           }}
    //         />
    //       </div>

    //       <div className="div-input">
    //         <input
    //           type="number"
    //           name="PhoneNumber"
    //           placeholder="PhoneNumber Contact"
    //           value={PhoneNumber}
    //           onChange={(e) => {
    //             setPhoneNumder(e.target.value)
                
    //           }}
    //         />
    //       </div>
    //       <Link to="/">
    //         <div className="button">
    //           <button
    //             disabled={
    //               name === "" || email === "" || PhoneNumber === ""
    //                 ? true
    //                 : false
    //             }
    //             className="btn btn-primary mt-5 add-button"
    //             onClick={() => {
    //             editHandler(data)
    //             }}
    //           >
    //           Edit Contact
    //           </button>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    //   <Toaster/>
    // </div>
    <>
{content}
    </>
  );
};

export default EditContact;
