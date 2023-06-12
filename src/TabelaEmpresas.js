import React, { useEffect, useState } from 'react';

const TabelaEmpresas = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/listEmpresas')
      .then(response => response.json())
      .then(empresas => {
        fetch('http://localhost:8080/api/listAreas')
          .then(response => response.json())
          .then(areas => {
            const dadosFormatados = formatarDados(empresas, areas);
            setDados(dadosFormatados);
          })
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  }, []);

  const formatarDados = (empresas, areas) => {
    const dadosFormatados = [];

    for (const empresa of empresas) {
      const nomeEmpresa = empresa.nomeEmpresa;
      const descricaoEmpresa = empresa.descricaoEmpresa;

      if (areas[nomeEmpresa]) {
        const areasEmpresa = areas[nomeEmpresa];

        for (const area in areasEmpresa) {
          const nomeArea = area;
          const descricaoArea = areasEmpresa[area];

          const empresaFormatada = {
            nomeEmpresa: nomeEmpresa,
            descricaoEmpresa: descricaoEmpresa,
            nomeArea: nomeArea,
            descricaoArea: descricaoArea
          };

          dadosFormatados.push(empresaFormatada);
        }
      }
    }

    return dadosFormatados;
  };

  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Nome da Empresa</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Descrição da Empresa</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Área da Empresa</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Descrição da Área</th>
        </tr>
      </thead>
      <tbody>
        {dados.map(empresa => (
          <tr key={`${empresa.nomeEmpresa}-${empresa.nomeArea}`}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{empresa.nomeEmpresa}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{empresa.descricaoEmpresa}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{empresa.nomeArea}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{empresa.descricaoArea}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaEmpresas;
