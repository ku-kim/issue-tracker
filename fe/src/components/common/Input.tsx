import { useState } from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';

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
  font-weight: ${FONT.WEIGHT.REGULAR};

  ${({ templateStyle, isFocused }) => {
    let styles;
    switch (templateStyle) {
      case 'small':
        styles = css`
          padding-left: 24px;
          border-radius: 11px;
        `;
        break;
      case 'large':
        styles = css`
          ${isFocused
            ? css`
                padding: 8px 24px;
              `
            : css`
                padding: 18px 24px;
              `}
          flex-direction: column;
          border-radius: 16px;
        `;
        break;
      case 'medium':
        styles = css`
          ${isFocused
            ? css`
                padding: 4px 24px;
              `
            : css`
                padding: 14px 24px;
              `}
          flex-direction: column;
          border-radius: 14px;
        `;
        break;
      default:
        break;
    }
    return styles;
  }};

  .input-label {
    ${({ templateStyle, isFocused, size }) => {
      let inputLabelStyle;
      switch (templateStyle) {
        case 'small':
          inputLabelStyle = css`
            width: 80px;
            line-height: ${size.height};
            margin-right: 8px;
            ${isFocused
              ? css`
                  font-size: 12px;
                  color: ${COLOR.GREY[400]};
                `
              : css`
                  font-size: ${FONT.SIZE.SMALL};
                  color: ${COLOR.GREY[500]};
                `};
          `;
          break;
        case 'large':
        case 'medium':
          inputLabelStyle = css`
            font-size: 12px;
            height: 20px;
            line-height: 20px;
            color: ${COLOR.GREY[500]};
            ${isFocused
              ? css`
                  display: block;
                `
              : css`
                  display: none;
                `}
          `;
          break;
        default:
          break;
      }
      return inputLabelStyle;
    }}
  }

  .input-wrap {
    ${({ templateStyle, isFocused }) => {
      let inputWrapStyle;
      switch (templateStyle) {
        case 'small':
          inputWrapStyle = css`
            width: calc(100% - 80px);
          `;
          break;
        case 'large':
        case 'medium':
          inputWrapStyle = css`
            ${isFocused
              ? css`
                  height: calc(100% - 20px);
                `
              : css`
                  height: 100%;
                `}
          `;
          break;
        default:
          break;
      }
      return inputWrapStyle;
    }}
  }
`;

function Input({
  placeholder,
  size,
  inputLabel = '',
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
      {inputLabel && (
        <label className="input-label" htmlFor={inputId}>
          {inputLabel}
        </label>
      )}
      <div className="input-wrap">
        <input
          placeholder={isFocused ? '' : placeholder}
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
  inputLabel?: React.ReactNode;
}
