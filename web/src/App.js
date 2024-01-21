import './App.css';
import Banner from './components/banner/banner';
import Conteudo from './components/conteudo/conteudo';
import Footer from './components/footer/footer';
import Header from './components/header';

import imagemSobre from './img/imagemSobre.png';
import logo from './img/logo.jpg';
import bannerPrincipal from './img/bannerTopo.png';
import logoFooter from './img/logo.jpg'

function App() {
  return (
    <div className="App">
      
      <Header imagem={logo} />
      <Banner imagem={bannerPrincipal} />
      <Conteudo imagem={imagemSobre} />
      <Footer imagem={logoFooter}/>
    </div>
  );
}

export default App;
