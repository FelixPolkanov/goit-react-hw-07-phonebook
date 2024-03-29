import { Contacts, TotalContacts } from './ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const totalContacts = contacts.length;

  return (
    <Contacts>
      {contacts.map(({ phone, name, id, createdAt }) => (
        <ContactItem
          key={id}
          phone={phone}
          name={name}
          id={id}
          date={createdAt}
        />
      ))}
      <TotalContacts>Total contacts: {totalContacts}</TotalContacts>
    </Contacts>
  );
};