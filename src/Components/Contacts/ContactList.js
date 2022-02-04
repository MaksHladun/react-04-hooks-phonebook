import Contakts from "./Contacts";


const ContactList = ({ book, deleteClick }) => {
    return (
      <ul>
        {book.map(contact => (
          
          <Contakts
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteClick={deleteClick}
          />
        ))}
      </ul>
    );
  };

  

  export default ContactList