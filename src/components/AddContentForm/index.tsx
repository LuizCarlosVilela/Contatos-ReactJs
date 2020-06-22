import React, { useState, FormEvent } from 'react';
import Contact from '../../models/Contact';

import { Campo } from './styles';

type Props = {
    onAddContact: (contact: Contact) => void;
};

const AddContentForm: React.FC<Props> = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAddContact({
            id:'12222',
            name,
            email,
            phoneNumber
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Campo>
                <label htmlFor="input-name">Nome: </label>
                <input id="input-name" type="text" value={name} onChange={event => setName(event.target.value)} />
            </Campo>
            <Campo>
                <label htmlFor="input-email">E-mail: </label>
                <input id="input-email" type="email" value={email} onChange={event => setEmail(event.target.value)} />
            </Campo>
            <Campo>
                <label htmlFor="input-phoneNumber">Telefone: </label>
                <input id="input-phoneNumber" type="humber" value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} />
            </Campo>

            <button type="submit">Criar Contato</button>

        </form>
    )
};

export default AddContentForm;