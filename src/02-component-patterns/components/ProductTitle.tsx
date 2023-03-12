import { useContext } from "react";
import { ProductContext } from "./ProductoCard";

export interface TitleProps {
    title?: string;
    className?: string
    style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: TitleProps) => { //{ title: string } simula ser una interfaz

    const { product } = useContext( ProductContext );

    let titleToShow: string; 
    titleToShow = ( !title ) ? product.title : title;

    return (
        <span className={`productDescription ${ className }`}> { titleToShow } </span>
    )
}