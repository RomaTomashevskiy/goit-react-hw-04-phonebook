import { useState, useEffect } from 'react';
import shortid from 'shortid';
import contact from '../data/contacts.json';
import Container from './Container';
import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from "./ContactForm";



 
const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contact') ?? contact));
  const [filter, setFilter] = useState('');


  useEffect(() => {
    return window.localStorage.setItem('contact', JSON.stringify(contacts));
  } , [contacts])
  const onFilterContacts = () => {
    const normalize = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalize));
  }

   const formSubmit = (name, number) => {
     const contact = {
       id: shortid.generate(),
       name,
       number
     };
      const onFindName = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
      const onFindNum = contacts.find(contact => contact.number.toLowerCase() === number.toLowerCase());

    if (onFindName) {
      alert(`${name} is already in contacts.`);
    } else if (onFindNum) {
      alert(`${number} is already in contacts.`);
    } else {

      setContacts(s => [contact, ...contacts]);
    };
  };
  

  const onDeleteContact = index => {
    return setContacts(prevContact => prevContact.filter(contact => contact.id !== index))
  };

  const onChangeFilter = e => {
    setFilter(s => e.target.value);
    console.log(e.target.value)
  }

    
  return (
    <Container>
      <ContactForm onSubmit={formSubmit} />
      <Filter onChange={onChangeFilter} filter={filter} />
      <ContactList contacts={onFilterContacts()} onDeleteContact={onDeleteContact} />
    </Container>
   
    
  );
};


export default App;


