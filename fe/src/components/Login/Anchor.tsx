import styled from 'styled-components';
import Text from 'components/common/Text';
import { COLOR } from 'styles/color';
import { flexCenterStyle } from 'styles/commonStyles';
import FONT from 'styles/font';

function Anchor({ name, href }: AnchorProps) {
  return (
    <A href={href}>
      <Text size={FONT.SIZE.MEDIUM} weight={FONT.WEIGHT.BOLD} color={COLOR.WHITE}>
        {name}
      </Text>
    </A>
  );
}

const A = styled.a`
  width: 340px;
  height: 64px;
  background: ${COLOR.BLACK};
  border-radius: 20px;
  padding: 16px 24px;
  ${flexCenterStyle}
`;

export default Anchor;

type AnchorProps = {
  name: string;
  href: string;
};
