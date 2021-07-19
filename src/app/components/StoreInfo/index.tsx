import {
  StoreConnectWrapper,
  StoreInfoWrapper,
  StoreMap,
  ConnectTitle,
  Connect,
  ConnectLink,
  OpenListWrapper,
  OpenItemWrapper,
  OpenItemDate,
  OpenItemTime
} from './styledComponents';

export function StoreInfo() {

  const openList = [
    {
      date: '星期一',
      time: '11:00 - 21:00',
      isOpen: true,
    },
    {
      date: '星期二',
      time: '11:00 - 21:00',
      isOpen: true,
    },
    {
      date: '星期三',
      time: '休息',
      isOpen: false,
    },
    {
      date: '星期四',
      time: '11:00 - 21:00',
      isOpen: true,
    },
    {
      date: '星期五',
      time: '11:00 - 21:00',
      isOpen: true,
    },{
      date: '星期六 (勞動節)',
      time: '10:00 - 21:00',
      isOpen: true,
    }
    ,{
      date: '星期日',
      time: '10:00 - 21:00',
      isOpen: true,
    }
  ];

  return (
      <StoreInfoWrapper>
        <StoreMap
          title='googlemap'
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d270.60239582848214!2d120.69114403129899!3d24.144455977666333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x39c93e6b00a04ea8!2z56CU5YWJ5aCC55y86Y-hL-mpl-WFieaJgCAtIOWwiOalrSDphY3pj6Eg5aSa54Sm6bue55y86Y-hIOmrmOW6puaVo-WFiSDov5HoppbpgaDoppbphY3pj6HniYcg6KaW5Yqb5qqi5p-lIOi7n-W8j-ehrOW8j-maseW9ouecvOmPoempl-mFjSDmjqjolqYg5aW96KmVIOmpl-WFiSDpm5nnnLzoppbmqZ_og73mqqLmn6Ug5pac6KaW5byx6KaW6KiT57e0IOeJueauiueonOmPoeiZleeQhiDpu4PmlpHpg6jnnLzlupXmlJ3lvbEg6KeS6Iac5rC05pm26auU5qqi5p-l!5e0!3m2!1szh-TW!2stw!4v1626677617556!5m2!1szh-TW!2stw"  loading="lazy"
          ></StoreMap>
          <StoreConnectWrapper>
            <ConnectTitle>研光堂</ConnectTitle>
            <Connect>
              <span>電話:</span>
              <ConnectLink href='tel:+886422130203'>0422130203</ConnectLink>
            </Connect>
            <Connect>
              <span>地址:</span>
              <ConnectLink 
                href='https://maps.google.com/maps?q=401台中市東區富台東街70號' 
                target='_blank'
              >401台中市東區富台東街70號</ConnectLink>
            </Connect>
            <OpenListWrapper>
              {
                openList.map((openItem, index) => (
                  <OpenItemWrapper 
                    key={index}
                    isOpen={openItem.isOpen}
                  >
                    <OpenItemDate>{openItem.date}</OpenItemDate>
                    <OpenItemTime 
                      isOpen={openItem.isOpen}
                    >{openItem.time}</OpenItemTime>
                  </OpenItemWrapper>
                ))
              }
            </OpenListWrapper>
          </StoreConnectWrapper>
      </StoreInfoWrapper>
  )
}
