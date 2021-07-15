import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import { PageMain } from '../../components/PageMain';
import { PageTitle } from '../../components/PageTitle';

export const About = () => {
	const openList = [
		{
			day: '星期一', 
			time: '11:00–21:00',
			status: 'open',
		},
		{
			day: '星期二    ', 
			time: '11:00–21:00',
			status: 'open',
		},
		{
			day: '星期三', 
			time: '休息',
			status: 'close',
		},
		{
			day: '星期四', 
			time: '11:00–21:00',
			status: 'open',
		},
		{
			day: '星期五', 
			time: '11:00–21:00',
			status: 'open',
		},
		{
			day: '星期六 (勞動節)', 
			time: '10:00–21:00',
			status: 'open',
		},
		{
			day: '星期日', 
			time: '10:00–21:00',
			status: 'open',
		}
	];
	return (
		<>
		<Helmet>
			<title>台中研光堂眼鏡 - Connect</title>
		</Helmet>
		<PageMain>
			<PageTitle>研光堂眼鏡/驗光所介紹</PageTitle>
			<AboutContent>
				研光堂眼鏡/驗光所眼鏡行從成立到今日，親切和專業的服務始終是研光堂眼鏡/驗光所眼鏡行引以為傲的地方，每位職員皆有經過專業的在職訓練，使客人從視力檢測到挑選眼鏡都可以感覺到最出色的服務。不管大家喜愛哪個款式的鏡框，在研光堂眼鏡/驗光所眼鏡行都可選擇到，其他像是隱眼或者保養液...，也一應俱全。假使對於產品有搞不清楚的地方或是有任何問題，也隨時都有專業的驗光師能讓顧客詢問。
			</AboutContent>
			<AboutOpenTitle>研光堂眼鏡/驗光所營業時間</AboutOpenTitle>
			<AboutOpenList>
				{
					openList.map(openItem => (
						<AboutOpenItem isOpen={openItem.status === 'open'}>
							<span>{openItem.day}</span>
							<span>{openItem.time}</span>
						</AboutOpenItem>
					))
				}
			</AboutOpenList>
			<AboutOpenTip>詳細時間及國定假日，建議先電洽台中東區研光堂眼鏡/驗光所<AboutOpenTipLink href='tel:+886-4-22130203'>（04-2213-0203）</AboutOpenTipLink>確認。</AboutOpenTip>
		</PageMain>
		</>
	)
}

const AboutContent = styled.p`
	font-size: 0.9rem;
	padding: 8px 0;
	line-height: 1.1rem;
	color: #333;
`;

const AboutOpenTitle = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
	padding: 4px 0;
`;

const AboutOpenList = styled.ul`
	padding: 8px 0;
`;

interface AboutOpenItemProps {
	isOpen: boolean;
} 

const AboutOpenItem = styled.li<AboutOpenItemProps>`
	width: 250px;
	display: flex;
	color: ${props => props.isOpen ? '#333' : '#e0e0e0'};
	justify-content: space-between;
	align-items: center;
	line-height: 1.2rem;
	padding: 8px 0;
	box-shadow: 0 1px 0px 0 rgba(0,0,0,0.1);
`;

const AboutOpenTip = styled.p`
	font-size: 0.8rem;
	color: #333;
`;

const AboutOpenTipLink = styled.a`
	color: #007500;
	text-decoration: none;
`;
