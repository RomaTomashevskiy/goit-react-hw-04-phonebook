import ContactListItem from "components/ContactListItem";
import PropTypes from 'prop-types';

const ContactList = ({contacts , onDeleteContact}) => {
    return <ul>
        <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
};

ContactList.propTypes = { 
    contacts: PropTypes.array.isRequired, 
    onDeleteContact: PropTypes.func.isRequired
}




export default ContactList