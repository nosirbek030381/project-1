import { useState } from 'react';
import HeroImage from '../../assets/hero.svg';
import Cards from '../cards/cards';
import Footer from '../header/footer';
import Header from '../header/header';
import RentalForm from '../modal/form-input';

const Main = () => {
	const [isFormVisible, setIsFormVisible] = useState(false);

	const handleFormToggle = () => {
		setIsFormVisible(prevState => !prevState);
	};

	return (
		<>
			<Header />
			<div className='min-h-[80vh] bg-white ml-0 lg:ml-[150px] md:rounded-bl-[250px] p-4'>
				<div className='flex flex-col md:flex-row  justify-center items-center space-y-5 lg:space-x-10 lg:space-y-0 relative p-4'>
					<h1 className='text-3xl lg:text-5xl font-extrabold w-full lg:w-[40%] space-y-5 text-center lg:text-left order-2 md:order-1'>
						<span className='text-yellow-500 leading-6 block lg:inline'>Аренда костюмов </span>
						<p>высшего качества по доступной цене</p>

						<button
							className='text-base py-2 px-10 rounded-md bg-[#FFCA33] text-white'
							onClick={handleFormToggle}
						>
							Подобрать костюм
						</button>
					</h1>
					<div className='w-full lg:w-auto order-1 md:order-2'>
						<img src={HeroImage} alt='qwer' className='mx-auto lg:mx-0' />
					</div>
				</div>
			</div>
			{isFormVisible && <RentalForm onClose={handleFormToggle} />}
			<Cards />
			<Footer />
		</>
	);
};

export default Main;
