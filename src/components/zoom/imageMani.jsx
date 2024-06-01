import { useState } from 'react';

const ImageMani = ({ img }) => {
	const [pos, setPos] = useState({ x: 0, y: 0 });
	const [showMagnifier, setShowMagnifier] = useState(false);
	const [cursor, setCursor] = useState({ x: 0, y: 0 });

	const handleMouseHover = e => {
		const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

		const x = ((e.pageX - left) / width) * 100;
		const y = ((e.pageY - top) / height) * 100;
		setPos({ x, y });

		setCursor({ x: e.pageX - left, y: e.pageY - top });
	};

	return (
		<div
			className='img_container'
			onMouseEnter={() => setShowMagnifier(true)}
			onMouseLeave={() => setShowMagnifier(false)}
			onMouseMove={handleMouseHover}
		>
			<img src={img} alt='' className='mani_img' />

			{showMagnifier && (
				<div
					style={{
						position: 'absolute',
						left: `${cursor.x - 100}px`,
						top: `${cursor.y - 100}px`,

						pointerEvents: 'none',
					}}
				>
					<div
						className='mani_image'
						style={{ backgroundImage: `url(${img})`, backgroundPosition: `${pos.x}% ${pos.y}%` }}
					/>
				</div>
			)}
		</div>
	);
};

export default ImageMani;
