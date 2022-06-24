import styled from 'styled-components';
import TextButtonLink from 'components/common/Button/TextButtonLink';
import { COLOR } from 'styles/color';
import { ellipsisStyle } from 'styles/commonStyles';
import Icon from '../common/Icon';
import Text from '../common/Text';

function LabelItem({ id, label, desc }: LabelItemProps) {
  return (
    <Wrapper>
      <div>{label}</div>
      <LabelDesc color={COLOR.GREY[500]}>{desc}</LabelDesc>
      <ButtonArea>
        <TextButtonLink to={`/${id}`} color={COLOR.GREY[500]}>
          <Icon icon="edit" stroke={COLOR.GREY[500]} />
          편집
        </TextButtonLink>
        <TextButtonLink to={`/${id}`} color={COLOR.RED[200]}>
          <Icon icon="trash" stroke={COLOR.RED[200]} />
          삭제
        </TextButtonLink>
      </ButtonArea>
    </Wrapper>
  );
}

export default LabelItem;

export type LabelItemProps = {
  id: string;
  label: JSX.Element;
  desc: string;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  align-items: center;
`;

const LabelDesc = styled(Text)`
  ${ellipsisStyle};
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;
