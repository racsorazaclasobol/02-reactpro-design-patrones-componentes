import { ProductCardProps } from "../components/ProductoCard";

export interface Product {
    id: string
    title: string
    img?: string
}

export interface ProductContextProps {
    counter     : number;
    maxCounter? : number;
    product     : Product;
    
    increaseBy  : ( value:number ) => void;
}

// export interface ProductCardHOCProps {
//     ({ children, product }: ProductCardProps): JSX.Element;
//     Title:  ({ title }  : { title?: string} )    => JSX.Element;
//     Image:  ({ img }    : { img?: string }  )    => JSX.Element;
//     Button: (                               )    => JSX.Element;
// }

export interface onChangeArgs {
    product: Product;
    counter: number;
}

export interface ProductInCart extends Product {
	counter: number
}

export interface InitialValues {
    counter?    : number;
    maxCounter? : number;
}

export interface ProductCardHandlers {
    counter             : number;
    isMaxCounterReached : boolean;
    maxCounter?         : number;
    product             : Product;

    increaseBy  : ( value: number ) => void;
    reset       : ( ) => void;
}