import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import GlobalStyle from '../styles/globalStyles';
import DefaultStyled from '../styles/defaultStyle';
import { HeaderNav } from './components/HeaderNav';
import { Banner } from './components/Banner';
import { StoreInfo } from './components/StoreInfo';
import { Footer } from './components/Footer';
import Home from './pages/Home/Loadable';
import NotFound from './pages/NotFound/Loadable';
import MemberInfo from './pages/MemberInfo/Loadable';
import Brand from './pages/Brand/Loadable';

function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <meta property="og:site_name" content="研光堂" />
        <meta property="og:description" content="研光堂,國家高等考試合格驗光師、中山醫學大學視光團隊 為您解決戴眼鏡時產生的疑難雜症本店備有高階角膜地圖儀、眼底攝影機、高解析度裂隙燈、眼壓機。" />
        <meta property="og:title" content="研光堂" />
        <meta name="description" content="研光堂,國家高等考試合格驗光師、中山醫學大學視光團隊 為您解決戴眼鏡時產生的疑難雜症本店備有高階角膜地圖儀、眼底攝影機、高解析度裂隙燈、眼壓機。" />
        <meta name="author" content="研光堂" />
        <meta name="copyright" content="研光堂" />
        <meta name="distribution" content="台灣台中" />
        <meta http-equiv="Content-Language" content="zh-TW" />
        <title>研光堂</title>
      </Helmet>
      <GlobalStyle />
      <DefaultStyled />
      <BrowserRouter>
        <HeaderNav />
        <Banner />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/memberinfo' component={MemberInfo} />
          <Route path='/brand' component={Brand} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <StoreInfo />
      <Footer />
    </div>
  );
}

export default App;
