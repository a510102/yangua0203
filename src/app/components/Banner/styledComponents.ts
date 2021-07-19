import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  position: relative;
`;

interface BannerImageProps {
  bg?: string;
}

export const BannerImage = styled.div<BannerImageProps>`
  width: 100%;
  min-width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: ${props => props.bg || 'red'};
  transition: all .3s ease-in;
`;

export const BannerBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateY(-50%);
  display: flex;
`;

interface BarButtonPorps {
  isActive?: boolean;
}

export const BarButton = styled.div<BarButtonPorps>`
  width: 10px;
  height: 10px;
  margin: 0 4px;
  background: #fff;
  border-radius: 50%;
  opacity: ${props => props.isActive ? '1' : '0.7'};
  cursor: ${props => props.isActive ? 'default' : 'pointer'};
`;

