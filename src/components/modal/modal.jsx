import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MagnifierWrapper from '../zoom/zoom';
import RentalForm from './form-input';

const Modal = ({ product, onClose }) => {
	const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
	const [isFormVisible, setIsFormVisible] = useState(false);
	const navigate = useNavigate();

	if (!product) return null;

	const handleThumbnailClick = thumbnailIndex => {
		setSelectedThumbnailIndex(thumbnailIndex);
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
						<MagnifierWrapper
							key={selectedThumbnailIndex}
							children={product.thumbnails[selectedThumbnailIndex]}
							zoomLevel={2}
						/>
					</div>
					<div className='flex md:flex-col flex-wrap space-x-2 md:space-x-0 md:space-y-2 space-y-0'>
						{product.thumbnails &&
							product.thumbnails.map((thumbnail, index) => (
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
