import { useState } from 'react';
import styled from 'styled-components';

import icon from '../../../icon/scrolltopIcon.svg';

export function ScrollTop() {
	const [isShowScrollTop, setShowScrollTop] = useState<boolean>(false)

	const handleScrollTop = () => window.scrollTo(0,0);

	window.onscroll = () => {
		if (window.scrollY === 0 && isShowScrollTop ) {
			setShowScrollTop(false);
		} else {
			setShowScrollTop(true);
		}
	}
	return (
		<>
		{isShowScrollTop && 
			<ScrollTopButton onClick={handleScrollTop}>
				<img src={icon} alt='scrollTop' />
			</ScrollTopButton>
		}
		</>
	)
}

const ScrollTopButton = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background: rgba(0, 93, 116, 0.75);
	box-shadow: 1px 2px 2px 2px rgba(0,0,0,0.25);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	position: fixed;
	bottom: 10%;
	right: 6%;
`;
