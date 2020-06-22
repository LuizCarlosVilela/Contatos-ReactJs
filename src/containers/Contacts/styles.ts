import styled from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
`;

export const  Card  = styled.div`
    width: 768px;

    margin: 10px;
    padding: 20px;

    background-color: #eee;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

    overflow-y: auto;
`;

export const ContactList = styled.ul`
    list-style: none;
`;
