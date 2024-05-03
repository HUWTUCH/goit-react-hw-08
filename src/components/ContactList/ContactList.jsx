import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import {useSelector} from "react-redux";
import {selectFilteredContacts} from "../../redux/contactsSlice.js";

const ContactList = ( ) => {
    const filterContact = useSelector(selectFilteredContacts)

    return (
        <ul className={css}>
            {filterContact.map((contact) => (
                <Contact
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </ul>
    );
};

export default ContactList;
