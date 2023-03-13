import { createContext, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/productsInterfaces';

import '../styles/styles.css';

export const ProductContext = createContext({  } as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
    product: Product;
    children: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    counterValue?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, counterValue }: ProductCardProps) => {
    
    const { counter, increaseBy } = useProduct({ onChange, product, counterValue });

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`productCard ${ className  }`} style={ style } >

                {
                    children
                }

            </div>
        </Provider>
    )
}