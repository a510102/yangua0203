import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import GlobalStyle from '../styles/globalStyles';
import DefaultStyled from '../styles/defaultStyle';
import { HeaderNav } from './components/HeaderNav';
import Home from './pages/HomePage/loadable';
import About from './pages/About/loadable';
import Connect from './pages/Connect/loadable';
import FAQ from './pages/FAQ/loadable';
import NotFound from './pages/NotFound/loadable';

function App() {
  return (
    <AppWrapper className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <meta name="description" content="台中研光堂眼鏡" />
        <meta name="keywords" content="台中 研光堂 眼鏡" />
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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/connect' component={Connect} />
          <Route path='/faq' component={FAQ} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export default App;
