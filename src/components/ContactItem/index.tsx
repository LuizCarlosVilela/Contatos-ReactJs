import React from 'react';

import Contacts from '../../models/Contact';

import { Card } from './styles';

type Props = {
    contact: Contacts;
}

const ContactItem: React.FC <Props> = ({ contact }) => {
    return (
            <Card>
                <p>Nome: {contact.name}</p>
                <p>E-mail: {contact.email}</p>
                <p>Telefone: {contact.phoneNumber}</p>
            </Card>
    )
};

export default ContactItem;