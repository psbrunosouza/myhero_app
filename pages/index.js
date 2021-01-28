// REACT AND NEXT
import React, { useState } from 'react';
import { useRouter } from 'next/router';
// DATABASE
import preset from '../config/presetConfig.json';
// LAYOUT COMPONENTS
import Widget from '../src/components/Widget';
import { Container, QuizContainer } from '../src/components/Container';
import Footer from '../src/components/Footer';
// DESIGN COMPONENTS
import Logo from '../src/components/Logo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Corner from '../src/components/Corner';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleGetName = (event) => {
    setName(event.target.value);
  };

  const handleSendName = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <Container>
      <QuizContainer>
        <Logo src="https://user-images.githubusercontent.com/45085894/105908243-bce21180-6004-11eb-8422-16404081050a.png" />

        <Widget>
          <Widget.Content>
            <h1>{preset.title}</h1>
            <p>{preset.description}</p>
            <form onSubmit={handleSendName}>
              <Input
                onChange={handleGetName}
                type="text"
                placeholder="Digite seu nome de HERÓI"
              />

              <Button
                type="submit"
                disabled={name.length === 0}
              >
                Iniciar quiz
              </Button>

            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>...</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <Corner projectUrl="https://github.com/psbrunosouza" />
    </Container>
  );
}
