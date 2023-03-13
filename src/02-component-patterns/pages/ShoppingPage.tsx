import { ProductButton, ProductImage, ProductCard, ProductTitle } from '../components/';

import '../styles/custom-styles.css';
import { products } from '../data/products';

const product = products[0];

export const ShoppingPage = () => {


    return (
		<div>
			<h1>Shpping Store</h1>
			<hr />

			<ProductCard key={ product.id } product={ product } className="bg-dark text-white" >

				<ProductImage className="custom-image" />
				<ProductTitle className="text-bold" />
				<ProductButton className="custom-buttons" />

			</ProductCard>

		</div>
    )
}

export default ShoppingPage;
