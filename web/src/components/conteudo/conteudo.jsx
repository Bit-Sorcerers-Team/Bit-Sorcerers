import React from 'react';
import { StyleComponents } from './style';

export default function Conteudo({ imagem }) {
  return (
    <StyleComponents>
      <h3>Sobre</h3>
      <ul>
        <li>
          <p>
            Desenvolvemos Websites Inteligentes que elevam suas vendas a um novo patamar! Transforme a experiência dos
            seus clientes com estratégias de design inovadoras e Landing Pages envolventes. Potencialize os resultados
            da sua empresa, deixando uma marca memorável e conquistando vendas de forma irresistível!
          </p>
        </li>
        <li>
          {/* Utilize a propriedade imagem para exibir a imagem */}
          <img src={imagem} alt="Imagem de um notebook" />
        </li>
      </ul>
    </StyleComponents>
  );
}
