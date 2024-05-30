const Header = () => {
	return (
		<div className='flex justify-between container mx-auto h-[10vh] items-center fixed w-full top-0 right-0 left-0 bottom-0 px-3 z-10 bg-white rounded-lg'>
			<h1 className='md:text-4xl text-3xl font-bold text-[#041A3F]'>
				<span className='text-yellow-500'>Super</span>Suit
			</h1>
			<h1 className='md:text-2xl sm:text-lg text-base font-bold'>+375 29 351-27-40</h1>
		</div>
	);
};

export default Header;
