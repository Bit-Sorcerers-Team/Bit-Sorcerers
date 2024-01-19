import React, { useState } from 'react';
import { StyleComponents } from './style';
import logo from '../../img/logo.jpg';

function Header() {
  // Estados para controlar a abertura e o fechamento de cada modal
  const [servicosModalOpen, setServicosModalOpen] = useState(false);
  const [sobreNosModalOpen, setSobreNosModalOpen] = useState(false);
  const [contatoModalOpen, setContatoModalOpen] = useState(false);

  // Funções para abrir e fechar cada modal
  const openServicosModal = () => setServicosModalOpen(true);
  const closeServicosModal = () => setServicosModalOpen(false);

  const openSobreNosModal = () => setSobreNosModalOpen(true);
  const closeSobreNosModal = () => setSobreNosModalOpen(false);

  const openContatoModal = () => setContatoModalOpen(true);
  const closeContatoModal = () => setContatoModalOpen(false);

  return (
    <StyleComponents>
      <ul>
        <li>
          <img src={logo} alt="Logo de folha verde e laranja 'Green and orange leaf logo.'" />
        </li>
        <li><a>Home</a></li>
        <li onClick={openServicosModal}>Serviços</li>
        <li onClick={openSobreNosModal}>Sobre Nós</li>
        <li></li>
        <li className="contato" onClick={openContatoModal}>Contato</li>
        <li></li>
      </ul>

      {/* Modal de Serviços */}
      {servicosModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeServicosModal}>&times;</span>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
          </div>
        </div>
      )}

      {/* Modal de Sobre Nós */}
      {sobreNosModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeSobreNosModal}>&times;</span>
            <p>Conteúdo do modal de Sobre Nós</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
          </div>
        </div>
      )}

      {/* Modal de Contato */}
      {contatoModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeContatoModal}>&times;</span>
            <p>Conteúdo do modal de Contato</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
          </div>
        </div>
      )}
    </StyleComponents>
  );
}

export default Header;
