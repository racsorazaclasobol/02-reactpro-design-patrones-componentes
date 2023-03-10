import { useContext } from "react";
import { ProductContext } from "./ProductoCard";

export const ProductTitle = ({ title }: { title?: string }) => { //{ title: string } simula ser una interfaz

    const { product } = useContext( ProductContext );
    let titleToShow: string; 
    titleToShow = ( !title ) ? product.title : title;

    return (
        <span className='productDescription'> { titleToShow } </span>
    )
}