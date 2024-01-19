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
    width: 100px;
    border-radius: 0px 10px 0px 10px;
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
    width: 50%;
    padding: 5px;
    margin: 10px;
    left: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50px;
     

}
.modal-content{
    width: 100vh;

}
.close{
    display: flex;
    justify-content: end;
    color: red;
}
`
 
