import { useHistory } from 'react-router-dom';

import {
  HeaderWrapper,
  HeaderLogo,
  HeaderButtons,
  HeaderLinkButton,
  HeaderMenuButton,
  HeaderTitle
} from './styledComponents';
import Logo from '../../../icon/Logo.svg';

export function HeaderNav() {
  const history = useHistory();

  return (
    <HeaderWrapper>
      <HeaderTitle onClick={() => history.push('/')}>
        <HeaderLogo src={Logo} alt='Logo' />
        研光堂
      </HeaderTitle>
      <HeaderButtons>
        <HeaderMenuButton></HeaderMenuButton>
        <HeaderLinkButton to='/'>Button</HeaderLinkButton>
        <HeaderLinkButton to='/'>Button</HeaderLinkButton>
        <HeaderLinkButton to='/'>Button</HeaderLinkButton>
        <HeaderLinkButton to='/'>Button</HeaderLinkButton>
      </HeaderButtons>
    </HeaderWrapper>
  )
}