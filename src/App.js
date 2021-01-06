import React, {useState} from 'react';
import Styled from 'styled-components';

const Body = Styled.body`
  margin: 0px;
  padding: 0px;
  background-color: #0D1117;
  height: 100vh;
  width: 100%;
`

const Card = Styled.div`
  background-color: #f6f6f6;
  width: 85%;
  padding: 20px;
  box-shadow: 0px 0px 3px #333;
`

const Valor = Styled.div`
  margin-top: 30px;
  background-color: grey;
  padding: 10px;
  font-size: 20px;
`

const Input = Styled.input`
  height: 1.3rem;

`

function App() {

  const [valor, setValor] = useState('');
  const [porcentagem, setPorcentagem] = useState(30);

  return (
    <div className="App">
      <Body>
        <Card>
          <h2>Calculadora de Sinal <br></br>de Projeto</h2>
          <p>Qual o valor do projeto?</p>
          <Input type='number' placeholder="Digite o valor" value={valor} onChange={(e)=> setValor(e.target.value)} />
          <p>Qual a porcentagem de sinal?</p>
          <Input type='number' placeholder="Digite a porcentagem" value={porcentagem} onChange={(e)=>setPorcentagem(e.target.value)} />
          {valor > 0 &&
            <>
              <Valor>
                <h4>Valor do Sinal: R${((valor * porcentagem) / 100)}</h4>
                <h4>Valor na Entrega: R${valor - ((valor * porcentagem) / 100)}</h4> 
              </Valor>
            </>
          }
        </Card>
      </Body>
    </div>
  );
}

export default App;
