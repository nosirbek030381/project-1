import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import 'react-medium-image-zoom/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import RentalForm from './form-input';

const Modal = ({ product, onClose }) => {
	const [selectedThumbnail, setSelectedThumbnail] = useState(product?.thumbnails[0]);
	const [isFormVisible, setIsFormVisible] = useState(false);
	const navigate = useNavigate();

	if (!product) return null;

	const handleThumbnailClick = thumbnail => {
		setSelectedThumbnail(thumbnail);
	};

	const handleFormToggle = () => {
		setIsFormVisible(prevState => !prevState);
	};

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
			<div className='bg-white rounded-lg p-8 relative w-full h-full max-w-none flex flex-col lg:flex-row overflow-auto'>
				<button
					onClick={onClose}
					className='absolute top-4 right-4 text-2xl font-bold text-gray-700'
				>
					&times;
				</button>
				<div className='flex flex-col md:flex-row-reverse w-full'>
					<div className='md:w-full h-auto mb-4 md:mx-4 rounded-lg'>
						{/* <Zoom>
							<img
								src={selectedThumbnail}
								alt='Product Image'
								className='w-full h-auto rounded-lg'
							/>
						</Zoom> */}
						<ReactImageMagnify
							{...{
								smallImage: {
									alt: 'Product Image',
									isFluidWidth: true,
									src: selectedThumbnail,
								},
								largeImage: {
									src: selectedThumbnail,
									width: 300,
									height: 300,
								},
								lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
								isHintEnabled: true,
								hintTextMouse: 'Click to Zoom',
								enlargedImagePosition: 'over',
							}}
						/>
					</div>
					<div className='flex md:flex-col flex-wrap space-y-2'>
						{product.thumbnails &&
							product.thumbnails.map((thumbnail, index) => (
								<img
									key={index}
									src={thumbnail}
									alt={`Thumbnail ${index + 1}`}
									className={`w-16 h-16 object-cover rounded-lg border border-gray-200 cursor-pointer ${
										selectedThumbnail === thumbnail ? 'border-yellow-500' : ''
									}`}
									onClick={() => handleThumbnailClick(thumbnail)}
								/>
							))}
					</div>
				</div>

				<div className='lg:ml-8 text-left w-full lg:w-1/2'>
					<h1 className='text-3xl font-bold text-gray-800 mb-4'>{product.name}</h1>
					<p className='text-gray-600 mb-4'>{product.desc}</p>
					<p className='text-xl font-semibold text-yellow-600 mb-4'>{product.price} ₽/сутки</p>
					<div className='mb-4'>
						<span className='font-semibold'>Комплектация:</span> {product.equipment}
					</div>
					<div className='mb-4'>
						<span className='font-semibold'>Размер:</span> {product.size}
					</div>
					<button
						className='bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg'
						onClick={handleFormToggle}
					>
						Оставить заявку
					</button>
					<button
						onClick={() => navigate(`/detail/${product.id}`)}
						className='border text-black mx-2 hover:bg-green-600 hover:text-white md:font-bold xl:mt-0 mt-3 py-2 px-4 rounded-lg'
					>
						Страница сведений
					</button>
					<p className='mt-2 text-gray-600'>{product.piece}</p>
				</div>
			</div>
			{isFormVisible && <RentalForm onClose={handleFormToggle} />}
		</div>
	);
};

export default Modal;
