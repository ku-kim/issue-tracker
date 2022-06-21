import styled from 'styled-components';
import { COLOR } from 'styles/color';
import mainHeaderStyle from 'styles/mainHeaderStyle';
import ButtonLink from './common/Button/ButtonLink';
import Icon from './common/Icon';
import Tabs, { ActiveItemType } from './common/Tabs';

function SubNav({ location, linkTo }: SubNavProps) {
  return (
    <MainHeader>
      <Tabs activeItem={location} />
      <ButtonLink
        template="SMALL_STANDARD"
        backgroundColor={{ initial: COLOR.BLUE[200], hover: COLOR.BLUE[300] }}
        to={linkTo}
      >
        <Icon icon="plus" stroke={COLOR.WHITE} /> 추가
      </ButtonLink>
    </MainHeader>
  );
}

export default SubNav;

const MainHeader = styled.div`
  ${mainHeaderStyle}
`;

type SubNavProps = {
  location: ActiveItemType;
  linkTo: string;
};
