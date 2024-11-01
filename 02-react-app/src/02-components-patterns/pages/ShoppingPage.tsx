
import { ProductButtons, ProductImage, ProductTitle } from "../components";
import ProductCard from "../components";
import { products } from "../data/products";
// import { useShoppingCart } from "../hooks/useShoppingCart"; Compound Components
import "../styles/custom-styles.css";

const product = products[0]

export const ShoppingPage = () => {
  
  // const { shoppingCart,onProductCountChange } = useShoppingCart(); Compound Components

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

        {/* Compound Components */}
      {/* <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}> */}
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            initialValues={{
              count: 4,
              maxCount: 10
            }}
          >
            { 
              ({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
                <>
                    <ProductImage
                  className="custom-image"
                  style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
                  />
                  <ProductTitle className="text-bold" />
                  <ProductButtons className="custom-buttons" />

                  <button onClick={reset} >Reset</button>
                  <button onClick={ () => increaseBy(-2) }> -2 </button>
                  {/* Si no se llega al isMaxCount, ocultar */}
                  {
                    !isMaxCountReached && (
                      <button onClick={() => increaseBy(+2)}> +2 </button>
                    )
                  }
                  <span>{ count } - { maxCount }</span>
                </>
              )
            }
            
          </ProductCard>


          {/* Compound components */}
        {/* {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={(e) => onProductCountChange(e)}
            value={ shoppingCart[product.id]?.count || 0 }
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))} 
        </div> */}




        {/* Compound components */}
      {/* <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            key={key}
            value={product.count}
            onChange={(e) => onProductCountChange(e)}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div> */}
    </div>
  );
};
