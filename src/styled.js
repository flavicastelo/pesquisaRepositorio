import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerPrincipal = styled.div` 
    justify-content: center
    aling-items: center;
    text-align: center;       
    margin: 0;
`;

export const ContainerBox = styled.div`      
    margin: 0 auto;
    padding: 5px 8px;
    text-align: center;    
    border: 2px solid #d1cccc;
    max-width: 500px;
    height: 300px;
    border-radius: 0 0 10px 10px;
    background-color: #fff;
`;

export const ContainerForm = styled.div`      
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    
`;

export const Title = styled.h1` 
    margin: 0 auto;
    margin-top:25%;
    background-color: #171515;  
    color: #fff;  
    padding: 5px 10px;
    max-width: 500px;
    border-radius: 10px 10px 0 0;
   
`;
export const List = styled.ul`
    list-style: none; 
    padding-left: 0;    
`;
export const ListItem = styled.li`   
    max-width: 500px;
    margin: 5px auto;      
    background-color: #b286bb;
    color: white;     
    padding: .5rem;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center; 
`;

export const Input = styled.input`
    color: black;
    height: 26px;
    width: 300px;
    border: 2px solid #d1cccc;
    margin-top: 5%;

    &:focus,
    &active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    background-color: black;
    font-weight: bold;
    color: white;
    height: 30px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 5%;

    &:focus,
    &active {
        outline: none;
        box-shadow: none;
    }
`;

export const LinkHome = styled(Link)`
    display: flex;
    max-width: 500px;
    margin: .5rem auto;    
    padding: 5px 10px;
    background-color: #171515;
    text-decoration: none;
    color: white;
    justify-content: end;   
    border-radius: 0 0 10px 10px;  
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: .8rem;
    color: red;
    text-align: center;
    margin-top: 5px;
    
`;

export const Text = styled.p`
     
    font-size: 1rem;
    color: #000;
    text-align: center;
    margin-top: 15%;
`

