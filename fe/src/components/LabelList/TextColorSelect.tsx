import styled from 'styled-components';
import { COLOR } from 'styles/color';

function TextColorSelect({ color, setColor }: TextColorSelectProps) {
  return (
    <Wrapper>
      <Wrapper>
        <RadioButtonLabel htmlFor="dark">
          <RadioButton
            type="radio"
            id="dark"
            name="textColorInput"
            value="DARK"
            onChange={({ target }) => setColor(target.value as TextColorTypes)}
            checked={color === 'DARK'}
          />
          어두운 색
        </RadioButtonLabel>
      </Wrapper>
      <Wrapper>
        <RadioButtonLabel htmlFor="light">
          <RadioButton
            type="radio"
            id="light"
            name="textColorInput"
            value="LIGHT"
            onChange={({ target }) => setColor(target.value as TextColorTypes)}
            checked={color === 'LIGHT'}
          />
          밝은 색
        </RadioButtonLabel>
      </Wrapper>
    </Wrapper>
  );
}

export default TextColorSelect;

export type TextColorTypes = keyof typeof TEXT_COLOR;

export const TEXT_COLOR = {
  LIGHT: COLOR.WHITE,
  DARK: COLOR.BLACK,
};

interface TextColorSelectProps {
  color: TextColorTypes;
  setColor: React.Dispatch<React.SetStateAction<TextColorTypes>>;
}

const Wrapper = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const RadioButtonLabel = styled.label`
  display: flex;
  gap: 9px;
`;

const RadioButton = styled.input`
  width: 13px;
  filter: grayscale(1);
`;
