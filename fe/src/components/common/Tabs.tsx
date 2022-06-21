import styled from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';
import ButtonLink from './Button/ButtonLink';
import Icon from './Icon';

function Tabs({ activeItem = null }: { activeItem?: ActiveItemType }) {
  return (
    <Wrapper>
      <ButtonLink
        template="MEDIUM_TEXT"
        backgroundColor={tabsButtonBackGroundColors}
        width="160px"
        height="40px"
        className={`tab-item ${activeItem === 'LABEL' ? 'active' : ''}`}
        to="/"
      >
        <Icon icon="tag" stroke="inherit" /> 레이블 <span className="count">(0)</span>
      </ButtonLink>
      <ButtonLink
        template="MEDIUM_TEXT"
        backgroundColor={tabsButtonBackGroundColors}
        width="160px"
        height="40px"
        className={`tab-item ${activeItem === 'MILESTONE' ? 'active' : ''}`}
        to="/"
      >
        <Icon icon="milestone" stroke="transparent" fill="inherit" /> 마일스톤
        <span className="count">(0)</span>
      </ButtonLink>
    </Wrapper>
  );
}

export default Tabs;

export type ActiveItemType = 'LABEL' | 'MILESTONE' | null;

const tabsButtonBackGroundColors = { initial: 'transparent', hover: COLOR.GREY[200] };

const Wrapper = styled.div`
  height: 40px;
  background-color: ${COLOR.GREY[100]};
  border-radius: 11px;
  border: 1px solid ${COLOR.GREY[300]};
  display: flex;
  overflow: hidden;

  .tab-item {
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

    &.active {
      background-color: ${COLOR.GREY[300]};
      color: ${COLOR.GREY[600]};
      fill: ${COLOR.GREY[600]};
      stroke: ${COLOR.GREY[600]};
    }
  }

  .count {
    font-weight: ${FONT.WEIGHT.REGULAR};
  }
`;
