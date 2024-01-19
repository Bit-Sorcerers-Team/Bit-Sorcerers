import styled from 'styled-components';
import Colors  from '../colors';

export const StyleComponents = styled.div`

ul{
display: flex;
justify-content:space-between;
align-items: center;
background-color: ${Colors.branco};
padding-top: 5px;
}

li{
    list-style: none;
    font-family: "Chakra Petch", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 20px;
  a{
    text-decoration: none;
    color: ${Colors.preto};
    font-weight: bold;
  }
 
}
li img{
    max-width: 100px;
    width: 100%;
    border-radius: 0px 10px 0px 10px;
}
@media (max-width: 500px) {
    ul{
        justify-content: space-between;
        padding: 0;
 
    }
   
    li{
      font-size  :14px ;
      font-weight: bold;
    }
  
  
}

 
 
 .contato{
    background-color:${Colors.verde};
    border-radius: 10px;
    padding: 5px;
 }
.modal{
    position: relative;
    display: flex;
    background-color: ${Colors.branco};
    width: 80%;
    padding: 5px;
    margin: 20px;
    z-index: 999;
     
    left: 50%;
    transform: translate(-50%, -50%);
    top: 130px;
    
     

}
.modal-content{
    width: 100%;
}
.modal-content p{
    position: relative;
    text-align: center;
}
 
.close{
    display: flex;
    justify-content: end;
    color: red;
    font-weight: bold;
}
 
`
 
