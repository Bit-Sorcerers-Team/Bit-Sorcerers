import styled from 'styled-components';
import Colors  from '../colors';
import laptop from '../../img/laptop.png'



export const StyleComponents = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    
    text-align: center;
    align-items: center;


.banner{
    position: relative;
    color: white;
     background-image: url(${laptop});
    width: 100%;
    height: 450px;
    left: 50%;
    transform: translate(-50%  );
    border-radius:  0px 40px;
    top: -50px;
    color: ${Colors.cinza};
    font-size: 20px;
    
    
}
.banner h1 {
    padding: 20px;
    background-color: ${Colors.lavanda};
}


@media (max-width: 560px) {
    .banner h1 {
    font-size: 12px; 
  }
}
`

