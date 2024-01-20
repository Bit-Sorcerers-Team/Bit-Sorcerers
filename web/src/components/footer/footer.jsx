
import React, { useState } from 'react';
import { Direitos, FooterContainer } from './style';
import logo from '../../img/logo.jpg'
  

export default function Footer (){
    return(
        <>
        <FooterContainer>
             <ul>
                  <h3>Contatos</h3>
                  <li><p> 11111111111</p></li>
                  <li><p>bitsorcerersteam@gmail.com </p></li>
                  <li><p> </p></li>
                </ul>

                <ul>
                  <li><h3>Redes Sociais</h3></li>
                  <li><p> Twitter</p></li>
                  <li><p> Facebook</p></li>
                  <li><p> Instagram</p></li>
                  <li><p> Youtube</p></li>
                </ul>

                <ul>
                  <li><h3>Institucional</h3></li>
                  <li><p>Política de compra no cartão</p></li>
                  <li><p>Política de cancelamento</p></li>
                  <li><p>Política de compra</p></li>
                  <li><p>Dúvidas</p></li>
                </ul>

                <ul>
                  <li><img src={logo} alt="Logo" /></li>
                </ul>

                


   
        </FooterContainer>
        <Direitos>  <p className='direitos'>
        Este site é protegido pelo reCAPTCHA e a Política de Privacidade e
         os Termos de Serviço do Google se aplicam. 
        Todos os direitos reservados. Desenvolvido por Bit Sorcerers
      </p>   
</Direitos>
        </>
    )
}