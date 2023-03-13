import { useEffect, useRef, useState } from 'react';
import { products } from '../data/products';
import { onChangeArgs, Product } from '../interfaces/productsInterfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    counterValue?: number
}

export const useProduct = ( { onChange, product, counterValue = 0 }: useProductArgs ) => {

    const [counter, setCounter] = useState(0);

    const isControlled = useRef( !!onChange )


    const increaseBy = ( valueToIncrease: number ) => {
        
        const counterIncreased = Math.max( counter + valueToIncrease, 0 )

        setCounter( counterIncreased );

        onChange && onChange({ counter: counterIncreased, product });
    }

    useEffect( () => {
        setCounter( counterValue );
    }, [ counterValue ] );

    return {
        counter,

        increaseBy,
    }
}