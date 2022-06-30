import styled from 'styled-components';
import TextButtonLink from 'components/common/Button/TextButtonLink';
import Label from 'components/common/Label';
import { COLOR } from 'styles/color';
import { ellipsisStyle } from 'styles/commonStyles';
import Icon from '../common/Icon';
import Text from '../common/Text';

function LabelItem({ data: { textColor, backgroundColor, title, description } }: LabelItemProps) {
  return (
    <Wrapper>
      <div>
        <Label color={textColor} backgroundColor={backgroundColor}>
          {title}
        </Label>
      </div>
      <LabelDesc color={COLOR.GREY[500]}>{description}</LabelDesc>
      <ButtonArea>
        <TextButtonLink to="/" color={COLOR.GREY[500]}>
          <Icon icon="edit" stroke={COLOR.GREY[500]} />
          편집
        </TextButtonLink>
        <TextButtonLink to="/" color={COLOR.RED[200]}>
          <Icon icon="trash" stroke={COLOR.RED[200]} />
          삭제
        </TextButtonLink>
      </ButtonArea>
    </Wrapper>
  );
}

export default LabelItem;

export type LabelDataType = {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
};

export type LabelItemProps = {
  data: LabelDataType;
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
