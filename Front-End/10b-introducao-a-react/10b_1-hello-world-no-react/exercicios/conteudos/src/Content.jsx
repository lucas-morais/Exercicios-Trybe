import React, { Component } from "react";
import './style.css';

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

class Content extends Component {
  render() {
    return (
      <ul>
        {conteudos.map((conteudo, index) => (
          <li key={index} className="card">
            <p>O conteúdo é: {conteudo.conteudo}</p>
            <p>Status: {conteudo.status}</p>
            <p>Bloco {conteudo.bloco}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Content;
