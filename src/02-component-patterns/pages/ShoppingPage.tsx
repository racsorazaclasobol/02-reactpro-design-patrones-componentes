import { ProductButton, ProductImage, ProductCard, ProductTitle } from '../components/';

import '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { useProduct } from '../hooks/useProduct';
import { products } from '../data/products';

export const ShoppingPage = () => {

	const { shoppingCart, onProductCountChange } = useShoppingCart(); 

    return (
		<div>
			<h1>Shpping Store</h1>
			<hr />

			<div style={{ display: 'flex', flexDirection:'row', flexWrap: 'wrap' }}>

				{
					products.map( product => (
						<ProductCard key={ product.id } product={ product } counterValue={ shoppingCart[product.id]?.counter || 0 } onChange={ onProductCountChange } className="bg-dark text-white" >

							<ProductImage className="custom-image" />
							<ProductTitle className="text-bold" />
							<ProductButton className="custom-buttons" />

						</ProductCard>
					))
				}

			</div>
			
			<div className='shopping-cart'>

				{
					Object.entries( shoppingCart ).map( ([ key, product ]) => (
						<ProductCard key={ key } product={ product } counterValue={ product.counter } onChange={ onProductCountChange } className="bg-dark text-white" style={{ width: '100px' }} >

							<ProductImage className="custom-image" />
							<ProductButton className="custom-buttons" />

						</ProductCard>
					))
				}

			</div>

			<div>
				<code>
					{ JSON.stringify( shoppingCart, null, 4 ) }
				</code>
			</div>

		</div>
    )
}

export default ShoppingPage;
