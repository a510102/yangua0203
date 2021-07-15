import { NavLink, HeaderWrapper, NavWrapper, HeaderLogo, LogoLink } from './styled';

export const HeaderNav = () => (
	<HeaderWrapper>
		<NavWrapper>
			<HeaderLogo>
				<LogoLink to='/'>研光堂</LogoLink>
			</HeaderLogo>
			<div>
				<NavLink to='/about'>About me</NavLink>
				<NavLink to='/connect'>Connect me</NavLink>
			</div>
		</NavWrapper>
	</HeaderWrapper>
)