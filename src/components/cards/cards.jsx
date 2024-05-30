import { useState } from 'react';
import { products } from '../../constants/product';
import Modal from '../modal/modal';

const Cards = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const handleOpenModal = product => {
		setSelectedProduct(product);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		setSelectedProduct(null);
	};

	return (
		<div className='mt-20'>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-20'>
						<h1 className='md:text-4xl sm:text-3xl text-2xl font-medium title-font text-gray-900'>
							Костюмы в наличии
						</h1>
					</div>
					<div className='flex justify-center items-center flex-wrap -m-4'>
						{products.map(item => (
							<div
								className='p-4 rounded-xl bg-white mt-4 mx-1 flex-shrink-0 flex-grow-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'
								key={item.id}
							>
								<div className='h-full flex flex-col items-center text-center'>
									<img
										alt='team'
										className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
										src={item.img}
									/>
									<div className='w-full'>
										<h2 className='title-font font-medium text-lg text-gray-900'>{item.name}</h2>
										<h3 className='text-gray-500 mb-3'>Размеры: {item.size}</h3>
										<p className='mb-4 font-semibold'>{item.price} ₽/день</p>
										<button
											className='mt-5 w-full bg-[#FFCA33] p-2 rounded-md'
											onClick={() => handleOpenModal(item)}
										>
											Быстрый просмотр
										</button>
										<p className='mt-2'>{item.piece}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{isModalOpen && <Modal product={selectedProduct} onClose={handleCloseModal} />}
		</div>
	);
};

export default Cards;
