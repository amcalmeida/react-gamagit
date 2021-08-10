import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

import * as S from './styled';

export default function Home(props) {
  const [ usuario, setUsuario ] = useState('');

  const history = useHistory();
  
  function handlePesquisaUsuario() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then( response => {
      let oData = response.data;

      let repositoriesName = [];

      //Mapeando apenas os nomes dos usuários e armazenando no objeto
      oData.map( (repository) => {
        repositoriesName.push(repository.name);
      });

      //Convertendo o objeto em String
      let aData = JSON.stringify(repositoriesName);
      console.log(repositoriesName);
      console.log(aData);

      //Armazenando a string de nomes na memoria do navegador (local storage) **** Mesma ideia de JSON Model, só que armazena no navegador (memória temporária)
      localStorage.setItem('data', aData); 
      //Para verificar se foi armazenado na memória do navegador.
      // Abrir a janela de desenvolvedor (debugger), na opção 'Application > Storage > Local Storage'.

      //Armazenando no histórico do navegador
      history.push('/repositories');
    });
  }

  return (
    <S.Container>
      <S.Input id="inputUsuario" name="inputUsuario" placeholder="Digite um usuário" value={usuario} className="inputUsuario" onChange={ e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisaUsuario} >Pesquisar</S.Button>
    </S.Container>
  );
}
