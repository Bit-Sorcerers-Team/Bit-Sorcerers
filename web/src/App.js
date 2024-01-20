import './App.css';
import Banner from './components/banner/banner';
import Conteudo from './components/conteudo/conteudo';
import Heander from './components/header';

function App() {
  return (
    <div className="App">
      <Heander/>
      <Banner/>
      <Conteudo/>
   
    </div>
  );
}

export default App;
