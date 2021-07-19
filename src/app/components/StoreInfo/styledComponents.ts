import styled from "styled-components";

export const StoreInfoWrapper = styled.section`
  display: flex;
  padding: 16px 60px;
`;

export const StoreMap = styled.iframe`
  width: 450px;
  height: 300px;
  border: none;
  margin-right: 60px;
`;

export const StoreConnectWrapper = styled.div`
	color: #333;
	font-size: 1.1rem;
`;

export const ConnectTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 500;
  padding-bottom: 8px;
`;

export const Connect = styled.p`
  padding-bottom: 8px;
`;

export const ConnectLink = styled.a`
  display: inline-block;
  margin-left: 8px;
  text-decoration: none;
  color: #005D74;
  cursor: pointer;
`;

export const OpenListWrapper = styled.div`
	padding-top: 16px;
`;

interface OpenItemWrapperProps {
	isOpen: boolean;
}

export const OpenItemWrapper = styled.div<OpenItemWrapperProps>`
	line-height: 1.3rem;
	padding-bottom: 8px;
	opacity: ${props => props.isOpen ? '1': '0.5'};
	:last-child {
		padding-bottom: 0;
	}
`;

export const OpenItemDate = styled.span`
	display: inline-block;
	width: 125px;
`;

export const OpenItemTime = styled.span<OpenItemWrapperProps>`
	display: inline-block;
	margin-left: 16px;
	color: ${props => props.isOpen ? '#228B22': '#333'}
`;
