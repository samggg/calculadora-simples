import React, { useState } from 'react';
import './styles.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const clean = () => {
    setExpression('');
  };

  const back = () => {
    setExpression(expression.slice(0, -1));
  };

  const insert = (value) => {
    setExpression(expression + value);
  };

  const calcular = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Erro');
    }
  };

  return (
    <div className="fundo">
      <div className="calculadora">
        <p id="resultado">{expression}</p>
        <table>
          <tbody>
            <tr>
              <td><button className="botao" onClick={clean}>C</button></td>
              <td><button className="botao" onClick={back}>&lt;</button></td>
              <td><button className="botao" onClick={() => insert('/')}>/</button></td>
              <td><button className="botao" onClick={() => insert('*')}>x</button></td>
            </tr>
            <tr>
              <td><button className="botao" onClick={() => insert('7')}>7</button></td>
              <td><button className="botao" onClick={() => insert('8')}>8</button></td>
              <td><button className="botao" onClick={() => insert('9')}>9</button></td>
              <td><button className="botao" onClick={() => insert('-')}>-</button></td>
            </tr>
            <tr>
              <td><button className="botao" onClick={() => insert('6')}>6</button></td>
              <td><button className="botao" onClick={() => insert('5')}>5</button></td>
              <td><button className="botao" onClick={() => insert('4')}>4</button></td>
              <td><button className="botao" onClick={() => insert('+')}>+</button></td>
            </tr>
            <tr>
              <td><button className="botao" onClick={() => insert('3')}>3</button></td>
              <td><button className="botao" onClick={() => insert('2')}>2</button></td>
              <td><button className="botao" onClick={() => insert('1')}>1</button></td>
              <td rowSpan="2"><button className="botao" style={{ height: '106px' }} onClick={calcular}>=</button></td>
            </tr>
            <tr>
              <td colSpan="2"><button className="botao" style={{ width: '106px' }} onClick={() => insert('0')}>0</button></td>
              <td><button className="botao" onClick={() => insert('.')}>.</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
