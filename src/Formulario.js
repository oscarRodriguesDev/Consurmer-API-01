import React, { useState } from 'react';

const Formulario = () => {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [empresaSelecionada, setEmpresaSelecionada] = useState(null);
  const [erro, setErro] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/api/areaPorEmpresa/?nomeEmpresa=${nomeEmpresa}`
      );
      const data = await response.json();
      setEmpresaSelecionada(data);
      setErro(null);
    } catch (error) {
      setEmpresaSelecionada(null);
      setErro('Erro ao fazer a requisição');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nome da Empresa:
          <input
            type="text"
            value={nomeEmpresa}
            onChange={(e) => setNomeEmpresa(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {empresaSelecionada && (
        <div>
          <h2>Empresa Selecionada</h2>
          <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid black', padding: '8px' }}>Empresa</th>
      <th style={{ border: '1px solid black', padding: '8px' }}>Áreas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid black', padding: '8px' }}>{empresaSelecionada && empresaSelecionada.nomeEmpresa}</td>
      <td style={{ border: '1px solid black', padding: '8px' }}>{empresaSelecionada && empresaSelecionada.nomeArea}</td>
    </tr>
  </tbody>
</table>

        </div>
      )}
      {erro && <p>{erro}</p>}
    </div>
  );
};

export default Formulario;
