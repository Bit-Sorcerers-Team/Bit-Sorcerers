import React from 'react';
import { StyleComponents } from './style';
import Orcamento from '../botao/botaoOrcamento';

export default function Banner({ imagem }) {
  return (
    <StyleComponents>
      <img src={imagem} alt="banner" />

      <div className='banner'>
        <h1>
          Transformamos ideias em realidade digital.
          <h3>Bit Sorcerers: Software Sob Medida para o seu sucesso único.</h3>
          <Orcamento />
        </h1>
      </div>
    </StyleComponents>
  );
}
