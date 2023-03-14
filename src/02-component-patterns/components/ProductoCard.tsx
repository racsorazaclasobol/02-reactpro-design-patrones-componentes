import { createContext, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/productsInterfaces';

import '../styles/styles.css';

export const ProductContext = createContext({  } as ProductContextProps);
const { Provider } = ProductContext;

export interface ProductCardProps {
    // children: ReactElement | ReactElement[];
    className?      : string;
    counterValue?   : number;
    initialValues?  : InitialValues;
    product         : Product;
    style?          : React.CSSProperties;
    
    children        : ( args: ProductCardHandlers ) => JSX.Element;
    onChange?       : ( args: onChangeArgs ) => void;
}

export const ProductCard = ({ children, product, className, style, onChange, counterValue, initialValues }: ProductCardProps) => {
    
    const { counter, maxCounter, isMaxCounterReached, increaseBy, reset } = useProduct({ onChange, product, counterValue, initialValues });

    return (
        <Provider value={{ counter, maxCounter, increaseBy, product }}>
            <div className={`productCard ${ className  }`} style={ style } >

                {
                    children({
                        counter,
                        isMaxCounterReached,
                        maxCounter: initialValues?.maxCounter,
                        product,
                        
                        increaseBy,
                        reset
                    })
                }

            </div>
        </Provider>
    )
}