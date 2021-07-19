import styled from "styled-components"

export function CustomFeedback() {
	return (
		<CustomFeedbackWrapper>
			<CustomFeedbackTitle>客戶指南</CustomFeedbackTitle>
			<CustomPhotoWrapper>
				{[0,1,2,3].map(item => <CustomPhoto key={item} />)}
			</CustomPhotoWrapper>
		</CustomFeedbackWrapper>
	)
};

const CustomFeedbackWrapper = styled.section`
	width: 100%;
	box-sizing: border-box;
`;

const CustomFeedbackTitle = styled.h4`
	font-size: 1.4rem;
	font-weight: 700;
	color: #005D74;
	margin-top: 24px;
	text-align: center;
`;

const CustomPhotoWrapper = styled.div`
	width: 100%;
	margin:24px 0;
	display: flex;
	justify-content: space-around;
`;

const CustomPhoto = styled.div`
	width: 200px;
	height: 250px;
	background: #005D74;
`;