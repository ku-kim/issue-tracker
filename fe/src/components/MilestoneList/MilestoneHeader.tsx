import styled from 'styled-components';
import TextButton from 'components/common/Button/TextButton';
import Icon from 'components/common/Icon';
import { COLOR } from 'styles/color';

function MilestoneHeader() {
  return (
    <Wrapper>
      <TextButton color={COLOR.GREY[500]}>
        <Icon icon="milestone" stroke="inherit" fill={COLOR.BLACK} />
        열린 마일스톤 (3)
      </TextButton>
      <TextButton color={COLOR.GREY[400]}>
        <Icon icon="archive" stroke={COLOR.GREY[500]} />
        닫힌 마일스톤 (0)
      </TextButton>
    </Wrapper>
  );
}

export default MilestoneHeader;

const Wrapper = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 24px;
  }
`;
