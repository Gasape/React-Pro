import { useReducer } from "react"
import { InitialCounterState } from "./interfaces/interfaces"
import { counterReducer } from "./state/counterReducer";
import * as CounterActions from "./actions/actions";

const initialState: InitialCounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
}

export const CounterReducerComponent = () => {

    const [ counterState , dispatch] = useReducer(counterReducer, initialState);

    const handleReset = () => {
      dispatch( CounterActions.doReset() );
    };

    const handleIncrement = () => {
      dispatch( CounterActions.doIncrement() );
    };

    const handleincreaseBy = (value: number) => {
      dispatch( CounterActions.doIncreaseBy(value) );
    };

  return (
    <>
      <h1>Counter Reducer Segmentado</h1>
      <pre>{JSON.stringify(counterState)}</pre>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={() => handleincreaseBy(5)}>+5</button>
      <button onClick={() => handleincreaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}