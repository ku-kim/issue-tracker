import styled from 'styled-components';
import { COLOR } from 'styles/color';
import mainHeaderStyle from 'styles/mainHeaderStyle';
import Button from './common/Button/Button';
import Icon from './common/Icon';
import Tabs, { ActiveItemType } from './common/Tabs';

function SubNav({ location }: SubNavProps) {
  return (
    <MainHeader>
      <Tabs activeItem={location} />
      <Button
        template="SMALL_STANDARD"
        backgroundColor={{ initial: COLOR.BLUE[200], hover: COLOR.BLUE[300] }}
        onClick={() => console.log(location)}
      >
        <Icon icon="plus" stroke={COLOR.WHITE} /> 추가
      </Button>
    </MainHeader>
  );
}

export default SubNav;

const MainHeader = styled.div`
  ${mainHeaderStyle}
`;

type SubNavProps = {
  location: ActiveItemType;
};
