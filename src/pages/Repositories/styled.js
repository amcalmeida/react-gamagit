import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333    
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItemBG = styled.li`
    margin: .05rem 0;
    background: #000;
    color: #fff;
    padding: .05rem;
`;

//Estilização de um componente do React
export const LinkBackHome = styled(Link)` 
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background: #000;
    color: #fff;
    padding: .5rem 0;
    text-decoration: none;
`;
