import { useState } from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';
import SIZE from 'styles/size';
import Icon from './Icon';

function DropdownBtn({ name, children, startLocation }: DropdownBtnProps) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Wrapper>
      <Button onClick={handleClickedBtn}>
        {name}
        <Icon
          icon="down"
          width={SIZE.DOWN_BTN.WIDTH}
          height={SIZE.DOWN_BTN.HEIGHT}
          stroke="inherit"
        />
      </Button>
      <Child startLocation={startLocation}>{isClicked && children}</Child>
    </Wrapper>
  );

  function handleClickedBtn() {
    setIsClicked(!isClicked);
  }
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: ${SIZE.DROPDOWN_BTN.HEIGHT}px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 7px;
  width: fit-content;
  border: 0;
  background-color: ${COLOR.WHITE};
  font-size: ${FONT.SIZE.SMALL};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${COLOR.GREY[500]};
  stroke: ${COLOR.GREY[500]};
  &:hover {
    color: ${COLOR.GREY[600]};
    stroke: ${COLOR.GREY[600]};
  }
`;

const Child = styled.div<ChildProps>`
  width: fit-content;
  position: absolute;
  top: 90%;
  right: ${({ startLocation }) => startLocation === 'RIGHT' && 0};
`;

type ChildProps = Pick<DropdownBtnProps, 'startLocation'>;

type DropdownBtnProps = {
  name: string;
  children: React.ReactNode;
  startLocation: 'LEFT' | 'RIGHT';
};

export default DropdownBtn;
