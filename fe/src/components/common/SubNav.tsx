import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/color';
import { mainHeaderStyle } from 'styles/commonStyles';
import Button from './Button/Button';
import Icon from './Icon';
import Tabs, { ActiveItemType } from './Tabs';

function SubNav({ location, isActiveFormField, setIsActiveFormField }: SubNavProps) {
  return (
    <MainHeader>
      <Tabs activeItem={location} />
      <SmallBtn type={isActiveFormField ? 'CLOSE' : 'ADD'} onClick={setIsActiveFormField} />
    </MainHeader>
  );
}

function SmallBtn({ type, onClick: setIsActiveFormField }: SmallBtnProps) {
  const isAddButton = type === 'ADD';

  return (
    <Button
      onClick={() => setIsActiveFormField?.(isAddButton)}
      template="SMALL_STANDARD"
      backgroundColor={{ initial: COLOR.BLUE[200], hover: COLOR.BLUE[300] }}
    >
      <Icon icon={isAddButton ? 'plus' : 'xSquare'} stroke={COLOR.WHITE} />
      {isAddButton ? '추가' : '닫기'}
    </Button>
  );
}

export default SubNav;

const MainHeader = styled.div`
  ${mainHeaderStyle}
`;

type SmallBtnProps = {
  type: string;
  onClick?: Dispatch<SetStateAction<boolean>>;
};

type SubNavProps = {
  location: ActiveItemType;
  isActiveFormField?: boolean;
  setIsActiveFormField?: Dispatch<SetStateAction<boolean>>;
};
