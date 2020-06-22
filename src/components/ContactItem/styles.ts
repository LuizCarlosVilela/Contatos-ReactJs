import styled from "styled-components";

export const Card = styled.li`
    border-radius: 20px;
    background-color: #ccc;

    padding: 16px;

    & + & {
        margin-top: 16px;
    }
`;
