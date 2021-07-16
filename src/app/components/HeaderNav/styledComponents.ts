import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 8px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HeaderLogo = styled.img`
  width: 155px;
  height: auto;
  object-fit: contain;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLinkButton = styled(Link)`
  margin: 0 4px;
  padding: 8px 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: #0F5E74;
  border: 1px solid #0F5E74;
  border-radius: 16px;
  :hover,
  :active{
    background-color: #0F5E74;
    color: #fff;
  }
`;

export const HeaderMenuButton = styled.div`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;