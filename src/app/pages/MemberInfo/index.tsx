import styled from "styled-components"
import { Members } from "./Feature/Members"

export function MemberInfo() {
	return (
		<section>
			<MemberTitle>驗光師介紹</MemberTitle>
			<Members />
		</section>
	)
}

const MemberTitle = styled.h4`
	font-size: 1.5rem;
	font-weight: 700;
	text-align: center;
	padding: 24px 0;
	color: #005d74;
`;