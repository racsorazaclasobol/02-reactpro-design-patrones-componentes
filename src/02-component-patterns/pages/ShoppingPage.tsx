import { ProductButton, ProductImage, ProductCard, ProductTitle } from '../components/';

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
				<ProductCard product={ product } >

					<ProductCard.Image img='' />
					<ProductCard.Title title='' />
					<ProductCard.Button />

				</ProductCard>
				
				{/* Componentes Anidados */}
				<ProductCard product={ product } >

					<ProductImage />
					<ProductTitle />
					<ProductButton />

				</ProductCard>
			</div>
		</div>
    )
}

export default ShoppingPage;
