import styled from "styled-components";

export function Brands() {
	const brandsList = ['brand1', 'brand2', 'brand3', 'brand4'];
	return (
		<BrandList>
			{
				brandsList.map(brand => (
					<Brand>{brand}</Brand>
				))
			}
		</BrandList>
	)

};

const BrandList = styled.div`
	width: 100%;
	max-width: 900px;
	margin: 24px auto 16px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const Brand = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 200px;
	font-size: 1.1rem;
	font-weight: 500;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
	transition: all 0.3s ease-in;
	:hover {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
		transform: scale(1.1);
	}
`;