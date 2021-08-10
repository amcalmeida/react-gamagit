import React, { useState } from 'react';

import axios from 'axios';

import * as S from './styled';

export default function Home(props) {
  const [ usuario, setUsuario ] = useState('');
  
  function handlePesquisaUsuario() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then( response => {
      let oUsersData = response.data;
      let repoUsersName = [];

      //Mapeando apenas os nomes dos usuários e armazenando no objeto
      oUsersData.map( (user) => {
        repoUsersName.push(user.name);
      });

      //Convertendo o objeto em String
      let aUsersData = JSON.stringify(oUsersData);

      //Armazenando a string de nomes na memoria do navegador (local storage) **** Mesma ideia de JSON Model, só que armazena no navegador (memória temporária)
      localStorage.setItem('usersData', aUsersData); 

      //Para verificar se foi armazenado na memória do navegador.
      // Abrir a janela de desenvolvedor (debugger), na opção 'Application > Storage > Local Storage'.
    });
  }

  return (
    <S.Container>
      <S.Input id="inputUsuario" name="inputUsuario" placeholder="Digite um usuário" value={usuario} className="inputUsuario" onChange={ e => setUsuario(console.log(e.target.value))} />
      <S.Button type="button" onClick={handlePesquisaUsuario} >Pesquisar</S.Button>
    </S.Container>
  );
}
