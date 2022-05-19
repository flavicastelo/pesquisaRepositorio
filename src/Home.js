import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';


function App(props) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>{ //se useState recebe strings entao armazena os dados
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository)=> {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        navigate('/repositories');
    }).catch(err => {   //se nao recebe manda msg de erro
      setErro(true);
    });
    
  }

  return (   
    <S.ContainerPrincipal> 
      <S.Title>Pesquisa de 
      repositórios</S.Title>
      <S.ContainerBox>
        <S.Text>Digite abaixo o nome do usuário que você deseja vê os repositórios do <b>GitHub</b>:</S.Text>
        <S.ContainerForm>
          <S.Input className='usuarioInput' placeholder='Digite o usuário ' value={usuario} onChange={e => setUsuario(e.target.value)}/>
          <S.Button type="button" className='btn' onClick={handlePesquisa}>Pesquisar</S.Button>    
        </S.ContainerForm>
        { erro ? <S.ErrorMsg>Ocorreu um erro, tente novamente!</S.ErrorMsg> : ''}
        
        
      </S.ContainerBox>  
     
    </S.ContainerPrincipal>
  );
}

export default App;

