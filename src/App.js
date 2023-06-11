import React from 'react';
import TabelaEmpresas from './TabelaEmpresas';
import './App.css';
import { handleVisualizarTudo, handleNovaEmpresa, handleConsultarEmpresa, handleDeletarAreas, handleIncluirAreas, handleSair } from './menuActions';


const App = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul>
            <li onClick={handleVisualizarTudo}>Visualizar Tudo</li>
            <li onClick={handleNovaEmpresa}>Nova Empresa</li>
            <li onClick={handleConsultarEmpresa}>Consultar Empresa</li>
            <li onClick={handleDeletarAreas}>Deletar Áreas</li>
            <li onClick={handleIncluirAreas}>Incluir Áreas</li>
            <li onClick={handleSair}>Sair</li>

          </ul>
        </nav>
      </header>
      <h1>Tabela de Empresas</h1>
      <TabelaEmpresas />
    </div>
  );
};

export default App;
