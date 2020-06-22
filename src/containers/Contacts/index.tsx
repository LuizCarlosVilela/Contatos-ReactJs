import React, { useState } from 'react';

import { Wrapper, Card, ContactList } from './styles';

import CONTACTS from '../../list-contacts';

import ContactItem from '../../components/ContactItem';
import AddContentForm from '../../components/AddContentForm';

import Contact from '../../models/Contact';

const Contacts: React.FC = () => {
    const [isAddindContact, setAddingContact] = useState(false);

    const [contacts, setContacts] = useState(CONTACTS);

    const RemoveContact = (id: string) => {
        setContacts(contacts =>
            contacts.filter(contact => contact.id != id)
        );
    }

    const AddContact = (contact: Contact) => {
        setContacts(contacts => contacts.concat(contact));
        setAddingContact(false);
    };

    return (
        <Wrapper>
            <Card>
                <header>
                    {
                        isAddindContact && (
                            <AddContentForm onAddContact={AddContact}/>
                        )
                    }
                    <button onClick={() => setAddingContact(true)}>Adicionar Contato</button>
                </header>
                <ContactList>
                    {
                        contacts.map(contact => (
                            <ContactItem key={contact.id} contact={contact} onRemoveContact={RemoveContact} />
                        ))
                    }
                </ContactList>
            </Card>
        </Wrapper>
    )
};

export default Contacts;

