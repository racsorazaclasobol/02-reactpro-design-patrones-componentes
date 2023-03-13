import { useState } from "react";
import { products } from "../data/products";

import { Product, ProductInCart } from "../interfaces/productsInterfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({  });

	const onProductCountChange = ( { counter, product }: { counter: number, product: Product } ) => {

		setShoppingCart( oldShoppingCart => {
			
			if( counter === 0 ) {
				//Otra manera de hacerlo por desestructuracion // const { [product.id].cartToDelete, ...restOfShoppingCart } // return { ...restOfShoppingCart }
				delete oldShoppingCart[ product.id ];								
				return { ...oldShoppingCart };
			}
			
			return {
				...oldShoppingCart,
				[ product.id ]: { ...product, counter }
			}
		})
	}


    return {
        shoppingCart,

        onProductCountChange,
    }
}