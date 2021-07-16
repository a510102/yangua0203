import { HeaderWrapper, HeaderLogo, HeaderButtons, HeaderLinkButton, HeaderMenuButton } from './styledComponents';
import Logo from '../../../icon/Logo.svg';
export function HeaderNav() {
  return (
    <HeaderWrapper>
      <HeaderLogo src={Logo} alt='Logo' />
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