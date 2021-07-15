import styled from 'styled-components';

import { FooterWrapper } from '../components/FooterWrapper';
import FB from '../../../../icon/facebook.svg';
import IS from '../../../../icon/instagram-logo.svg';

export function Footer() {
	return (
		<FooterWrapper>
			<div>
				<FooterIcon 
					href="https://www.facebook.com/%E7%A0%94%E5%85%89%E5%A0%82%E7%9C%BC%E9%8F%A1-102242735084727/" 
					target="_blank" 
					rel="noreferrer"
				>
					<img width='24' height='24' src={FB} alt="facebook" />
				</FooterIcon>
				<FooterIcon 
					href="https://www.instagram.com/yangua0203/"
					target="_blank"
					rel="noreferrer"
				>
					<img width='24' height='24' src={IS} alt="instagram" />
				</FooterIcon>
			</div>
			<FooterCopyright isCenter>台中研光堂 © {new Date().getFullYear()}</FooterCopyright>
			<FooterCopyright>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></FooterCopyright>
		</FooterWrapper>
	)
}

const FooterIcon = styled.a`
	margin: 0 4px;
`;

interface FooterCopyrightProps {
	isCenter?: boolean;
}

const FooterCopyright = styled.p<FooterCopyrightProps>`
	width: 100%;
	padding: 2px 0;
	text-align:${props=> props.isCenter ? 'center' : 'right'};
`;
