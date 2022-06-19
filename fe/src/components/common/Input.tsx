import { useState } from 'react';
import styled, { css } from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';

const INPUT_STYLES = {
  SMALL: {
    PADDING: {
      INITIAL: css`
        padding-left: 24px;
      `,
    },
    BORDER: css`
      border-radius: 11px;
    `,
    LABEL: {
      WIDTH: 80,
      MARGIN: css`
        margin-right: 8px;
      `,
      FONT_STYLE: {
        INITIAL: {
          SIZE: FONT.SIZE.X_SMALL,
          COLOR: COLOR.GREY[400],
        },
        FOCUSED: {
          SIZE: FONT.SIZE.SMALL,
          COLOR: COLOR.GREY[500],
        },
      },
    },
    INPUT_WRAP: {
      INITIAL: css`
        width: calc(100% - 80px);
      `,
    },
  },
  MEDIUM: {
    PADDING: {
      INITIAL: css`
        padding: 14px 24px;
      `,
      FOCUSED: css`
        padding: 4px 24px;
      `,
    },
    BORDER: css`
      border-radius: 14px;
    `,
    FLEX: css`
      flex-direction: column;
    `,
    LABEL: {
      HEIGHT: 20,
      DISPLAY: 'none',
      FONT_STYLE: {
        INITIAL: {
          LINE_HEIGHT: 20,
          SIZE: FONT.SIZE.X_SMALL,
          COLOR: COLOR.GREY[500],
        },
        FOCUSED: {
          DISPLAY: 'block',
        },
      },
    },
    INPUT_WRAP: {
      INITIAL: css`
        height: 100%;
      `,
      FOCUSED: css`
        height: calc(100% - 20px);
      `,
    },
  },
  LARGE: {
    PADDING: {
      INITIAL: css`
        padding: 14px 24px;
      `,
      FOCUSED: css`
        padding: 8px 24px;
      `,
    },
    BORDER: css`
      border-radius: 16px;
    `,
    FLEX: css`
      flex-direction: column;
    `,
  },
};

const Wrapper = styled.div<{
  size: SizeType;
  isFocused: boolean;
  template: TemplateType;
}>`
  display: flex;
  width: ${({ size }) => size.width};
  height: ${({ size }) => size.height};
  background-color: ${({ isFocused }) => (isFocused ? COLOR.WHITE : COLOR.GREY[200])};
  border: 1px solid ${({ isFocused }) => (isFocused ? COLOR.BLACK : 'transparent')};
  font-weight: ${FONT.WEIGHT.REGULAR};

  ${({ template }) => {
    return INPUT_STYLES[template].PADDING.INITIAL, INPUT_STYLES[template].BORDER;
  }};

  /* template MEDIUM, LARGE style */
  ${({ template }) => template !== 'SMALL' && INPUT_STYLES[template].FLEX}
  ${({ isFocused, template }) =>
    template !== 'SMALL' && isFocused && INPUT_STYLES[template].PADDING.FOCUSED}

  .input-label {
    /* template SMALL style */
    ${({ template }) =>
      template === 'SMALL' &&
      (INPUT_STYLES[template].LABEL.WIDTH,
      INPUT_STYLES[template].LABEL.MARGIN,
      css`
        font-size: ${INPUT_STYLES[template].LABEL.FONT_STYLE.INITIAL.SIZE};
        color: ${INPUT_STYLES[template].LABEL.FONT_STYLE.INITIAL.COLOR};
      `)}

    ${({ isFocused, template }) =>
      template === 'SMALL' &&
      isFocused &&
      css`
        font-size: ${INPUT_STYLES[template].LABEL.FONT_STYLE.FOCUSED.SIZE};
        color: ${INPUT_STYLES[template].LABEL.FONT_STYLE.FOCUSED.COLOR};
      `}

    /* template MEDIUM, LARGE style */
    ${({ template }) =>
      template !== 'SMALL' &&
      (INPUT_STYLES.MEDIUM.LABEL.HEIGHT,
      css`
        font-size: ${INPUT_STYLES.MEDIUM.LABEL.FONT_STYLE.INITIAL.SIZE};
        color: ${INPUT_STYLES.MEDIUM.LABEL.FONT_STYLE.INITIAL.COLOR};
        line-height: ${INPUT_STYLES.MEDIUM.LABEL.FONT_STYLE.INITIAL.LINE_HEIGHT};
        display: ${INPUT_STYLES.MEDIUM.LABEL.DISPLAY};
      `)}

    ${({ isFocused, template }) =>
      template !== 'SMALL' &&
      isFocused &&
      css`
        display: ${INPUT_STYLES.MEDIUM.LABEL.FONT_STYLE.FOCUSED.DISPLAY};
      `}
  }

  .input-wrap {
    /* template SMALL style */
    ${({ template }) => template === 'SMALL' && INPUT_STYLES.SMALL.INPUT_WRAP.INITIAL}

    /* template MEDIUM, LARGE style */
    ${({ template }) => template !== 'SMALL' && INPUT_STYLES.MEDIUM.INPUT_WRAP.INITIAL}

    ${({ isFocused, template }) =>
      template !== 'SMALL' && isFocused && INPUT_STYLES.MEDIUM.INPUT_WRAP.FOCUSED}
  }
`;

function Input({ placeholder, size, inputLabel = '', inputId, template = 'MEDIUM' }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');

  const onChange = ({ target }: { target: HTMLInputElement }) => {
    setInputText(target.value);
  };
  return (
    <Wrapper size={size} isFocused={isFocused} template={template}>
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

type TemplateType = keyof typeof INPUT_STYLES;

interface SizeType {
  width: string;
  height: string;
}

interface InputProps {
  placeholder: string;
  size: SizeType;
  template?: TemplateType;
  inputId: string;
  inputLabel?: React.ReactNode;
}
