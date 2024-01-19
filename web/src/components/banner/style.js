import styled from 'styled-components';
import Colors  from '../colors';


export const StyleComponents = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    text-align: center;
    align-items: center;

.banner{
    position: relative;
    color: white;
    background-color: ${Colors.laranja};
    width: 80%;
    left: 50%;
    transform: translate(-50%  );
    border-radius:  0px 40px;
    
}
.banner .pocao{
 
    position: relative;
display: flex;
width: 250px;
left: 80%;
top: -120px;
 
}
`

