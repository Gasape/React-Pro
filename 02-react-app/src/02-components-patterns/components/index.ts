import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardPropsHOC } from "../interfaces/ProductInterface";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardPropsHOC = Object.assign(ProductCardHOC, { 
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons, 
})

export default ProductCard;
