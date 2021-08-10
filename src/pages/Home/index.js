import React, { useState } from 'react';

import axios from 'axios';

import * as S from './styled';

export default function Home(props) {
  const [ usuario, setUsuario ] = useState('');
  
  function handlePesquisaUsuario() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then( response => console.log(response.data));
  }

  return (
    <S.Container>
      <S.Input id="inputUsuario" name="inputUsuario" placeholder="Digite um usuário" value={usuario} className="inputUsuario" onChange={ e => setUsuario(console.log(e.target.value))} />
      <S.Button type="button" onClick={handlePesquisaUsuario} >Pesquisar</S.Button>
    </S.Container>
  );
}
