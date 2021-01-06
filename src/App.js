import React, {useState} from 'react';
import Styled from 'styled-components';

const Card = Styled.div`
  background-color: #f6f6f6;
  width: 500px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 0px 3px #333;
`

const Valor = Styled.div`
  background-color: grey;
  padding: 5px;
  font-size: 20px;
`

const Input = Styled.input`
  height: 1.3rem;

`

function App() {

  const [valor, setValor] = useState('');
  const [porcentagem, setPorcentagem] = useState(10);

  return (
    <div className="App">
      <Card>
        <h2>Calculadora de Gorjeta</h2>
        <p>Quanto deu a conta?</p>
        <Input type='number' placeholder="Digite o valor" value={valor} onChange={(e)=> setValor(e.target.value)} />
        <p>Qual a porcentagem da gorjeta?</p>
        <Input type='number' placeholder="Digite a porcentagem" value={porcentagem} onChange={(e)=>setPorcentagem(e.target.value)} />
        {valor > 0 &&
          <>
            <h4>Sub-total: R${valor}</h4> 
            <h4>Gorjeta: R${porcentagem}</h4>
            <Valor>
              <h3>Total: R${(parseFloat(valor) + ((valor * porcentagem) / 100))}</h3>
            </Valor>
          </>
        }
      </Card>
    </div>
  );
}

export default App;
