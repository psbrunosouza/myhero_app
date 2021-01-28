// REACT AND NEXT
import React, { useState, useEffect } from 'react';
// DATABASE
import preset from '../config/presetConfig.json';
// LAYOUT COMPONENTS
import { Container, QuizContainer } from '../src/components/Container';
// DESIGN COMPONENTS
import Widget from '../src/components/Widget';
import Corner from '../src/components/Corner';
import Button from '../src/components/Button';

function QuizQuestion({
  alternatives,
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
}) {
  return (
    <Widget>
      <Widget.Header>
        <img
          src={question.image}
          alt="teste"
        />
      </Widget.Header>

      <Widget.Content>
        <h1>{question.title}</h1>
        <p>{question.description}</p>
        <form onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
        >
          {alternatives.map((alternative) => (
            <Widget.Alternative as="label" key={questionIndex}>
              <input type="radio" name={questionIndex} />
              {alternative}
            </Widget.Alternative>
          ))}
          <Button type="submit">Confirmar</Button>
        </form>
        <p>{`${questionIndex + 1} Questão de ${totalQuestions}`}</p>
      </Widget.Content>
    </Widget>
  );
}

export default function Quiz() {
  const quizState = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [screenState, setScreenState] = useState(quizState.QUIZ);
  const totalQuestions = preset.questions.length;
  const question = preset.questions[currentQuestion];
  const questionAlternatives = question.alternatives;

  useEffect(() => {
    setTimeout(() => {
      setScreenState(quizState.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleQuizSubmit() {
    const nextFunction = currentQuestion + 1;

    if (nextFunction < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScreenState(quizState.RESULT);
    }
  }

  return (
    <Container>
      <QuizContainer>
        {
          screenState === quizState.QUIZ
          && (
            <QuizQuestion
              alternatives={questionAlternatives}
              question={question}
              totalQuestions={totalQuestions}
              questionIndex={currentQuestion}
              onSubmit={handleQuizSubmit}
            />
          )
        }
      </QuizContainer>
      <Corner />
    </Container>

  );
}
