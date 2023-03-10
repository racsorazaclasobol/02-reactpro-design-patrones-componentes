import { useState } from 'react';


export const useProduct = () => {

    const [counter, setCounter] = useState(0);

    const increaseBy = ( valueToIncrease: number ) => {
        setCounter( prev => Math.max( prev + valueToIncrease, 0 ) );

    }
    

    return {
        counter,

        increaseBy,
    }
}