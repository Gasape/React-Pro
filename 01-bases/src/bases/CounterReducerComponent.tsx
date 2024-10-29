import { useReducer } from "react"


type InitialCounterState = {
  counter: number,
  previous: number,
  changes: number,
}

const initialState: InitialCounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

type CounterAction = 
| { type: 'increment' | 'reset' } 
| { type: 'increaseBy', payload: number }

const counterReducer = ( state: InitialCounterState, action : CounterAction ): InitialCounterState => {
  switch (action.type) {
    case 'increment':
      return { 
        ...state,
        counter: state.counter + 1,
        previous: state.counter,
        changes: state.changes + 1,
      }
    case 'reset':
      return{
        counter: 0,
        changes: 0,
        previous: 0,
      }
    case 'increaseBy': 
      return {
        ...state,
        counter: state.counter + action.payload,
        previous: state.counter,
        changes: state.changes + 1,
      }
    default:
      return state;
  }
}

export const CounterReducerComponent = () => {

    const [ counterState , dispatch] = useReducer(counterReducer, initialState);

    const handleReset = () => {
      dispatch({ type: "reset" })
    };

    const handleIncrement = () => {
      dispatch({ type: 'increment' });
    };

    const handleincreaseBy = (value: number) => {
      dispatch({ type: 'increaseBy', payload: value });
    };

  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>{JSON.stringify(counterState)}</pre>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={() => handleincreaseBy(5)}>+5</button>
      <button onClick={() => handleincreaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}