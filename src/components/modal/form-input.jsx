import { useNavigate } from 'react-router-dom';

const RentalForm = ({ onClose }) => {
	const navigate = useNavigate();

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center  w-full h-full bg-white p-4 form__input'>
			<button onClick={onClose} className='absolute top-4 right-4 text-2xl font-bold text-gray-700'>
				&times;
			</button>
			<div className='bg-white rounded-lg p-8 relative w-full sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%] overflow-auto'>
				<h2 className='text-xl font-bold mb-4'>Аренда костюма “Дарт Вейдер”</h2>
				<p className='mb-4'>
					Пожалуйста, укажите ваши контактные данные, чтобы мы забронировали костюм на ваше имя
				</p>
				<form>
					<div className='mb-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
							Как вас зовут?
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='name'
							type='text'
							placeholder='Ваше имя'
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phone'>
							Номер телефона
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='phone'
							type='tel'
							placeholder='+7 (977) 325-41-60'
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='days'>
							На сколько дней арендуете?
						</label>
						<select
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='days'
						>
							<option value=''>Выберите количество дней</option>
							<option value='1'>1 день</option>
							<option value='2'>2 дня</option>
							<option value='3'>3 дня</option>
						</select>
					</div>
					<div className='mb-4'>
						<label className='inline-flex items-center'>
							<input type='checkbox' className='form-checkbox text-yellow-500' />
							<span className='ml-2 text-gray-700'>
								Я согласен на обработку моих персональных данных
							</span>
						</label>
					</div>
					<div>
						<button
							type='submit'
							className='w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline hover:bg-yellow-600'
							onClick={() => navigate('/')}
						>
							Оставить заявку
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RentalForm;
