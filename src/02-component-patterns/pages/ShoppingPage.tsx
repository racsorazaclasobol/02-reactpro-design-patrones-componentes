import { ProductButton, ProductImage, ProductCard, ProductTitle } from '../components/';
import '../styles/custom-styles.css';

const product = {
	id: '1',
	title: 'Coffee Mug - Card',
	img: './coffee-mug.png'
}

export const ShoppingPage = () => {

    return (
		<div>
			<h1>Shpping Store</h1>
			<hr />

			<div style={{ display: 'flex', flexDirection:'row', flexWrap: 'wrap' }}>
				{/*  Compund Component Pattern */}
				<ProductCard product={ product } className="bg-dark text-white"  >

					<ProductCard.Image className='custom-image' />
					<ProductCard.Title className="text-bold text-white" />
					<ProductCard.Button className="custom-buttons" />

				</ProductCard>
				
				{/* Componentes Anidados */}
				<ProductCard product={ product } className="bg-dark text-white" >

					<ProductImage className="custom-image" />
					<ProductTitle className="text-bold" />
					<ProductButton className="custom-buttons" />

				</ProductCard>

				<ProductCard product={ product } style={{ backgroundColor: '#70D1F8' }} >

					<ProductImage />
					<ProductTitle />
					<ProductButton />

				</ProductCard>
			</div>
		</div>
    )
}

export default ShoppingPage;
