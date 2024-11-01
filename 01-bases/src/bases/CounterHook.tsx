import { useCounter } from "../hooks/useCounter";



export const CounterHook = () => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    initialState: 5,
    Maximum_Count: 15,
  });
   
  return (
    <>
      <h1>CounterHook: </h1>
      <h2 ref={elementToAnimate}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
}