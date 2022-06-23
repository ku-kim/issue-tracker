import styled, { css } from 'styled-components';
import ButtonLink from 'components/common/Button/ButtonLink';
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
          <ButtonLink
            template="SMALL_TEXT"
            backgroundColor={{ initial: COLOR.WHITE }}
            fontStyles={{
              fontColor: {
                initial: COLOR.GREY[500],
              },
              fontSize: FONT.SIZE.X_SMALL,
              fontWeight: FONT.WEIGHT.BOLD,
            }}
            to={`/${id}`}
          >
            <Icon icon="calendar" stroke={COLOR.GREY[500]} />
            닫기
          </ButtonLink>
          <ButtonLink
            template="SMALL_TEXT"
            backgroundColor={{ initial: COLOR.WHITE }}
            fontStyles={{
              fontColor: {
                initial: COLOR.GREY[500],
              },
              fontSize: FONT.SIZE.X_SMALL,
              fontWeight: FONT.WEIGHT.BOLD,
            }}
            to={`/${id}`}
          >
            <Icon icon="edit" stroke={COLOR.GREY[500]} />
            편집
          </ButtonLink>
          <ButtonLink
            template="SMALL_TEXT"
            backgroundColor={{ initial: COLOR.WHITE }}
            fontStyles={{
              fontColor: {
                initial: COLOR.RED[200],
              },
              fontSize: FONT.SIZE.X_SMALL,
              fontWeight: FONT.WEIGHT.BOLD,
            }}
            to="/"
          >
            <Icon icon="trash" stroke={COLOR.RED[200]} />
            삭제
          </ButtonLink>
        </ButtonArea>
        <GraphArea>
          <LinearGraph totalCount={totalCount} doneCount={doneCount} />
          <GraphDesc>
            <div>
              <DescText color={COLOR.GREY[500]}>
                {totalCount ? (doneCount / totalCount) * 100 : 0}%
              </DescText>
            </div>
            <div>
              <DescText color={COLOR.GREY[500]}>
                열린 이슈{totalCount - doneCount ? totalCount - doneCount : 0}
              </DescText>
              <DescText color={COLOR.GREY[500]}>닫힌 이슈 {doneCount || 0}</DescText>
            </div>
          </GraphDesc>
        </GraphArea>
      </ItemWrap>
    </Wrapper>
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
  display: flex;
  justify-content: space-between;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  ${itemGap}
`;

const DescText = styled(Text)`
  font-size: ${FONT.SIZE.X_SMALL};

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

type MilestoneItemProps = {
  title: string;
  dueDate: string;
  desc: string;
  totalCount: number;
  doneCount: number;
  id: string;
};
