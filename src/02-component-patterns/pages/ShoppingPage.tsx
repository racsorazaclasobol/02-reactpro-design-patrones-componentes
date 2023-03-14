import { ProductButton, ProductImage, ProductCard, ProductTitle } from '../components/';

import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {


    return (
		<div>
			<h1>Shpping Store</h1>
			<hr />

			<ProductCard key={ product.id } product={ product } initialValues={{ counter: 4, maxCounter: 10 }} className="bg-dark text-white" >

				{
					({ counter, maxCounter, isMaxCounterReached, reset, increaseBy }) => (
						<>
							<ProductImage className="custom-image" />
							<ProductTitle className="text-bold" />
							<ProductButton className="custom-buttons" />

							<button onClick={ reset } > Reset </button>
							<button onClick={ () => increaseBy( -2 ) } > -2 </button>
							{
								( !isMaxCounterReached && <button onClick={ () => increaseBy( 2 ) } > +2 </button> )
							}
							<span> { counter } - { maxCounter }</span>
						</>
					)
				}

			</ProductCard>

		</div>
    )
}

export default ShoppingPage;
