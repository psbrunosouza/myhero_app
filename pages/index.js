import Widget from '../src/components/Widget';
import { Container, QuizContainer } from '../src/components/Container';
import Logo from '../src/components/Logo';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import preset from '../config/presetConfig.json';


export default function Home() {
  return (
    <Container>
      <QuizContainer>
        <Logo src="https://user-images.githubusercontent.com/45085894/105908243-bce21180-6004-11eb-8422-16404081050a.png"/>

        <Widget>
          <Widget.Content>
            <h1>{preset.title}</h1>
            <p>{preset.description}</p>
            <input type="text" placeholder="Digite seu nome de HERÓI"/>
            <button>Iniciar quiz</button>
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
      <GitHubCorner projectUrl="https://github.com/psbrunosouza" />
    </Container>
  );
}
