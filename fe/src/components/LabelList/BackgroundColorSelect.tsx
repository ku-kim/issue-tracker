import styled from 'styled-components';
import Icon from 'components/common/Icon';
import Text from 'components/common/Text';
import { COLOR, LABEL_COLORS } from 'styles/color';

export const FIRST_INDEX = 0;
const LAST_INDEX = LABEL_COLORS.length - 1;

function getRandomLabelColorsIndex() {
  return Math.floor(Math.random() * (LAST_INDEX - FIRST_INDEX + 1)) + FIRST_INDEX;
}

function BackgroundColorSelect({ color, setColor }: BackgroundColorSelectProps) {
  return (
    <>
      <ColorHex>{color}</ColorHex>
      <RefreshButton
        type="button"
        onClick={() => setColor(LABEL_COLORS[getRandomLabelColorsIndex()])}
      >
        <Icon icon="refresh" stroke={COLOR.GREY[500]} />
      </RefreshButton>
    </>
  );
}

export default BackgroundColorSelect;

interface BackgroundColorSelectProps {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorHex = styled(Text)`
  width: 80px;
  text-align: center;
`;

const RefreshButton = styled.button`
  border: 0;
`;
