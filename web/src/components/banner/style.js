import styled from 'styled-components';
import Colors  from '../colors';



export const StyleComponents = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    max-height: 550px;
    text-align: center;
    align-items: center;


.banner{
    position: relative;
    color: white;
     width: 100%;
    height: 460px;
    left: 50%;
    transform: translate(-50%  );
    border-radius:  0px 40px;
    top: -50px;
    color: ${Colors.branco};
    font-size: 20px;
    
    
}
img {
    position: absolute;
    width: 100%;
    height: 100%;
     overflow: hidden;
    object-fit: cover; /* Corta a imagem para preencher todo o espaço sem distorção */
    top: -50px;
    z-index: -1;
  }
.banner h1 {
    padding: 20px;
    background-color: ${Colors.preto};
}
@media (max-width: 790px) {
    .banner h1 {
      padding: 0px;
    }
  }


@media (max-width: 560px) {
    .banner h1 {
        position: relative;
        top: 0px;
        padding:30px;
    font-size: 20px; 

  } 
    .banner {
     background-size: cover; /* Ajusta o tamanho da imagem para cobrir completamente o elemento */
    background-position: center; /* Centraliza a imagem */
    width: 100%;
    height: 300px;
    border-radius: 0px 40px;
    top: -50px;
    color: ${Colors.branco};
    font-size: 20px;
}
  }
 
`

