import styled from 'styled-components';
import IssueItem from 'components/IssueItem';
import ListContainer from 'components/common/ListContainer';

function IssueList() {
  // TODO: IssueItems 없을 때 처리 ^0^
  return (
    <Main>
      <ListContainer headerItem={<div>헤더</div>}>
        <IssueItem number={1} title="비비바보" author="비비" milestone="마일스톤" />
        <IssueItem number={2} title="비비바보" author="비비" milestone="마일스톤" />
        <IssueItem number={3} title="비비바보" author="비비" milestone="마일스톤" />
      </ListContainer>
    </Main>
  );
}

const Main = styled.main``;

export default IssueList;
