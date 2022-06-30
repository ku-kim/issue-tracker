import styled, { css } from 'styled-components';
import TextButtonLink from 'components/common/Button/TextButtonLink';
import Icon from 'components/common/Icon';
import LinearGraph from 'components/common/LinearGraph';
import Text from 'components/common/Text';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';

function MilestoneItem({ title, dueDate, desc, totalCount, doneCount, id }: MilestoneItemProps) {
  return (
    <Wrapper>
      <ItemWrap>
        <Item>
          <IconText>
            <Icon icon="milestone" stroke="inherit" fill={COLOR.BLUE[200]} />
            <Text weight={FONT.WEIGHT.BOLD}>{title}</Text>
          </IconText>
          <IconText>
            <Icon icon="calendar" stroke={COLOR.GREY[500]} />
            <Text color={COLOR.GREY[500]}>{dueDate}</Text>
          </IconText>
        </Item>
        <div>
          <Text color={COLOR.GREY[500]}>{desc}</Text>
        </div>
      </ItemWrap>
      <ItemWrap>
        <ButtonArea>
          <TextButtonLink to={`/${id}`} color={COLOR.GREY[500]}>
            <Icon icon="calendar" stroke={COLOR.GREY[500]} />
            닫기
          </TextButtonLink>
          <TextButtonLink to={`/${id}`} color={COLOR.GREY[500]}>
            <Icon icon="edit" stroke={COLOR.GREY[500]} />
            편집
          </TextButtonLink>
          <TextButtonLink to={`/${id}`} color={COLOR.RED[200]}>
            <Icon icon="trash" stroke={COLOR.RED[200]} />
            삭제
          </TextButtonLink>
        </ButtonArea>
        <GraphArea>
          <LinearGraph totalCount={totalCount} doneCount={doneCount} />
          <GraphDesc>
            <GraphDescText>{totalCount ? (doneCount / totalCount) * 100 : 0}%</GraphDescText>
            <div>
              <GraphDescText>
                열린 이슈 {totalCount - doneCount ? totalCount - doneCount : 0}
              </GraphDescText>
              <GraphDescText>닫힌 이슈 {doneCount || 0}</GraphDescText>
            </div>
          </GraphDesc>
        </GraphArea>
      </ItemWrap>
    </Wrapper>
  );
}

function GraphDescText({ children }: { children: React.ReactNode }) {
  return (
    <Text color={COLOR.GREY[500]} size={FONT.SIZE.X_SMALL}>
      {children}
    </Text>
  );
}

export default MilestoneItem;

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;

const itemGap = css`
  gap: 10px;
`;

const ItemWrap = styled.div`
  display: flex;
  padding: 5px 0;
  flex-direction: column;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  ${itemGap};
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 10px;

  a {
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

const GraphArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const GraphDesc = styled.div`
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    > :not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  ${itemGap}
`;

type MilestoneItemProps = {
  title: string;
  dueDate: string;
  desc: string;
  totalCount: number;
  doneCount: number;
  id: string;
};
