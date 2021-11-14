import GlobalStyles from "./styles/GlobalStyles";
import { Container } from './styles/index';

import logo from './images/logo.svg';
import Orders from './components/Orders';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <img src={logo} alt="Logo ezOders"/>
        <Orders />
      </Container>
    </>
  );
}

export default App;


