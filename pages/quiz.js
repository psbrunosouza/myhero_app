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
import Form from '../src/components/Form';

// FUNCTION WITH ALL RESULTS
function QuizResults({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <h1>RESULTADO:</h1>
      </Widget.Header>

      <Widget.Content>
        <p align="center">
          Voce acertou:
          {' '}
          {/* {results.reduce((acc, curr) => {
            if (curr === true) {
              return acc + 1;
            }
            return acc;
          }, 0)} */}
          {results.filter((x) => x).lenght}
          {' '}
          Perguntas
        </p>
        <ul>
          {
            results.map((result, index) => (
              <li key={`result_${result}`}>
                #
                {index + 1}
                {' '}
                Resultado
                { result === true ? ' Acertou' : ' Errou'}
              </li>
            ))
          }
        </ul>
      </Widget.Content>
    </Widget>
  );
}

// FUNCTION WITH ALL LOGICS ABOUT QUESTIONS
function QuizQuestions({
  alternatives,
  question,
  totalQuestions,
  questionIndex,
  handleSubmit,
  addAnswer,
  answers,
}) {
  const [alternativeSelected, setAlternativeSelected] = useState(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const alternativeSolved = alternativeSelected === question.answer;
  const hasAlternativeSelected = alternativeSelected !== undefined;

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
        <Form onSubmit={(event) => {
          event.preventDefault();
          setIsSubmitted(true);
          addAnswer([...answers, alternativeSolved]);
          setTimeout(() => {
            handleSubmit();
            setIsSubmitted(false);
            setAlternativeSelected(undefined);
          }, 3 * 1000);
        }}
        >
          {alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = alternativeSolved ? 'SUCCESS' : 'ERROR';
            const isSelected = alternativeSelected === alternativeIndex;

            return (
              <Widget.Alternative
                as="label"
                key={alternativeId}
                data-selected={isSelected}
                data-status={isSubmitted && alternativeStatus}
              >
                <input
                  type="radio"
                  name={questionIndex}
                  onChange={() => { setAlternativeSelected(alternativeIndex); }}
                />
                {alternative}
              </Widget.Alternative>
            );
          })}
          <Button
            type="submit"
            disabled={!hasAlternativeSelected || isSubmitted}
          >
            Confirmar
          </Button>
        </Form>
        <p align="center">{`${questionIndex + 1} Alternativa(s) de ${totalQuestions}`}</p>
        {isSubmitted && alternativeSolved && <p align="center">Você acertou PLUS ULTRA!</p>}
        {isSubmitted && !alternativeSolved && <p align="center">Você errou. Sinto muito!</p>}
      </Widget.Content>
    </Widget>
  );
}

// FUNCTION THAT RENDER, QUIZ, LOADING AND RESULTS
export default function Quiz() {
  const quizState = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [screenState, setScreenState] = useState(quizState.QUIZ);
  const [results, setResults] = useState([]);
  const totalQuestions = preset.questions.length;
  const question = preset.questions[currentQuestion];
  const questionAlternatives = question.alternatives;

  useEffect(() => {
    setTimeout(() => {
      // setScreenState(quizState.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleQuizSubmit() {
    const nextQuest = currentQuestion + 1;

    if (nextQuest < totalQuestions) {
      setCurrentQuestion(nextQuest);
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
            <QuizQuestions
              alternatives={questionAlternatives}
              question={question}
              totalQuestions={totalQuestions}
              questionIndex={currentQuestion}
              handleSubmit={handleQuizSubmit}
              addAnswer={setResults}
              answers={results}
            />
          )
        }

        {screenState === quizState.RESULT && <QuizResults results={results} />}
      </QuizContainer>
      <Corner />
    </Container>

  );
}
