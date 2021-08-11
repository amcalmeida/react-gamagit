import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import * as S from './styled';

export default function Repositories() {
    const history = useHistory();

    const [ repositories, setRepositories ] = useState([]);

    // useEffect monitora o estado de uma variável. Quando houver alteração, irá disparar uma função.
    useEffect( () => {
        let aData = localStorage.getItem('data'); //pega as informações que estão na Storage e armazena na variável.

        if(aData != null) {
            //Converte o array em objeto.
            let oData = JSON.parse(aData);

            //Armazena o objeto no repositório de nomes
            setRepositories(oData);

            localStorage.clear();
        } else {
            history.push("/"); //retorna para a pagina inicial
        }
    }, []); //Se deixar os [] vazio, ao renderizar a página, a função será executada.

    return (
        <S.Container>
            <S.Title>Repositório</S.Title>
            <S.List>
                { repositories.map( repository => {
                    return (
                        <S.ListItemBG>Repositório: { repository }</S.ListItemBG>
                    )
                }) }
            </S.List>
            <S.LinkBackHome to="/">Voltar</S.LinkBackHome>
        </S.Container>
    )
}