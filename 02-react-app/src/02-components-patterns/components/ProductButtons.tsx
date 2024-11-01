import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ( { className, style } : Props) => {

  // TODO: maxCount 
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  // TODO: isMaxReached = useCallBack, dependecias [ counter, maxCount ] returns true if counter === maxCount, false if !count === maxCount
  const isMaxReached = useCallback( () => { 
    return !!maxCount && counter === maxCount 
  }, [counter, maxCount]);

  const isMinReached = useCallback( () => { 
    return counter === 0
  }, [counter]);


  return (
    <div className={`${styles.buttonsContainer} ${className} `} style={ style }>
      <button className={`${styles.buttonMinus} ${isMinReached() ? styles.disabledLeft : '' } `} onClick={() => increaseBy(-1)}>
        {" "}
        -{" "}
      </button>

      <div className={styles.countLabel}> {counter} </div>

      <button className={`${styles.buttonAdd} ${ isMaxReached() ? styles.disabledRight : '' }`} onClick={() => increaseBy(+1)}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};
