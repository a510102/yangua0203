import { useHistory, useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();

  return (
    <HeaderWrapper>
      <HeaderTitle onClick={() => history.push('/')}>
        <HeaderLogo src={Logo} alt='Logo' />
        研光堂
      </HeaderTitle>
      <HeaderButtons>
        <HeaderMenuButton></HeaderMenuButton>
        <HeaderLinkButton $isActive={pathname === '/memberinfo'} to='/memberinfo'>Member Info</HeaderLinkButton>
        <HeaderLinkButton $isActive={pathname === '/brand'} to='/brand'>Brand</HeaderLinkButton>
        <HeaderLinkButton to='/'>Button</HeaderLinkButton>
        <HeaderLinkButton to='/'>Button</HeaderLinkButton>
      </HeaderButtons>
    </HeaderWrapper>
  )
}