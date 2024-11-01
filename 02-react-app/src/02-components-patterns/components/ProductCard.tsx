import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { createContext, /* ReactElement */ } from 'react';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/ProductInterface';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext 

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[]; Compound Components
  children?: (args: ProductCardHandlers) => JSX.Element
  className?: string;
  style?: React.CSSProperties,
  onChange?: ( args: onChangeArgs) => void,
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {
  const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct({ onChange, product, value, initialValues} );

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={ ` ${ styles.productCard } ${ className } `} style={style}>
        { 
          children && children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          }) 
        }
        {/* <ProductImage img={ product.img }/>
            
            <ProductTitle title={ product.title } />

            <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
      </div>
    </Provider>
  );
};