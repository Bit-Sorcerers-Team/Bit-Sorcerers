import React, { useState, useRef, useEffect } from 'react';
import { StyleComponents } from './style';

function Header({imagem}) {
  const modalRef = useRef(null);

  const [servicosModalOpen, setServicosModalOpen] = useState(false);
  const [sobreNosModalOpen, setSobreNosModalOpen] = useState(false);
  const [contatoModalOpen, setContatoModalOpen] = useState(false);

  const openServicosModal = () => setServicosModalOpen(true);
  const closeServicosModal = () => setServicosModalOpen(false);

  const openSobreNosModal = () => setSobreNosModalOpen(true);
  const closeSobreNosModal = () => setSobreNosModalOpen(false);

  const openContatoModal = () => setContatoModalOpen(true);
  const closeContatoModal = () => setContatoModalOpen(false);

  const handleOutsideClick = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      !event.target.closest('.modal-trigger') // Evita fechar o modal se clicar no elemento que o abre
    ) {
      closeServicosModal();
      closeSobreNosModal();
      closeContatoModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [servicosModalOpen, sobreNosModalOpen, contatoModalOpen]);

  return (
    <StyleComponents>
      <ul>
        <li>
          <img src={imagem} alt="Logo de folha verde e laranja 'Green and orange leaf logo.'" />
        </li>
        <li onClick={openServicosModal} className="modal-trigger">Blog</li>

        <li onClick={openServicosModal} className="modal-trigger">Contato</li>

        <li onClick={openServicosModal} className="modal-trigger">Portifólio</li>
        <li onClick={openSobreNosModal} className="modal-trigger">Serviços</li>

        <li onClick={openSobreNosModal} className="modal-trigger">Sobre</li>
        <li></li>
       {/*<li className="contato modal-trigger" onClick={openContatoModal}></li>*/} 
        <li></li>
      </ul>

      {/* Modal de Serviços */}
      {servicosModalOpen && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={closeServicosModal}>&times;</span>
            <p>Conteúdo do modal de Serviços</p>
            <p>Conteúdo do modal de Serviços</p>
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
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={closeSobreNosModal}>&times;</span>
            <p>Conteúdo do modal de Sobre Nós</p>
            <p>Conteúdo do modal de Sobre Nós</p>
            <p>Conteúdo do modal de Sobre Nós</p>

            <p>Conteúdo do modal de Sobre Nós</p>
            <p>Conteúdo do modal de Sobre Nós</p>

            <p>Conteúdo do modal de Sobre Nós</p>
            <p>Conteúdo do modal de Sobre Nós</p>

            <p>Conteúdo do modal de Sobre Nós</p>

           </div>
        </div>
      )}

      {/* Modal de Contato */}
      {contatoModalOpen && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={closeContatoModal}>&times;</span>
            <p>Conteúdo do modal de Contato</p>
            <p>Conteúdo do modal de Contato</p>
            <p>Conteúdo do modal de Contato</p>
            <p>Conteúdo do modal de Contato</p>

            <p>Conteúdo do modal de Contato</p>
            <p>Conteúdo do modal de Contato</p>

            <p>Conteúdo do modal de Contato</p>

             
          </div>
        </div>
      )}
    </StyleComponents>
  );
}

export default Header;
