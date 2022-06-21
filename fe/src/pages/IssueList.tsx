import IssueItem from 'components/IssueItem';
import BlankMessage from 'components/common/BlankMessage';
import ListContainer from 'components/common/ListContainer';

const ISSUES: IssueType[] = [
  { id: '1234', number: 1, title: '비비 천재 1', author: '비비', milestone: '마일스톤 1' },
  { id: '2345', number: 2, title: '비비 천재 2', author: '비비', milestone: '마일스톤 2' },
  { id: '3456', number: 3, title: '비비 천재 3', author: '비비', milestone: '마일스톤 3' },
];

type IssueType = {
  id: string;
  number: number;
  title: string;
  author: string;
  milestone: string;
};

function IssueList() {
  return (
    <main>
      <ListContainer headerItem={<div>헤더</div>}>
        {ISSUES.length ? (
          ISSUES.map(({ id, number, title, author, milestone }) => (
            <IssueItem
              key={id}
              number={number}
              title={title}
              author={author}
              milestone={milestone}
            />
          ))
        ) : (
          <BlankMessage text="등록된 이슈가 없습니다" />
        )}
      </ListContainer>
    </main>
  );
}

export default IssueList;
