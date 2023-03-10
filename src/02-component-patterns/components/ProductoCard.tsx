import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/productsInterfaces';

import '../styles/styles.css';

export const ProductContext = createContext({  } as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {
    
    const { counter, increaseBy } = useProduct();    

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className='productCard'>

                {
                    children
                }

            </div>
        </Provider>
    )
}