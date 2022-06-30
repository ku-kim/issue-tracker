import styled, { css } from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';
import ButtonLink from './Button/ButtonLink';
import Icon from './Icon';

function Tabs({ activeItem = null, labelCount, milestoneCount }: TabsProps) {
  return (
    <Wrapper>
      <TabItem to="/labelList" active={activeItem === 'LABEL'}>
        <Icon icon="tag" stroke="inherit" /> 레이블 <TabItemCount>({labelCount})</TabItemCount>
      </TabItem>
      <TabItem to="/milestoneList" active={activeItem === 'MILESTONE'}>
        <Icon icon="milestone" stroke="transparent" fill="inherit" /> 마일스톤
        <TabItemCount>({milestoneCount})</TabItemCount>
      </TabItem>
    </Wrapper>
  );
}

function TabItem({ children, active, to }: TabItemProps) {
  return (
    <TabItemButton
      template="MEDIUM_TEXT"
      backgroundColor={tabsButtonBackGroundColors}
      width="160px"
      height="40px"
      to={to}
      active={active}
    >
      {children}
    </TabItemButton>
  );
}

export default Tabs;

export type ActiveItemType = 'LABEL' | 'MILESTONE' | null;

interface TabItemProps {
  children: React.ReactNode;
  active: boolean;
  to: string;
}

interface TabsProps {
  activeItem?: ActiveItemType;
  milestoneCount: number;
  labelCount: number;
}

const tabsButtonBackGroundColors = { initial: 'transparent', hover: COLOR.GREY[200] };

const Wrapper = styled.div`
  height: 40px;
  background-color: ${COLOR.GREY[100]};
  border-radius: 11px;
  border: 1px solid ${COLOR.GREY[300]};
  display: flex;
  overflow: hidden;

  .count {
    font-weight: ${FONT.WEIGHT.REGULAR};
  }
`;

const TabItemButton = styled(ButtonLink).withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})<{ active: boolean }>`
  stroke: ${COLOR.GREY[500]};
  fill: ${COLOR.GREY[500]};

  &:not(:first-child) {
    border-left: 1px solid ${COLOR.GREY[300]};
  }

  &:hover {
    stroke: ${COLOR.GREY[600]};
    fill: ${COLOR.GREY[600]};
    color: ${COLOR.GREY[600]};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${COLOR.GREY[300]};
      color: ${COLOR.GREY[600]};
      fill: ${COLOR.GREY[600]};
      stroke: ${COLOR.GREY[600]};
    `};
`;

const TabItemCount = styled.span`
  font-weight: ${FONT.WEIGHT.REGULAR};
`;
