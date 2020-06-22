import React, { useState } from 'react';

import { Wrapper, Card } from './styles';

import CONTACTS from '../../list-contacts';

import ContactItem from '../../components/ContactItem';

const Contacts: React.FC = () => {
    return (
        <Wrapper>
            <Card />
            <ul>
                {
                    CONTACTS.map(contact => (
                        <ContactItem key={contact.id} contact={contact} />
                    ))
                }
            </ul>
        </Wrapper>
    )
};

export default Contacts;

