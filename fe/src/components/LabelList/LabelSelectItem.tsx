import styled from 'styled-components';
import Text from 'components/common/Text';
import { COLOR } from 'styles/color';
import { flexCenterStyle } from 'styles/commonStyles';
import FONT from 'styles/font';

function LabelSelectItem({ title, children }: LabelSelectItemProps) {
  return (
    <Wrapper>
      <Text color={COLOR.GREY[500]} size={FONT.SIZE.X_SMALL}>
        {title}
      </Text>
      {children}
    </Wrapper>
  );
}

export default LabelSelectItem;

interface LabelSelectItemProps {
  title: '배경 색상' | '텍스트 색상';
  children: React.ReactNode;
}

const Wrapper = styled.div`
  ${flexCenterStyle};
  height: 40px;
  padding: 0 24px;
  background-color: ${COLOR.GREY[200]};
  border-radius: 11px;
  gap: 1rem;
`;
