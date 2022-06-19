import styled from 'styled-components';
import Label from 'components/common/Label';
import { COLOR } from 'styles/color';
import Icon from './common/Icon';

function IssueLabel({ state }: IssueLabelProps) {
  switch (state) {
    case 'open':
      return (
        <Label
          backgroundColor={COLOR.BLUE[100]}
          color={COLOR.BLUE[200]}
          borderColor={COLOR.BLUE[200]}
        >
          <Wrap>
            <Icon icon="alertCircle" stroke={COLOR.BLUE[200]} />
            열린 이슈
          </Wrap>
        </Label>
      );
    case 'close':
      return (
        <Label
          backgroundColor={COLOR.PURPLE[100]}
          color={COLOR.PURPLE[200]}
          borderColor={COLOR.PURPLE[200]}
        >
          <Wrap>
            <Icon icon="archive" stroke={COLOR.PURPLE[200]} />
            닫힌 이슈
          </Wrap>
        </Label>
      );
    default:
      throw new Error(`IssueLabel의 상태가 잘못 선언되었습니다.`);
  }
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

type IssueLabelProps = {
  state: 'open' | 'close';
};

export default IssueLabel;
