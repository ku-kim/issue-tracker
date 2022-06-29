import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/color';
import { mainHeaderStyle } from 'styles/commonStyles';
import Button from './Button/Button';
import Icon from './Icon';
import Tabs, { ActiveItemType } from './Tabs';

function SubNav({
  location,
  isActiveMilestoneFormField,
  setIsActiveMilestoneFormField,
}: SubNavProps) {
  return (
    <MainHeader>
      <Tabs activeItem={location} />
      {isActiveMilestoneFormField ? (
        <SmallBtn type="CLOSE" setIsActiveMilestoneFormField={setIsActiveMilestoneFormField} />
      ) : (
        <SmallBtn type="ADD" setIsActiveMilestoneFormField={setIsActiveMilestoneFormField} />
      )}
    </MainHeader>
  );
}

function SmallBtn({ type, setIsActiveMilestoneFormField }: SmallBtnProps) {
  const isAddButton = type === 'ADD';

  return (
    <Button
      onClick={() => {
        if (setIsActiveMilestoneFormField) {
          setIsActiveMilestoneFormField(isAddButton);
        }
      }}
      template="SMALL_STANDARD"
      backgroundColor={{ initial: COLOR.BLUE[200], hover: COLOR.BLUE[300] }}
    >
      <Icon icon={isAddButton ? 'plus' : 'xSquare'} stroke={COLOR.WHITE} />{' '}
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
  setIsActiveMilestoneFormField?: Dispatch<SetStateAction<boolean>>;
};

type SubNavProps = {
  location: ActiveItemType;
  isActiveMilestoneFormField?: boolean;
  setIsActiveMilestoneFormField?: Dispatch<SetStateAction<boolean>>;
};
