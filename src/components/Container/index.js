import styled from 'styled-components';
import preset from '../../../config/presetConfig.json';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url(${preset.bg}) no-repeat bottom right;
  background-size: cover;
`;

export const QuizContainer = styled.div`
max-width: 350px;
margin: auto 10%;
padding-top: 45px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
