import PropTypes from 'prop-types';

import './index.css';

const ContactListItem = ({  contacts , onDeleteContact}) => (contacts.map(({ id, name, number }) => {
  return  <li key={id} className='item'>
      <p>{name}: {number} </p>
      
    <button
      className='list_btn'
      type="button"
      onClick={() => onDeleteContact(id)}
    >Delete</button>
    </li>
}));

ContactListItem.propTypes = { 
    contacts: PropTypes.array.isRequired, 
    onDeleteContact: PropTypes.func.isRequired
}

export default ContactListItem;