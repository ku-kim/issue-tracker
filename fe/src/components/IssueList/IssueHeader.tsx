import styled from 'styled-components';
import TextButton from 'components/common/Button/TextButton';
import { COLOR } from 'styles/color';
import DropdownBtn from '../common/DropdownBtn';
import Icon from '../common/Icon';
import Checkbox from './Checkbox';

function IssueHeader() {
  return (
    <Wrapper>
      <LeftBtns>
        <Checkbox />
        <Buttons>
          <TextButton color={COLOR.GREY[500]}>
            <Icon icon="alertCircle" />
            열린 이슈 (3)
          </TextButton>
          <TextButton color={COLOR.GREY[400]}>
            <Icon icon="archive" />
            닫힌 이슈 (0)
          </TextButton>
        </Buttons>
      </LeftBtns>
      <RightBtns>
        <DropdownBtn name="담당자" startLocation="RIGHT">
          <div>BB</div>
        </DropdownBtn>
        <DropdownBtn name="레이블" startLocation="LEFT">
          <div>나는 모달 ㅋㅋ</div>
        </DropdownBtn>
        <DropdownBtn name="마일스톤" startLocation="RIGHT">
          <div>나는 모달</div>
        </DropdownBtn>
        <DropdownBtn name="작성자" startLocation="RIGHT">
          <div>나는 모달</div>
        </DropdownBtn>
      </RightBtns>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: visible;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  gap: 24px;
`;

const LeftBtns = styled.div`
  display: flex;
`;

const RightBtns = styled.div`
  display: flex;
  gap: 26px;
`;

export default IssueHeader;
