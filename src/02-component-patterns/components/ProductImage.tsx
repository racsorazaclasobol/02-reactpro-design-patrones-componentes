import { useContext } from "react";
import { ProductContext } from "./ProductoCard";
import noImage from '../assets/no-image.jpg'

interface ProductImageProps {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductImage = ( { img, className, style }: ProductImageProps ) => {
    
    const { product } = useContext( ProductContext );
    let imgToShow: string;

    imgToShow = ( img ) ? img : ( ( product.img ) ? product.img : noImage );

    return (
        <img className={ `productImg ${ className }` } src={ imgToShow } alt='Product Image' />    
    )
}