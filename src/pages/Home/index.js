import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

import * as S from './styled';

export default function Home(props) {
  const [ usuario, setUsuario ] = useState('');
  const [ error, setError ] = useState(false);

  let history = useHistory();
  
  function handlePesquisaUsuario() {
    setError(false);
    
    axios.get(`https://api.github.com/users/${usuario}/repos`).then( response => {
      const oData = response.data;

      let repositoriesName = [];

      //Mapeando apenas os nomes dos usuários e armazenando no objeto
      repositoriesName = oData.map( (repository) => {
        return repository.name;
      });

      //Convertendo o objeto em String
      let aData = JSON.stringify(repositoriesName);

      //Armazenando a string de nomes na memoria do navegador (local storage) **** Mesma ideia de JSON Model, só que armazena no navegador (memória temporária)
      localStorage.setItem('data', aData); 
      //Para verificar se foi armazenado na memória do navegador.
      // Abrir a janela de desenvolvedor (debugger), na opção 'Application > Storage > Local Storage'.

      //Armazenando no histórico do navegador
      history.push('/repositories');
    })
    .catch( err => {
      setError(true);
    });
  }

  return (
    <S.Container>
      <S.Content>
        <S.Input id="inputUsuario" name="inputUsuario" placeholder="Digite um usuário" value={usuario} className="inputUsuario" onChange={ e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisaUsuario} >Pesquisar</S.Button>
      </S.Content>  
      {
        error ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''
      }  
    </S.Container>
  );
}
