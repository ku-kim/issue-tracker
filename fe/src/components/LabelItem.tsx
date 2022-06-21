import styled from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';
import ButtonLink from './common/Button/ButtonLink';
import Icon from './common/Icon';

function LabelItem({ id, label, desc }: LabelItemProps) {
  return (
    <Wrapper>
      <div className="label-area">{label}</div>
      <div className="desc-area">{desc}</div>
      <div className="button-area">
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
          to={`/${id}`}
        >
          <Icon icon="trash" stroke={COLOR.RED[200]} />
          삭제
        </ButtonLink>
      </div>
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

  .desc-area {
    font-size: ${FONT.SIZE.SMALL};
    color: ${COLOR.GREY[500]};
  }

  .button-area {
    display: flex;
    justify-content: flex-end;
  }
`;
