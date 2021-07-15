import { Helmet } from 'react-helmet-async';

import Banner from './Feature/Banner';
import { HomeMain } from './components/HomeMain';
import { HomeTitle } from './components/HomeTitle';
import { Footer } from './Feature/Footer';

export function Home() {
	return (
		<>
			<Helmet>
				<title>YanGua0203</title>
			</Helmet>
			<Banner />
			<HomeMain>
				<HomeTitle>Home Page</HomeTitle>
				<p>Content...</p>
			</HomeMain>
			<Footer />
		</>
	)
}