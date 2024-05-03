import './App.css'
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
// import Loader from "../Loader/Loader.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchContacts} from "../../redux/contactsOps.js";
import {selectContacts, selectError, selectLoading} from "../../redux/selecters.js";
import Error from "../Error/Error.jsx";
import Loader from "../Loader/Loader.jsx";


function App() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm/>
            <SearchBox  />
            {error && <Error />}
            {isLoading && <Loader />}
            {contacts.length === 0 ? "Create a contact" : <ContactList /> }
        </>
    );
}

export default App;
