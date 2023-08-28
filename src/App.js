import React, { useState } from 'react';
import FormAccount from './Components/FormAccount/FormAccount';
import FormProduct from './Components/FormProduct/FormProduct';
import './App.css';
import { useValidation } from './Components/Hooks/useValidation';
import Validation from './Components/Validation/Validation';

function App() {
  const [isAccEmpty, setIsAccEmpty] = useState(false)
  const [isProdEmpty, setIsProdEmpty] = useState(false)
  const [isEqual, setIsEqual] = useState(true)
  const [validateCPF, setValidateCPF] = useState('')
  const [isCpfValid, setIsCpfValid] = useState(true)

  return (
    <div className="App">
      <h1>Formulários</h1>
      <div id='content'>
        <div id='form-account'>
          <FormAccount setIsAccEmpty={setIsAccEmpty} setIsEqual={setIsEqual}/>
          <Validation>
            <p>{useValidation(isAccEmpty,"empty")}</p>
            <p>{useValidation(isEqual,"equal")}</p>
          </Validation>
        </div>
        <div id='form-product'>
          <FormProduct setIsProdEmpty={setIsProdEmpty} validateCPF={validateCPF} setValidateCPF={setValidateCPF} setIsCpfValid={setIsCpfValid}/>
          <Validation>
            <p>{useValidation(isProdEmpty,"empty")}</p>
            <p>{useValidation(isCpfValid,"cpf")}</p>
          </Validation>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
