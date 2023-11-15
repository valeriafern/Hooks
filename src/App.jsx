import { useReducer, useState, useCallback} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Javier', age: 10 };

export  function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    }); 
  }

  return (
    <>
    <h1>USEREDUCER</h1>
      <input
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Incrementar edad
      </button>
      <p>Hola, {state.name}. Tú tienes {state.age}.</p>
    </>
  );
}






export const ExampleComponent = () => {
 
  const [count, setCount] = useState(0);


  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); 

  return (
    <div>
       <h1>USECALLBACK</h1>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};


