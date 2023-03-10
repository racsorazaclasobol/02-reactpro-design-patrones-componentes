import { ProductCard as ProductCardHOC }    from './ProductoCard';
import { ProductButton }    from './ProductButton';
import { ProductImage }     from './ProductImage';
import { ProductTitle }     from './ProductTitle';

export { ProductButton }    from './ProductButton';
export { ProductImage }     from './ProductImage';
export { ProductTitle }     from './ProductTitle';



export const ProductCard = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Button: ProductButton,
} );

export default ProductCard;