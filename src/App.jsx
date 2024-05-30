import { Route, Routes } from 'react-router-dom';
import { Detail, Main } from './components';

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/detail/:id' element={<Detail />} />
			</Routes>
		</div>
	);
};

export default App;
