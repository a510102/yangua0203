import { Helmet } from 'react-helmet-async';

import Banner from './Feature/Banner';
import { PageMain } from '../../components/PageMain';
import { PageTitle } from '../../components/PageTitle';
import { Footer } from './Feature/Footer';

export function Home() {
	return (
		<>
			<Helmet>
				<title>台中研光堂眼鏡 - HomePage</title>
			</Helmet>
			<Banner />
			<PageMain>
				<PageTitle>Home Page</PageTitle>
				<p>Content...</p>
			</PageMain>
			<Footer />
		</>
	)
}