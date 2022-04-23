import React, {useEffect, useState } from "react";
import toast,{Toaster} from "react-hot-toast";

export const ContactListContext = React.createContext();
const ContactListProvider = ({ children }) => {
  const [contactList, setContactList] = useState(localStorage.getItem('contactList')?JSON.parse(localStorage.getItem('contactList')):[]);
  const[editContact,setEditContact]=useState({})
  const[search,setsearch]=useState('')
  
  useEffect(()=>{
    localStorage.setItem('contactList',JSON.stringify(contactList))
  },[contactList])
const serchHandler=(serachItam)=>{
  setsearch(serachItam)

}
  const handleContactList = (data) => {
    const findName=contactList.find(contact=>{return contact.name===data.name})
    const findEmali=contactList.find(contact=>{return contact.email===data.email})
    const findPhoneNumber=contactList.find(contact=>{return contact.PhoneNumber===data.PhoneNumber})
    if(findName){
      toast.error('Name is existing!')
      
    }else if(findEmali){
      toast.error('Email is existing!')
    }else if(findPhoneNumber){
      toast.error('phoneNumber is existing!')
    }else{
      toast.success('contact Added!')
          setContactList((prevState) => [...prevState, data]);

    }

  };
  const removeContactHandler=(id)=>{
    

    const filtered=contactList.filter(contact=>{return contact.id!==id})
    setContactList(filtered)


  }
  const editContactHandler=(array)=>{
    
    setContactList(array)

  }

  return (
  <>
  <ContactListContext.Provider
      value={{
        contactList: contactList,

        updateContactListHandler: handleContactList,
        removeContact:removeContactHandler,
        editContact:editContactHandler,
        search:search,
        searchHandler:serchHandler

      }}
    >
      {children}
    </ContactListContext.Provider>
    <Toaster/>
  </>

  );

  
    
};
export default ContactListProvider;
