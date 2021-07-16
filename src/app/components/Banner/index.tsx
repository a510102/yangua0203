import { useState, useEffect } from 'react';
import { BannerWrapper, BannerImage, BannerBar, BarButton } from './styledComponents';

export function Banner() {
  const [currentBanner, setCurrentBanner] = useState(1);
  const [isClick, setIsClick] = useState(false);
  useEffect(() => {
    if (isClick) {
      setTimeout(() => {
        setIsClick(false);
      }, 500)
    } else {
      setTimeout(() => setCurrentBanner(currentBanner !== 1 ? 1 : currentBanner +1), 3000);
    }
  }, [isClick, currentBanner])

  const handleChangeBanner = (bannerIndex: number) => {
    if (!isClick) setIsClick(true);
    setCurrentBanner(bannerIndex)
  }

  return (
    <BannerWrapper>
      {
        currentBanner === 1 ? (
          <BannerImage>banner 1</BannerImage>
        ) : (
          <BannerImage bg='black'>banner 2</BannerImage>
        )
      }
      <BannerBar>
        <BarButton isActive={currentBanner === 1} onClick={() => handleChangeBanner(1)} />
        <BarButton isActive={currentBanner === 2} onClick={() => handleChangeBanner(2)} />
      </BannerBar>
    </BannerWrapper>
  )
}