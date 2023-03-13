import { useState } from "react";
import { products } from "../data/products";

import { Product, ProductInCart } from "../interfaces/productsInterfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }>({  });

	const onProductCountChange = ( { counter, product }: { counter: number, product: Product } ) => {

		setShoppingCart( oldShoppingCart => {

			const productInCart: ProductInCart = oldShoppingCart[ product.id ] || { ...product, counter: 0  };

			if( Math.max( productInCart.counter + counter, 0 ) > 0 ){
				productInCart.counter += counter;
				return {
					...oldShoppingCart,
					[product.id]: productInCart
				}
			}

			delete oldShoppingCart[ product.id ];								
			return { ...oldShoppingCart };

			
			// if( counter === 0 ) {
			// 	//Otra manera de hacerlo por desestructuracion // const { [product.id].cartToDelete, ...restOfShoppingCart } // return { ...restOfShoppingCart }
			// 	delete oldShoppingCart[ product.id ];								
			// 	return { ...oldShoppingCart };
			// }
			
			// return {
			// 	...oldShoppingCart,
			// 	[ product.id ]: { ...product, counter }
			// }
		})
	}


    return {
        shoppingCart,

        onProductCountChange,
    }
}