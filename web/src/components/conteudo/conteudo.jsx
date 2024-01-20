
import React, { useState } from 'react';
import { StyleComponents } from './style';
import laptopConteudo from '../../img/laptopConteudo.png'
 


export default function Conteudo (){
    return(
        <StyleComponents>
            <h3>Sobre</h3>
            <ul>
                <li> <p>Desenvolvemos Websites Inteligentes que elevam suas vendas a um novo patamar!
             Transforme a experiência dos seus clientes com estratégias de design inovadoras
              e Landing Pages envolventes. Potencialize os resultados da sua empresa, 
              deixando uma marca memorável e conquistando vendas de forma irresistível!</p></li>
                <li> <img src={laptopConteudo} alt="Imagem de um notebook na" /></li>
                
            </ul>
        </StyleComponents>
    )
}
