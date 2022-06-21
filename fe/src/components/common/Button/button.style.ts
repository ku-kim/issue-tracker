import { css } from 'styled-components';
import { COLOR } from 'styles/color';
import FONT from 'styles/font';

const BUTTON_STYLES = {
  LARGE: {
    SIZE: {
      WIDTH: 240,
      HEIGHT: 64,
    },
    FONT_STYLE: {
      SIZE: FONT.SIZE.MEDIUM,
      COLOR: COLOR.WHITE,
      WEIGHT: FONT.WEIGHT.BOLD,
    },
    BORDER_STYLE: `
      border-radius: 20px;
      border: 0;
    `,
  },
  SMALL_STANDARD: {
    SIZE: {
      WIDTH: 120,
      HEIGHT: 40,
    },
    FONT_STYLE: {
      SIZE: FONT.SIZE.X_SMALL,
      COLOR: COLOR.WHITE,
      WEIGHT: FONT.WEIGHT.BOLD,
    },
    BORDER_STYLE: `
      border-radius: 11px;
      border: 0;
    `,
  },
  SMALL_SECONDARY: {
    SIZE: {
      WIDTH: 120,
      HEIGHT: 40,
    },
    FONT_STYLE: {
      SIZE: FONT.SIZE.X_SMALL,
      COLOR: COLOR.BLUE[200],
      WEIGHT: FONT.WEIGHT.BOLD,
    },
    BORDER_STYLE: `
      border-radius: 11px;
      border: 0;
    `,
  },
  MEDIUM_STANDARD: {
    SIZE: {
      WIDTH: 240,
      HEIGHT: 56,
    },
    FONT_STYLE: {
      SIZE: FONT.SIZE.MEDIUM,
      COLOR: COLOR.WHITE,
      WEIGHT: FONT.WEIGHT.BOLD,
    },
    BORDER_STYLE: `
      border-radius: 20px;
      border: 0;
    `,
  },
  MEDIUM_TEXT: {
    SIZE: {
      WIDTH: 87,
      HEIGHT: 32,
    },
    FONT_STYLE: {
      SIZE: FONT.SIZE.MEDIUM,
      COLOR: COLOR.GREY[500],
      WEIGHT: FONT.WEIGHT.BOLD,
    },
    BORDER_STYLE: `
      border: 0;
    `,
  },
  SMALL_TEXT: {
    SIZE: {
      WIDTH: 70,
      HEIGHT: 32,
    },
    FONT_STYLE: {
      SIZE: FONT.SIZE.X_SMALL,
      COLOR: COLOR.GREY[500],
      WEIGHT: FONT.WEIGHT.BOLD,
    },
    BORDER_STYLE: `
      border: 0;
    `,
  },
};

const buttonStyle = css<{
  width: string;
  height: string;
  borderStyle?: string;
  fontSize?: string;
  fontColor?: FontColors;
  fontWeight?: number;
  backgroundColor: BackGroundColors;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  ${({ borderStyle }) => css` ${borderStyle}}`};
  background-color: ${({ backgroundColor }) => backgroundColor.initial};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ fontColor }) => fontColor?.initial};
  gap: 10px;

  &:not(:disabled):hover {
    background-color: ${({ backgroundColor }) => backgroundColor.hover};
    color: ${({ fontColor }) => fontColor?.hover};
  }

  &:focus {
    background-color: ${({ backgroundColor }) => backgroundColor.focus};
  }

  &:active {
    color: ${({ fontColor }) => fontColor?.active};
  }

  &:disabled {
    background-color: ${({ backgroundColor }) => backgroundColor.disabled};
    color: ${({ fontColor }) => fontColor?.disabled};
    cursor: default;
  }
`;

export { BUTTON_STYLES, buttonStyle };

export type TemplateType = keyof typeof BUTTON_STYLES;

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  width?: string;
  height?: string;
  borderStyle?: string;
  template: TemplateType;
  fontStyles?: FontStyles;
  backgroundColor: BackGroundColors;
  className?: string;
}

export interface FontColors {
  initial: string;
  active?: string;
  hover?: string;
  disabled?: string;
}

export interface FontStyles {
  fontSize?: string;
  fontColor?: FontColors;
  fontWeight?: number;
}

interface BackGroundColors {
  initial: string;
  hover?: string;
  focus?: string;
  disabled?: string;
}
