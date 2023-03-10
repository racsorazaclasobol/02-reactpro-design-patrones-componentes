import { useContext } from "react";
import { ProductContext } from "./ProductoCard";

export const ProductButton = () => {
    
    const { increaseBy, counter } = useContext( ProductContext );
    
    return (
        <div  className='buttonsContainer'>

            <button className='buttonMinus' onClick={ () => increaseBy( -1 ) }>
                -
            </button>

            <div className='countLabel'> 
                { counter } 
            </div>

            <button className='buttonAdd' onClick={ () => increaseBy( 1 ) }>
                +
            </button>
            
        </div>
    )
}