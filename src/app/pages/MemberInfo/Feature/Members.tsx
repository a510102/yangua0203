import styled from "styled-components";

export function Members() {
  const memberList = [
    {
      name: "陳偉進",
      education: "中山醫藥大學視光學系",
      license: "國家高等考試合格驗光師",
    },
  ];

  return (
    <MemberWrapper>
      {memberList.map((member) => (
				<Member>
				<MemberPic />
        <MemberInfoList>
          <MemberInfo>姓名 : {member.name}</MemberInfo>
          <MemberInfo>學歷 : {member.education}</MemberInfo>
          <MemberInfo>執照 : {member.license}</MemberInfo>
        </MemberInfoList>
				</Member>
      ))}
    </MemberWrapper>
  );
}

const MemberWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Member = styled.div`
	display: flex;
`;

const MemberPic = styled.div`
  width: 300px;
  height: 300px;
  background: darkblue;
	margin-right: 24px;
`;

const MemberInfoList = styled.ul`
  padding: 8px 12px;
`;

const MemberInfo = styled.li`
  line-height: 1.3rem;
`;
