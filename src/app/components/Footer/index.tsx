import { FooterWrapper } from './styledComponents';

export function Footer() {
	const storeName = '研光堂';
	const year = new Date().getFullYear()
	return(
		<FooterWrapper>
			<p className='copyright'>{storeName} © {year}</p>
		</FooterWrapper>
	)
}