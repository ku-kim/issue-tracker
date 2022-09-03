import { ReactNode } from 'react';
import styled from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';
import SIZE from 'styles/size';
import Button from './Button/Button';
import Icon from './Icon';
import Text from './Text';

function FormField({
  name,
  children,
  disabled,
}: {
  name: string;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <Wrapper>
      <Text size={FONT.SIZE.LARGE}>{name}</Text>
      <Inputs>{children}</Inputs>
      <BtnWrapper>
        <Button
          template="SMALL_STANDARD"
          backgroundColor={{
            initial: COLOR.BLUE[200],
            hover: COLOR.BLUE[300],
            disabled: COLOR.BLUE[100],
          }}
          disabled={disabled}
        >
          <Icon icon="plus" stroke={COLOR.WHITE} /> 완료
        </Button>
      </BtnWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: ${SIZE.WIDTH}px;
  height: fit-content;
  padding: 32px;
  border: 1px solid #d9dbe9;
  border-radius: 16px;
  margin-bottom: 24px;
`;

const Inputs = styled.div``;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export default FormField;
