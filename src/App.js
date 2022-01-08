import React, { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [contatos, setContatos] = useState([
    {
      nome: "João",
      telefone: 2187243566,
    },
    {
      nome: "Maria",
      telefone: 21975625634,
    },
    {
      nome: "José",
      telefone: 21999485135,
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // FUNCIONA ASSIM:
    // contatos.push(
    //   {
    //     nome: event.target.nome.value,
    //     telefone: event.target.telefone.value
    //   }
    // )
    setContatos([
      ...contatos,
      {
        nome: nome,
        telefone: telefone
      }
    ])
    // Para limpat os campos
    setNome('')
    setTelefone('')
    console.log(contatos)
  };



  
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Digite o nome do Contato:</label>
          </div>

          <div>
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={(event) => {
                setNome(event.target.value);
                // console.log(nome)
              }}
            />
          </div>

          <div>
            <label>Digite o Telefone:</label>
          </div>

          <div>
            <input
              type="text"
              name="telefone"
              value={telefone}
              onChange={(event) => {
                setTelefone(event.target.value);
              }}
            />
          </div>

          <input type="submit" value="ADICIONAR" />
        </form>

        {contatos.map(
          (
            c,
            index // precisa ser parentesis
          ) => (
            <li key={index} className="app-li">
              <p>
                Nome: {c.nome}, {c.telefone}{" "}
              </p>
            </li>
          )
        )}
      </header>
    </div>
  );
}

export default App;
