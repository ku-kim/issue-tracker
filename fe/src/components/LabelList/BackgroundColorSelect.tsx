import styled from 'styled-components';
import Icon from 'components/common/Icon';
import Text from 'components/common/Text';
import { LABEL_COLORS } from 'styles/color';

function BackgroundColorSelect({ color, setColor }: BackgroundColorSelectProps) {
  return (
    <>
      <ColorHex>{color}</ColorHex>
      <RefreshButton type="button" onClick={() => setColor(LABEL_COLORS[5])}>
        <Icon icon="refresh" />
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
