import styled from 'styled-components';
import FilterBar from 'components/FilterBar';
import IssueItem from 'components/IssueItem';
import BlankMessage from 'components/common/BlankMessage';
import ButtonLink from 'components/common/Button/ButtonLink';
import Header from 'components/common/Header';
import Icon from 'components/common/Icon';
import ListContainer from 'components/common/ListContainer';
import Tabs from 'components/common/Tabs';
import { COLOR } from 'styles/color';
import mainHeaderStyle from 'styles/mainHeaderStyle';

const ISSUES: IssueType[] = [
  { id: '1234', number: 1, title: '비비 천재 1', author: '비비', milestone: '마일스톤 1' },
  { id: '2345', number: 2, title: '비비 천재 2', author: '비비', milestone: '마일스톤 2' },
  { id: '3456', number: 3, title: '비비 천재 3', author: '비비', milestone: '마일스톤 3' },
];

const isEmptyIssue = ISSUES.length === 0;

type IssueType = {
  id: string;
  number: number;
  title: string;
  author: string;
  milestone: string;
};

function IssueList() {
  return (
    <main className="wrap">
      <Header avatarUrl="null" />
      <MainHeader>
        <FilterBar placeholder="Search all Issues" />
        <div className="button-area">
          <Tabs activeItem="LABEL" />
          <ButtonLink
            template="SMALL_STANDARD"
            backgroundColor={{ initial: COLOR.BLUE[200], hover: COLOR.BLUE[300] }}
            to="/"
          >
            <Icon icon="plus" stroke={COLOR.WHITE} /> 이슈작성
          </ButtonLink>
        </div>
      </MainHeader>
      <ListContainer headerItem={<div>헤더</div>}>
        {(!isEmptyIssue &&
          ISSUES.map(({ id, number, title, author, milestone }) => (
            <IssueItem
              key={id}
              number={number}
              title={title}
              author={author}
              milestone={milestone}
            />
          ))) || <BlankMessage text="등록된 이슈가 없습니다" />}
      </ListContainer>
    </main>
  );
}

const MainHeader = styled.div`
  ${mainHeaderStyle};

  .button-area {
    display: flex;

    & > :not(:last-child) {
      margin-right: 16px;
    }
  }
`;

export default IssueList;
