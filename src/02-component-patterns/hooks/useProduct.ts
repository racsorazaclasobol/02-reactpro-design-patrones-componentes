import { useEffect, useRef, useState, useCallback } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/productsInterfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    counterValue?: number,
    initialValues?: InitialValues
}

export const useProduct = ( { onChange, product, counterValue = 0, initialValues }: useProductArgs ) => {

    const [counter, setCounter] = useState<number>( initialValues?.counter || counterValue );
    const maxCounter = initialValues?.maxCounter;

    const isComponentMounted = useRef(false);

    const increaseBy = ( valueToIncrease: number ) => {

        let counterIncreased = Math.max( counter + valueToIncrease, 0 );
        
        if( initialValues?.maxCounter ) counterIncreased = Math.min( counterIncreased, initialValues.maxCounter );

        setCounter( counterIncreased );

        onChange && onChange({ counter: counterIncreased, product });
    }

    const reset = () => {
        setCounter( initialValues?.counter || counterValue )
    }

    useEffect( () => {
        if( !isComponentMounted.current ) return;

        setCounter( counterValue );

    }, [ counterValue ] );

    useEffect( () => {
        isComponentMounted.current = true;

    }, [] );

    return {
        counter,
        isMaxCounterReached: !!initialValues?.counter && initialValues.maxCounter === counter,
        maxCounter,

        increaseBy,
        reset,
    }
}