import { useState } from 'react';
import styled from 'styled-components';
import LabelFormField from 'components/LabelList/LabelFormField';
import LabelItem, { LabelDataType } from 'components/LabelList/LabelItem';
import BlankMessage from 'components/common/BlankMessage';
import Error from 'components/common/Error';
import Header from 'components/common/Header';
import ListContainer from 'components/common/ListContainer';
import Loading from 'components/common/Loading';
import SubNav from 'components/common/SubNav';
import Text from 'components/common/Text';
import useFetchFromIssueTracker from 'hooks/useFetchFromIssueTracker';
import { COLOR } from 'styles/color';
import { wrapStyle } from 'styles/commonStyles';
import FONT from 'styles/font';

function LabelList() {
  const [isActiveLabelFormField, setIsActiveLabelFormField] = useState(false);

  const { data, error } = useFetchFromIssueTracker({ url: `api/labels/` });

  if (error) {
    return <Error message="데이터 통신에 실패했습니다." />;
  }

  if (!data) {
    return <Loading />;
  }

  const { labelsCount, openedMilestonesCount, labels } = data;
  const hasData = labels?.length > 0;

  return (
    <Main>
      <Header avatarUrl="null" />
      <SubNav
        location="LABEL"
        labelCount={labelsCount}
        milestoneCount={openedMilestonesCount}
        isActiveFormField={isActiveLabelFormField}
        setIsActiveFormField={setIsActiveLabelFormField}
      />
      {isActiveLabelFormField && <LabelFormField />}

      <ListContainer
        headerItem={
          <Text weight={FONT.WEIGHT.BOLD} color={COLOR.GREY[500]}>
            {labelsCount}개의 레이블
          </Text>
        }
      >
        {(hasData &&
          labels?.map((labelItemData: LabelDataType) => <LabelItem data={labelItemData} />)) || (
          <BlankMessage text="등록된 라벨이 없습니다" />
        )}
      </ListContainer>
    </Main>
  );
}

export default LabelList;

const Main = styled.main`
  ${wrapStyle}
`;
