import React, { useState, useRef, useEffect } from 'react';
import { StyleComponents } from './style';

function Header({ imagem }) {
  const modalRef = useRef(null);

  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [contatoModalOpen, setContatoModalOpen] = useState(false);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [servicosModalOpen, setServicosModalOpen] = useState(false);
  const [sobreModalOpen, setSobreModalOpen] = useState(false);

  const openBlogModal = () => setBlogModalOpen(true);
  const closeBlogModal = () => setBlogModalOpen(false);

  const openContatoModal = () => setContatoModalOpen(true);
  const closeContatoModal = () => setContatoModalOpen(false);

  const openPortfolioModal = () => setPortfolioModalOpen(true);
  const closePortfolioModal = () => setPortfolioModalOpen(false);

  const openServicosModal = () => setServicosModalOpen(true);
  const closeServicosModal = () => setServicosModalOpen(false);

  const openSobreModal = () => setSobreModalOpen(true);
  const closeSobreModal = () => setSobreModalOpen(false);

  const handleOutsideClick = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      !event.target.closest('.modal-trigger') // Evita fechar o modal se clicar no elemento que o abre
    ) {
      closeBlogModal();
      closeContatoModal();
      closePortfolioModal();
      closeServicosModal();
      closeSobreModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [blogModalOpen, contatoModalOpen, portfolioModalOpen, servicosModalOpen, sobreModalOpen]);

  return (
    <StyleComponents>
      <ul>
        <li>
          <img src={imagem} alt="Logo de folha verde e laranja 'Green and orange leaf logo.'" />
        </li>
        <li onClick={openBlogModal} className="modal-trigger">Blog</li>

        <li onClick={openContatoModal} className="modal-trigger">Contato</li>

        <li onClick={openPortfolioModal} className="modal-trigger">Portfólio</li>
        <li onClick={openServicosModal} className="modal-trigger">Serviços</li>

        <li onClick={openSobreModal} className="modal-trigger">Sobre</li>
        <li></li>
      </ul>

      {/* Modal de Blog */}
      {blogModalOpen && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={closeBlogModal}>&times;</span>
            <p>Conteúdo do modal de Blog</p>
            <p>Conteúdo do modal de Blog</p>
            <p>Conteúdo do modal de Blog</p>
            <p>Conteúdo do modal de Blog</p>
            <p>Conteúdo do modal de Blog</p>
            <p>Conteúdo do modal de Blog</p>
            <p>Conteúdo do modal de Blog</p>
            <p>Conteúdo do modal de Blog</p>
            {/* Adicione aqui o conteúdo específico para a seção de Blog */}
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
            <p>Conteúdo do modal de Contato</p>
            {/* Adicione aqui o conteúdo específico para a seção de Contato */}
          </div>
        </div>
      )}

      {/* Modal de Portfólio */}
      {portfolioModalOpen && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={closePortfolioModal}>&times;</span>
            <p>Conteúdo do modal de Portfólio</p>
            <p>Conteúdo do modal de Portfólio</p>
            <p>Conteúdo do modal de Portfólio</p>
            <p>Conteúdo do modal de Portfólio</p>
            <p>Conteúdo do modal de Portfólio</p>
            <p>Conteúdo do modal de Portfólio</p>
            <p>Conteúdo do modal de Portfólio</p>
            <p>Conteúdo do modal de Portfólio</p>
            {/* Adicione aqui o conteúdo específico para a seção de Portfólio */}
          </div>
        </div>
      )}

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
            {/* Adicione aqui o conteúdo específico para a seção de Serviços */}
          </div>
        </div>
      )}

      {/* Modal de Sobre */}
      {sobreModalOpen && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={closeSobreModal}>&times;</span>
            <p><a href="#">Conteúdo do modal de Sobre</a></p>
            <p><a href="#">Conteúdo do modal de Sobre</a></p>     
            <p><a href="#">Conteúdo do modal de Sobre</a></p>
            <p><a href="#">Conteúdo do modal de Sobre</a></p>


            <p><a href="#">Conteúdo do modal de Sobre</a></p>

            <p><a href="#">Conteúdo do modal de Sobre</a></p>

           



            {/* Adicione aqui o conteúdo específico para a seção de Sobre */}
          </div>
        </div>
      )}
    </StyleComponents>
  );
}

export default Header;
