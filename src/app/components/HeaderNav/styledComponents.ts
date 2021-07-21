import styled from "styled-components";
import { Link } from "react-router-dom";
import { button } from '../../../styles/variables';

const { default: defaultButton, hover } = button;

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 8px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HeaderTitle = styled.h1`
  position: relative;
  height: 62px;
  width: 155px;
  text-align: center;
  cursor: pointer;
`;

export const HeaderLogo = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  object-fit: contain;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
`;

interface HeaderLinkButtonProps {
  $isActive?: boolean;
}

export const HeaderLinkButton = styled(Link)<HeaderLinkButtonProps>`
  margin: 0 4px;
  padding: 8px 8px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: ${props => props.$isActive? 'default' : 'pointer'};
  color: ${props => props.$isActive? hover.text : defaultButton.text};
  background: ${props => props.$isActive? hover.bg : defaultButton.bg};
  box-shadow: ${props => props.$isActive? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'};
  border: 1px solid ${defaultButton.border};
  border-radius: 8px;
  &:hover,
  &:active{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: ${hover.bg};
    color: ${hover.text};
  }
`;

export const HeaderMenuButton = styled.div`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;