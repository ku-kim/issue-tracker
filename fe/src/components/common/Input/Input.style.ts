import { Dispatch, SetStateAction } from 'react';
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
  width?: string;
  height?: string;
  isFocused: boolean;
  template: TemplateType;
}>`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ isFocused }) => (isFocused ? COLOR.WHITE : COLOR.GREY[200])};
  border: 1px solid ${({ isFocused }) => (isFocused ? COLOR.BLACK : 'transparent')};
  font-weight: ${FONT.WEIGHT.REGULAR};

  ${({ template }) => INPUT_STYLES[template].PADDING.INITIAL};
  ${({ template }) => INPUT_STYLES[template].BORDER};

  /* template MEDIUM, LARGE style */
  ${({ template }) => template !== 'SMALL' && INPUT_STYLES[template].FLEX}
  ${({ isFocused, template }) =>
    template !== 'SMALL' && isFocused && INPUT_STYLES[template].PADDING.FOCUSED}
`;

const CustomLabel = styled.label<{
  height?: string;
  isFocused: boolean;
  template: TemplateType;
}>`
  /* template SMALL style */
  width: ${({ template }) => template === 'SMALL' && INPUT_STYLES[template].LABEL.WIDTH}px;
  line-height: ${({ height }) => height};
  ${({ template }) => template === 'SMALL' && INPUT_STYLES[template].LABEL.MARGIN}
  ${({ template }) =>
    template === 'SMALL' &&
    css`
      font-size: ${INPUT_STYLES[template].LABEL.FONT_STYLE.INITIAL.SIZE};
      color: ${INPUT_STYLES[template].LABEL.FONT_STYLE.INITIAL.COLOR};
    `}

    ${({ isFocused, template }) =>
    template === 'SMALL' &&
    isFocused &&
    css`
      font-size: ${INPUT_STYLES[template].LABEL.FONT_STYLE.FOCUSED.SIZE};
      color: ${INPUT_STYLES[template].LABEL.FONT_STYLE.FOCUSED.COLOR};
    `}

    /* template MEDIUM, LARGE style */
    height: ${({ template }) => template !== 'SMALL' && INPUT_STYLES.MEDIUM.LABEL.HEIGHT}px;
  ${({ template }) =>
    template !== 'SMALL' &&
    css`
      font-size: ${INPUT_STYLES.MEDIUM.LABEL.FONT_STYLE.INITIAL.SIZE};
      color: ${INPUT_STYLES.MEDIUM.LABEL.FONT_STYLE.INITIAL.COLOR};
      line-height: ${INPUT_STYLES.MEDIUM.LABEL.FONT_STYLE.INITIAL.LINE_HEIGHT}px;
      display: ${INPUT_STYLES.MEDIUM.LABEL.DISPLAY};
    `}

  ${({ isFocused, template }) =>
    template !== 'SMALL' &&
    isFocused &&
    css`
      display: ${INPUT_STYLES.MEDIUM.LABEL.FONT_STYLE.FOCUSED.DISPLAY};
    `}
`;

const InputWrap = styled.div<{
  isFocused: boolean;
  template: TemplateType;
}>`
  /* template SMALL style */
  ${({ template }) => template === 'SMALL' && INPUT_STYLES.SMALL.INPUT_WRAP.INITIAL}

  /* template MEDIUM, LARGE style */
    ${({ template }) => template !== 'SMALL' && INPUT_STYLES.MEDIUM.INPUT_WRAP.INITIAL}

    ${({ isFocused, template }) =>
    template !== 'SMALL' && isFocused && INPUT_STYLES.MEDIUM.INPUT_WRAP.FOCUSED}
`;

export { INPUT_STYLES, InputWrap, CustomLabel, Wrapper };

export type TemplateType = keyof typeof INPUT_STYLES;

export interface InputProps {
  placeholder: string;
  width?: string;
  height?: string;
  template?: TemplateType;
  inputId?: string;
  inputLabel?: React.ReactNode;
  setIsChangedRequiredValue?: Dispatch<SetStateAction<boolean>>;
}
