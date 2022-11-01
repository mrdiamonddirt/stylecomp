import styled from "styled-components";

export const PrimaryBtn = ({ children}) => {
    return(
        <Button background='navy' color="white" border="navy">{children}</Button>
    )
}

export const SecondaryBtn = ({children}) => {
    return(
        <Button background='white' color="Navy" border="navy">{children}</Button>
    )
}

export const AlertBtn = ({children}) => {
    return(
        <Button background='red' color="white" border="navy">{children}</Button>
    )
}

const Button = styled.button`
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};
    font-size: 16px;
    margin: 10px 15px;
    padding: 15px 25px;
    border: 1px solid ${(props) => props.border};
    border-radius: 5px;
    cursor: pointer;
`;