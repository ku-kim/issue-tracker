import { useState } from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/color';

const Wrapper = styled.div<{
  size: SizeType;
  isFocused: boolean;
  templateStyle: TemplateStyleType;
}>`
  display: flex;
  width: ${({ size }) => size.width};
  height: ${({ size }) => size.height};
  background-color: ${({ isFocused }) => (isFocused ? COLOR.WHITE : COLOR.GREY[200])};
  border: 1px solid ${({ isFocused }) => (isFocused ? COLOR.BLACK : 'transparent')};

  ${({ templateStyle }) => {
    let borderStyle;
    switch (templateStyle) {
      case 'small':
        borderStyle = css`
          border-radius: 11px;
        `;
        break;
      case 'large':
        borderStyle = css`
          border-radius: 16px;
        `;
        break;
      case 'medium':
        borderStyle = css`
          border-radius: 14px;
        `;
        break;
      default:
        break;
    }
    return borderStyle;
  }};

  .input-label {
    ${({ templateStyle, isFocused }) => {
      let inputLabelStyle = ``;
      switch (templateStyle) {
        case 'small':
          break;
        case 'large':
        case 'medium':
          inputLabelStyle += isFocused ? `display: block;` : `display: none`;
          break;
        default:
          break;
      }
      return inputLabelStyle;
    }}
  }

  .input-wrap {
  }
`;

function Input({
  placeholder,
  size,
  InputTitle = '',
  inputId,
  templateStyle = 'medium',
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');

  const onChange = ({ target }: { target: HTMLInputElement }) => {
    setInputText(target.value);
  };
  return (
    <Wrapper size={size} isFocused={isFocused} templateStyle={templateStyle}>
      <label className="input-label" htmlFor={inputId}>
        {InputTitle}
      </label>
      <div className="input-wrap">
        <input
          placeholder={placeholder}
          onChange={onChange}
          value={inputText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          id={inputId}
          style={{ background: 'transparent' }}
        />
      </div>
    </Wrapper>
  );
}

export default Input;

interface SizeType {
  width: string;
  height: string;
}

type TemplateStyleType = 'small' | 'large' | 'medium';

interface InputProps {
  placeholder: string;
  size: SizeType;
  templateStyle?: TemplateStyleType;
  inputId: string;
  InputTitle?: React.ReactNode;
}
