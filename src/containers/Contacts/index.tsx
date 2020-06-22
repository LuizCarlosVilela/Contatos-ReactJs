import React, { useState } from 'react';

import { Wrapper, Card } from './styles';

import CONTACTS from '../../list-contacts';

import ContactItem from '../../components/ContactItem';

const Contacts: React.FC = () => {

    const [contacts, setContacts] = useState(CONTACTS);

    const RemoveContact = (id: string) => {
        setContacts(contacts =>
            contacts.filter(contact => contact.id != id)
        );
    }

    return (
        <Wrapper>
            <Card />
            <ul>
                {
                    contacts.map(contact => (
                        <ContactItem key={contact.id} contact={contact} onRemoveContact={RemoveContact} />
                    ))
                }
            </ul>
        </Wrapper>
    )
};

export default Contacts;

