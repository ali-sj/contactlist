import { useContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactList from "./components/ContactList";
import { ContactListContext } from "./context/context";
import EditContact from "./components/EditContact";
import AddContact from "./components/AddContact";
import Navbar from "./components/Navbar";


function App() {
  const ContactLists=useContext(ContactListContext)

  const{contactList, updateContactListHandler}=ContactLists


  return (
   

            <div className="App">
            <BrowserRouter>
            <Navbar/>
       
        <Routes>
          <Route path="/" element={<ContactList/>}/>
          <Route path="/Edit/:id" element={<EditContact/>}/>
          <Route path="/AddContact" element={<AddContact/>}/>
          
        </Routes>
      </BrowserRouter>

     
    </div>


  

  );
}

export default App;
