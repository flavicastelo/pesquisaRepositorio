import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

//  { useEffect } para transicao de paginas
//  { useState } para lidar com estados

export default function Repositories(){
    const navigate = useNavigate();
    const [ repositories, setRepositories ] = useState([]);

    useEffect(()=>{
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            navigate('/');
        }              
 
    }, []);

    return(
        <S.ContainerPrincipal>
            <S.Title>Repositórios</S.Title>
             <S.List>
                    { repositories.map(repository => {
                        return(
                            <S.ListItem><b>Repositório:  </b> { repository }</S.ListItem>
                        )
                    }) }
            </S.List>     
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.ContainerPrincipal>
    )
}