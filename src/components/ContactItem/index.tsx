import React from 'react';

import Contacts from '../../models/Contact';

import { Card } from './styles';

type Props = {
    contact: Contacts;
    onRemoveContact: (id: string) => void;
}

const ContactItem: React.FC<Props> = ({ contact, onRemoveContact }) => {
    return (
        <Card>
            <p>Nome: {contact.name}</p>
            <p>E-mail: {contact.email}</p>
            <p>Telefone: {contact.phoneNumber}</p>

            <button onClick={() => { onRemoveContact(contact.id) }}>Excluir Contato</button>
        </Card>
    )
};

export default ContactItem;