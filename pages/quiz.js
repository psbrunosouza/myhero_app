import React from 'react';
import styled from 'styled-components';
import preset from '../config/presetConfig.json';
import GithubCorner from '../src/components/Corner';
import { QuizContainer } from '../src/components/Container';
import Card from '../src/components/Card';
import Button from '../src/components/Button';

const Container = styled.div`
  background: url(${preset.bg}) no-repeat bottom right;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export default function Quiz() {
  return (
    <Container>
      <QuizContainer>
        <Card>
          <Card.Header>
            <img
              src="https://i.vimeocdn.com/portrait/58832_300x300.jpg"
              alt="teste"
            />
          </Card.Header>

          <Card.Content>
            <h1>title</h1>
            <p>content</p>

            <Button>Confirmar</Button>
          </Card.Content>
        </Card>
      </QuizContainer>
      <GithubCorner />
    </Container>

  );
}
