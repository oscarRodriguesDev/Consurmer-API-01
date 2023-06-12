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
            <li onClick={handleVisualizarTudo}>VISUALIZANDO INFORMAÇÕES SOBRE AS EMPRESAS</li>
            

          </ul>
        </nav>
      </header>
      <h1>Tabela de Empresas</h1>
      <TabelaEmpresas />
    </div>
  );
};

export default App;
