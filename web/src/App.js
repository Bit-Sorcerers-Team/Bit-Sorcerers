import './App.css';
import Banner from './components/banner/banner';
import Conteudo from './components/conteudo/conteudo';
import Footer from './components/footer/footer';
import Heander from './components/header';

function App() {
  return (
    <div className="App">
      <Heander/>
      <Banner/>
      <Conteudo/>
      <Footer/>
   
    </div>
  );
}

export default App;
