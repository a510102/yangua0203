import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import GlobalStyle from '../styles/globalStyles';
import DefaultStyled from '../styles/defaultStyle';
import { HeaderNav } from './components/HeaderNav';
import { Banner } from './components/Banner';
import { Map } from './components/Map';
import { Footer } from './components/Footer';
import Home from './pages/Home/Loadable'

function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <meta name="description" content="台中研光堂眼鏡" />
        <meta name="keywords" content="研光堂 眼鏡 台中" />
        <meta name="author" content="Jah" />
        <meta name="copyright" content="Jah" />
        <meta name="distribution" content="台灣台中" />
        <meta http-equiv="Content-Language" content="zh-TW" />
        <title>台中研光堂眼鏡</title>
      </Helmet>
      <GlobalStyle />
      <DefaultStyled />
      <BrowserRouter>
        <HeaderNav />
        <Banner />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
      <Map />
      <Footer />
    </div>
  );
}

export default App;
