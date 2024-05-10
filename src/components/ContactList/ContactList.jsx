import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const visibleContact = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul>
        {visibleContact.length !== 0 ? (
          visibleContact.map((contact) => {
            return <Contact key={contact.id} contact={contact} />;
          })
        ) : (
          <li>No contacts found</li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
