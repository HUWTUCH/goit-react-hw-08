import css from './Contact.module.css'
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/contactsOps.js";
const Contact = ({ contact }) => {
    const { name, number } = contact;
    const dispatch = useDispatch();
    return (
        <li className={css.items}>
            <div>
                <p>Name: {name}</p>
                <p>Number: {number}</p>
            </div>
            <button onClick={()=>dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
    );
};

export default Contact;