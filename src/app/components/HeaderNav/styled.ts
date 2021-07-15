import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavLink = styled(Link)`
	font-size: 1.1rem;
	font-weight: 500;
	text-decoration: none;
	color: #007500;
	padding: 2px 4px;
	border: 1px solid #007500;
	border-radius: 8px;
	margin: 0 2px;
	outline: none;
	:hover {
		color: #fff;
		background: #007500;
	}
`;

export const NavLinks = styled.div`
	display: flex;
`

export const HeaderWrapper = styled.header`
	width: 100vw;
	padding: 8px 20px;
	box-sizing: border-box;
`

export const NavWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderLogo = styled.h1`
	font-size: 2rem;
	font-weight: 700;
`;

export const LogoLink = styled(Link)`
	text-decoration: none;
	color: unset;
`;