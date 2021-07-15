import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import { PageMain } from '../../components/PageMain';
import { PageTitle } from '../../components/PageTitle';

export const Connect = () => {

	return (
		<>
		<Helmet>
			<title>台中研光堂眼鏡 - Connect</title>
		</Helmet>
		<PageMain>
			<PageTitle>研光堂眼鏡/驗光所基本資料</PageTitle>
			<ConnectSecondaryTitle>地址:</ConnectSecondaryTitle>
			<ConnectLink 
				href="http://maps.google.com/?q=台中市東 區富台里富台東街70號1樓"
				target="_blank"
				rel="noreferrer"
			>台中市東 區富台里富台東街70號1樓</ConnectLink>
			<ConnectSecondaryTitle>電話:</ConnectSecondaryTitle>
			<ConnectLink href='tel:+886-4-22130203'>04-2213-0203</ConnectLink>
		</PageMain>
		</>
	)
};

const ConnectSecondaryTitle = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
	padding: 8px 0;
`;

const ConnectLink = styled.a`
	color: #007500;
	text-decoration: none;
`;
