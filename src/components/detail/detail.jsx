import { useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { products } from '../../constants/product';
import Footer from '../header/footer';
import Header from '../header/header';
import RentalForm from '../modal/form-input';
import MagnifierWrapper from '../zoom/zoom';

const Detail = () => {
	const { id } = useParams();
	const selectedProduct = products.find(product => product.id == id);
	const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
	const [isFormVisible, setIsFormVisible] = useState(false);

	if (!selectedProduct) {
		console.log('Product not found');
		return null;
	}

	const handleThumbnailClick = thumbnailIndex => {
		setSelectedThumbnailIndex(thumbnailIndex);
	};

	const handleFormToggle = () => {
		setIsFormVisible(prevState => !prevState);
	};

	return (
		<>
			<Header />
			<p className='mt-[12vh] container mx-auto text-gray-500 px-4 md:px-0'>
				<Link to={'/'}>Главная </Link>/{' '}
				<span className='text-gray-950 cursor-pointer'>{selectedProduct.name}</span>
			</p>
			<div className=' flex items-center justify-center bg-black bg-opacity-50'>
				<div className='bg-[#EFF5FF] pt-6 p-8 relative w-full h-full max-w-none flex flex-col lg:flex-row overflow-auto'>
					<div className='flex flex-col md:flex-row-reverse w-full'>
						<div className='md:w-full h-auto mb-4 md:mx-4 rounded-lg'>
							<MagnifierWrapper
								key={selectedThumbnailIndex}
								children={selectedProduct.thumbnails[selectedThumbnailIndex]}
								zoomLevel={2}
							/>
						</div>
						<div className='flex md:flex-col flex-wrap space-x-2 md:space-x-0 md:space-y-2 space-y-0'>
							{selectedProduct.thumbnails &&
								selectedProduct.thumbnails.map((thumbnail, index) => (
									<img
										key={index}
										src={thumbnail}
										alt={`Thumbnail ${index + 1}`}
										className={`w-16 h-16 object-cover rounded-lg border border-gray-200 cursor-pointer ${
											selectedThumbnailIndex === index ? 'border-yellow-500' : ''
										}`}
										onClick={() => handleThumbnailClick(index)}
									/>
								))}
						</div>
					</div>

					<div className='lg:ml-8 text-left w-full lg:w-1/2'>
						<h1 className='text-3xl font-bold text-gray-800 mb-4'>{selectedProduct.name}</h1>
						<p className='text-gray-600 mb-4'>{selectedProduct.desc}</p>
						<p className='text-xl font-semibold text-yellow-600 mb-4'>
							{selectedProduct.price} ₽/сутки
						</p>
						<div className='mb-4'>
							<span className='font-semibold'>Комплектация:</span> {selectedProduct.equipment}
						</div>
						<div className='mb-4'>
							<span className='font-semibold'>Размер:</span> {selectedProduct.size}
						</div>
						<button
							className='bg-yellow-500 text-white font-bold py-2 px-4  rounded-lg'
							onClick={handleFormToggle}
						>
							Оставить заявку
						</button>
						<p className='mt-2 text-gray-600'>{selectedProduct.piece}</p>
					</div>
				</div>
			</div>

			<div className='container mx-auto mb-5'>
				<h1 className='font-bold text-4xl px-3'>Описание</h1>
				<p className='mt-5 px-3'>{selectedProduct.ops}</p>
			</div>
			{isFormVisible && <RentalForm onClose={handleFormToggle} />}
			<Footer />
		</>
	);
};

export default Detail;
