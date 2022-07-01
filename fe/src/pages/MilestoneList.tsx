import { useState } from 'react';
import styled from 'styled-components';
import MilestoneFormField from 'components/MilestoneList/MilestoneFormField';
import MilestoneHeader from 'components/MilestoneList/MilestoneHeader';
import MilestoneItem from 'components/MilestoneList/MilestoneItem';
import Header from 'components/common/Header';
import ListContainer from 'components/common/ListContainer';
import Loading from 'components/common/Loading';
import SubNav from 'components/common/SubNav';
import useFetchFromIssueTracker from 'hooks/useFetchFromIssueTracker';
import { wrapStyle } from 'styles/commonStyles';

function MilestoneList() {
  const [isActiveMilestoneFormField, setIsActiveMilestoneFormField] = useState(false);
  const fetchedMilestoneData = useFetchFromIssueTracker({
    url: 'api/milestones?milestoneStatus=open',
  });

  if (!fetchedMilestoneData.data) {
    return <Loading />;
  }

  const { milestones } = fetchedMilestoneData.data;

  return (
    <Main>
      <Header avatarUrl="null" />
      <SubNav
        location="MILESTONE"
        isActiveFormField={isActiveMilestoneFormField}
        setIsActiveFormField={setIsActiveMilestoneFormField}
      />
      {isActiveMilestoneFormField && <MilestoneFormField />}
      <ListContainer headerItem={<MilestoneHeader />}>
        {milestones.map(({ id, title, description, dueDate }: any) => (
          <MilestoneItem
            id={id}
            key={id}
            title={title}
            desc={description}
            dueDate={dueDate}
            totalCount={5}
            doneCount={2}
          />
        ))}
      </ListContainer>
    </Main>
  );
}

export default MilestoneList;

const Main = styled.main`
  ${wrapStyle};
`;
