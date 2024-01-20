import styled, { keyframes } from 'styled-components';
import Colors from '../colors';

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const StyleComponents = styled.div`
  h3 {
    text-align: center;
    font-size: 40px;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
  }
  li {
    width: 50%;
    font-size: 25px;
    font-weight: bolder;
  }

  img {
    width: 90%; 
    animation: ${moveUpDown} 2s linear infinite;

  }
`;
