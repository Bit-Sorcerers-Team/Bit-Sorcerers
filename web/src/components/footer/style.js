import styled from 'styled-components';
import Colors from '../colors';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: baseline;
  text-align: center;
  justify-content: space-around;
  background: linear-gradient(217deg, #81f876cc, rgba(255, 209, 2, 0.308) 70.71%),
              linear-gradient(127deg, #00ff0059, rgba(255, 209, 2, 0.253) 70.71%),
              linear-gradient(336deg, #ffd900cc, rgba(255, 174, 0, 0.418) 70.71%);
  background-attachment: fixed;

  ul {
    display: flex;
    flex-direction: column;
    margin: 0; /* Removi margem padrão */
    padding: 0; /* Removi preenchimento padrão */
  }

  li {
    list-style: none;
  }
   img{
    width: 100px;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    line-height: 8px;
    font-weight: 500;
  }

`;

export const Direitos = styled.div`
  width: 100%;
  position: relative;
  font-size: 14px;
  color: ${Colors.branco};
  

  @media (max-width: 768px) {
    margin-top: 10px;  


  }
  @media (max-width: 550px) {
    margin-top: 10px;  
    font-size: 8px;

    
  }
`;



