import { useContext } from "react";
import { ProductContext } from "./ProductoCard";
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({ img = '' }) => {
    
    const { product } = useContext( ProductContext );
    let imgToShow: string;

    imgToShow = ( img ) ? img : ( ( product.img ) ? product.img : noImage );

    return (
        <img className='productImg' src={ imgToShow } alt='Product Image' />    
    )
}